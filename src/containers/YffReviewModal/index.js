/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Heading3, Link } from '../../_lib-components/Typography'
import { RadioButton } from '../../_lib-components/RadioButton'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import createDocument from '../../lib/create-yff-document'
import StudentCard from '../../components/student-card'
import Evaluation from './evaluation'
import Review from './review'
import Attitude from './attitude'
import Details from './details'
import serializeForm from '../../lib/serialize-form'
import { successMessage } from '../../lib/toasts'
import pfdPreview from '../../lib/pdf-preview'

import './styles.scss'

export function YffReviewModal ({ student, utplasseringsId, ...props }) {
  const [utplassering, setUtplassering] = useState()
  const [maal, setMaal] = useState()
  const [dager, setDager] = useState('')
  const [timer, setTimer] = useState('')
  const { apiGet, apiPost, apiPut } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)
  const { id: studentID } = student
  const isOpen = props.open

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    async function getMaal () {
      const laereplan = await apiGet(`${API.URL}/yff/${studentID}/maal`)
      const maal = laereplan.filter(maal => maal.referanseID === utplasseringsId)
      setMaal(maal)
    }
    async function getUtplassering () {
      const utplassering = await apiGet(`${API.URL}/yff/${studentID}/utplassering/${utplasseringsId}`)
      setUtplassering(utplassering[0])
    }
    if (isOpen) {
      getUtplassering()
      getMaal()
    }
  }, [isOpen, utplasseringsId])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function generateTilbakemeldingsdata () {
    const form = document.getElementById('review-form')
    const data = new FormData(form)
    const json = serializeForm(data)
    // filterer ut alle kompetansemål fra tilbakemeldingen
    const evalueringsdata = Object.keys(json)
      .filter(key => !key.startsWith('kompetansemaal'))
      .reduce((data, key) => {
        data[key] = json[key]
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
    return {
      evalueringsdata,
      kompetansemal
    }
  }

  function generateDocument () {
    const { evalueringsdata, kompetansemal } = generateTilbakemeldingsdata()
    return createDocument({
      variant: 'tilbakemelding',
      student,
      content: {
        evalueringsdata,
        kompetansemal
      }
    })
  }

  async function send () {
    const { evalueringsdata, kompetansemal } = generateTilbakemeldingsdata()
    const tilbakemeldingsUrl = `${API.URL}/yff/${studentID}/utplassering/${utplasseringsId}`
    // oppdaterer alle mål med tilbakemeldinger
    const kompetanseMaalUrl = `${API.URL}/yff/${studentID}/maal`
    const jobs = kompetansemal.map(maal => {
      const { _id, tilbakemelding } = maal
      const url = `${kompetanseMaalUrl}/${_id}`
      return apiPut(url, { tilbakemelding })
    })
    jobs.push(apiPut(tilbakemeldingsUrl, { tilbakemelding: evalueringsdata }))
    await Promise.all(jobs)
    successMessage('👍', 'Tilbakemeldingen er lagret.')
    // Cleanup state
    setUtplassering(false)
    setMaal(false)
    props.onFinished()
  }

  return (
    <>
      <PreviewModal />
      <Modal
        {...props}
        className='yff-send-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          <StudentCard student={student} />
          <Details utplassering={utplassering} />
          <p className='intro'>
            Tilbakemelding for elevens utplassering
          </p>

          <div className='form'>
            <form id='review-form'>
              <Review maal={maal} />
              <Evaluation />
              <Attitude />
              <h2 className='subheader'>Fravær under utplasseringen</h2>
              <div className='input-element'>
                <TextField
                  name='fravarDager'
                  placeholder='Antall hele dager fravær'
                  value={dager}
                  onChange={event => setDager(event.target.value)}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='fravarTimer'
                  placeholder='Antall timer fravær'
                  value={timer}
                  onChange={event => setTimer(event.target.value)}
                />
              </div>
              <div>
                <Heading3>Varslet eleven selv om fraværet?</Heading3>
                <RadioButton name='varsletFravar' value='ja' label='Ja' />
                <RadioButton name='varsletFravar' value='nei' label='Nei' />
                <RadioButton name='varsletFravar' value='av og til' label='Av og til' />
                <RadioButton name='varsletFravar' value='0' label='Ikke aktuelt' />
              </div>
            </form>
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => openPreviewModal(generateDocument())}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <button onClick={() => { send() }} className='button button-primary'>Lagre og arkiver</button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avbryt og lukk</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </>
  )
}

YffReviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
