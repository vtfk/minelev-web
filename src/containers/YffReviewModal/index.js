/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Button } from '../../_lib-components/Button'

import createDocument from '../../lib/create-yff-document'
import logError from '../../lib/log-error'
import YffErrorFallback from '../../components/yff-error-fallback'
import StudentCard from '../../components/student-card'
import Evaluation from './evaluation'
import Review from './review'
import Attitude from './attitude'
import Absence from './absence'
import Details from './details'
import serializeForm from '../../lib/serialize-form'
import { successMessage, errorMessage } from '../../lib/toasts'
import pfdPreview from '../../lib/pdf-preview'

import './styles.scss'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

export function YffReviewModal ({ student, utplasseringsId, ...props }) {
  const { apiGet, apiPost, apiPut } = useSession()
  const { PreviewModal, openPreviewModal, closePreviewModal, openRef } = pfdPreview(apiPost)
  const { id: studentID } = student
  const isOpen = props.open

  const [utplassering, setUtplassering] = useState()
  const [maal, setMaal] = useState()

  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [reviewHasErrors, setReviewHasErrors] = useState(false)
  const [evaluationHasErrors, setEvaluationHasErrors] = useState(false)
  const [attitudeHasErrors, setAttitudeHasErrors] = useState(false)
  const [absenceHasErrors, setAbsenceHasErrors] = useState(false)

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') openRef.current ? closePreviewModal() : props.onDismiss(cleanupState)
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  useEffect(() => {
    async function getMaal () {
      const { data: laereplan } = await apiGet(`${API.URL}/yff/${studentID}/maal`)
      try {
        const maal = laereplan.filter(maal => maal.referanseID === utplasseringsId)
        setMaal(maal)
      } catch (error) {
        logError(error)
      }
    }
    async function getUtplassering () {
      try {
        const { data } = await apiGet(`${API.URL}/yff/${studentID}/utplassering/${utplasseringsId}`)
        setUtplassering(data)
      } catch (error) {
        logError(error)
      }
    }
    if (isOpen) {
      getUtplassering()
      getMaal()
    }
  }, [isOpen, utplasseringsId])

  function cleanupState () {
    setUtplassering(false)
    setMaal(false)
    setSubmitting(false)
  }

  function generateTilbakemeldingsdata () {
    const form = document.getElementById('review-form')
    const data = new FormData(form)
    const json = serializeForm(data)

    const evalueringsdata = {}
    Object.keys(json)
      .filter(key => !key.startsWith('kompetansemaal')) // filterer ut alle kompetansemål
      .reduce((data, key) => {
        try {
          data[key] = JSON.parse(json[key])
        } catch (error) {
          data[key] = json[key]
        }

        const evalKeySplit = key.split('-')
        const evalType = evalKeySplit.shift()
        const evalName = evalKeySplit.join('-')
        if (evalName === '' || evalType === '') return data
        if (!evalueringsdata[evalName]) evalueringsdata[evalName] = {}
        const prop = `${evalType}`.endsWith('score') ? 'score' : 'title'

        evalueringsdata[evalName][prop] = data[key]
        return data
      }, {})

    const kompetansemal = Object.keys(json)
      .filter(key => key.startsWith('kompetansemaal'))
      .reduce((array, key) => {
        const _id = key.split('-')[1]
        const maalInnhold = maal.find(item => item._id === _id)
        const tilbakemelding = json[key]
        array.push({ ...maalInnhold, tilbakemelding })
        return array
      }, [])

    const fravar = {
      dager: json.fravarDager,
      timer: json.fravarTimer,
      varslet: json.varsletFravar
    }

    return {
      evalueringsdata,
      fravar,
      kompetansemal,
      utplassering
    }
  }

  function generateDocument (data) {
    const { evalueringsdata, fravar, kompetansemal, utplassering } = data || generateTilbakemeldingsdata()
    return createDocument({
      variant: 'tilbakemelding',
      student,
      content: {
        utplassering,
        fravar,
        evalueringsdata,
        kompetansemal
      }
    })
  }

  const validate = () => {
    return !reviewHasErrors && !evaluationHasErrors && !attitudeHasErrors && !absenceHasErrors
  }

  async function openPreview () {
    if (submitting) return
    if (validate()) return
    if (!validate()) return // TODO: Fjern når validering er i boks

    const document = await generateDocument()
    openPreviewModal(document)
  }

  async function send () {
    setHasSubmitted(true)

    if (submitting) return
    if (validate()) return
    setSubmitting(true)

    const { evalueringsdata, kompetansemal } = generateTilbakemeldingsdata()
    const tilbakemeldingsUrl = `${API.URL}/yff/${studentID}/utplassering/${utplasseringsId}`
    try {
      // oppdaterer alle mål med tilbakemeldinger
      const kompetanseMaalUrl = `${API.URL}/yff/${studentID}/maal`
      const jobs = kompetansemal.map(maal => {
        const { _id, tilbakemelding } = maal
        const url = `${kompetanseMaalUrl}/${_id}`
        return apiPut(url, { tilbakemelding })
      })
      jobs.push(apiPut(tilbakemeldingsUrl, { tilbakemelding: evalueringsdata }))
      await Promise.all(jobs)
      const document = generateDocument({ evalueringsdata, kompetansemal, utplassering })
      await apiPost(`${API.URL}/documents`, document)
      successMessage('👍', 'Tilbakemeldingen er lagret.')
      props.onFinished(cleanupState)
    } catch (error) {
      logError(error)
      errorMessage('Tilbakemeldingen ble ikke lagret', 'Du kan forsøke igjen, men dersom problemene vedvarer kontakter du systemadministrator')
      setSubmitting(false)
    }
  }

  return (
    <Sentry.ErrorBoundary
      FallbackComponent={YffErrorFallback}
      onReset={() => props.onDismiss()}
    >
      <PreviewModal />
      <Modal
        {...props}
        className='yff-review-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          <StudentCard student={student} />
          <Details utplassering={utplassering} />
          <div>
            <form id='review-form' className='form'>
              <Review maal={maal} showError={hasSubmitted} onError={setReviewHasErrors} />
              <Evaluation showError={hasSubmitted} onError={setEvaluationHasErrors} />
              <Attitude showError={hasSubmitted} onError={setAttitudeHasErrors} />
              <Absence showError={hasSubmitted} onError={setAbsenceHasErrors} />
            </form>
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            {
              student
                ? <Link onClick={async () => { await openPreview() }}>Forhåndsvisning</Link>
                : <SkeletonLoader width='100%' />
            }
          </div>
          <div className='action'>
            {
              student
                ? <Button onClick={async () => { await send() }} type='primary' spinner={submitting}>Send og arkiver</Button>
                : <SkeletonLoader variant='circle' style={{ borderRadius: '24px' }}><Button type='primary'>Send og arkiver</Button></SkeletonLoader>
            }
          </div>
          <div className='action'>
            <Link onClick={() => { props.onDismiss(cleanupState) }}>Avbryt og lukk</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </Sentry.ErrorBoundary>
  )
}

YffReviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
