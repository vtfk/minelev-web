/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Heading3, Link } from '../../_lib-components/Typography'
import { RadioButton } from '../../_lib-components/RadioButton'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import StudentCard from '../../components/student-card'
import Evaluation from './evaluation'
import Review from './review'
import Attitude from './attitude'
import Details from './details'
import serializeForm from '../../lib/serialize-form'
import { successMessage } from '../../lib/toasts'
import pfdPreview from '../../lib/pdf-preview'

import './styles.scss'

export function YffReviewModal ({ selectedStudentId, utplasseringsId, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [utplassering, setUtplassering] = useState()
  const [maal, setMaal] = useState()
  const { apiGet, apiPost, apiPut } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    async function getStudent () {
      const student = await apiGet(API.URL + '/students/' + selectedStudentId)
      setSelectedStudent(student.data)
    }
    async function getMaal () {
      const laereplan = await apiGet(`${API.URL}/yff/${selectedStudentId}/laereplan`)
      const maal = laereplan[0].default.filter(maal => maal.referanseID === utplasseringsId)
      setMaal(maal)
    }
    async function getUtplassering () {
      const utplassering = await apiGet(`${API.URL}/yff/${selectedStudentId}/utplassering/${utplasseringsId}`)
      setUtplassering(utplassering[0])
    }
    getStudent()
    getUtplassering()
    getMaal()
  }, [selectedStudentId])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  // TODO repacke document for preview og create content
  function createDocument () {
    return {
      type: 'yff',
      variant: 'tilbakemelding',
      student: {
        username: selectedStudentId
      },
      content: {
        year: new Date().getFullYear()
      }
    }
  }

  async function send () {
    const form = document.getElementById('review-form')
    const data = new FormData(form)
    const json = serializeForm(data)
    console.log(json)
    // filterer ut alle kompetansemål fra tilbakemeldingen
    const evalueringsdata = Object.keys(json)
      .filter(key => !key.startsWith('kompetansemaal'))
      .reduce((data, key) => {
        data[key] = json[key]
        return data
      }, {})
    const tilbakemeldingsUrl = `${API.URL}/yff/${selectedStudentId}/utplassering/${utplasseringsId}`
    // oppdaterer alle mål med tilbakemeldinger
    const kompetanseMaalUrl = `${API.URL}/yff/${selectedStudentId}/maal`
    const jobs = Object.keys(json)
      .filter(key => key.startsWith('kompetansemaal'))
      .reduce((array, key) => {
        const _id = key.split('-')[1]
        const url = `${kompetanseMaalUrl}/${_id}`
        array.push(apiPut(url, { tilbakemelding: json[key] }))
        return array
      }, [])
    jobs.push(apiPut(tilbakemeldingsUrl, { tilbakemelding: evalueringsdata }))
    await Promise.all(jobs)
    successMessage('👍', 'Tilbakemeldingen er lagret.')
    // Cleanup state
    setSelectedStudent(null)
    setUtplassering(false)
    setMaal(false)
    props.onDismiss()
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
          {
            selectedStudent &&
            selectedStudent.firstName &&
              <StudentCard student={selectedStudent} />
          }
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
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='fravarTimer'
                  placeholder='Antall timer fravær'
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
            <Link onClick={() => openPreviewModal(createDocument())}>Forhåndsvisning</Link>
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
