/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import Evaluation from './evaluation'
import Review from './review'
import Attitude from './attitude'
import serializeForm from '../../lib/serialize-form'

import './styles.scss'

export function YffReviewModal ({ selectedStudentId, utplasseringsId, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [maal, setMaal] = useState()
  const { apiGet, apiPut } = useSession()
  // TODO hente data fra utplassering

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
      console.log(maal)
      setMaal(maal)
    }
    getStudent()
    getMaal()
  }, [selectedStudentId])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  // TODO implementere forhåndsvisning
  async function send () {
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
    // TODO: Cleanup state
    props.onDismiss()
  }

  return (
    <>
      <Modal
        {...props}
        className='yff-send-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          {
            selectedStudent &&
            selectedStudent.firstName &&
              <div className='person-information'>
                <div className='image'>
                  <InitialsBadge firstName={selectedStudent.firstName} lastName={selectedStudent.lastName} size='large' />
                </div>
                <div className='text-wrapper'>
                  <Heading3 className='name'>
                    {selectedStudent.firstName} {selectedStudent.lastName}
                  </Heading3>
                  <div className='other'>
                    <Paragraph>{selectedStudent.schoolName}</Paragraph>
                    <Paragraph><Link href={`/${ROUTES.classes}/${selectedStudent.classId}`}>{selectedStudent.className}</Link></Paragraph>
                    <Paragraph>26. april 2001</Paragraph>
                    <Paragraph>bra26041@skole.vtfk.no</Paragraph>
                  </div>
                </div>
              </div>
          }
          {/** TODO: data om utplasseringen */}
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
              <fieldset>
                <legend>Varslet eleven selv om fraværet?</legend>
                <label for='fravar-ja'>Ja</label>
                <input type='radio' name='varsletFravar' id='fravar-ja' value='ja' />
                <label for='fravar-nei'>Nei</label>
                <input type='radio' name='varsletFravar' id='fravar-nei' value='nei' />
                <label for='fravar-noen'>Av og til</label>
                <input type='radio' name='varsletFravar' id='fravar-noe' value='av og til' />
                <label for='fravar-uaktuelt'>Ikke aktuelt</label>
                <input type='radio' name='varsletFravar' id='fravar-ja' value='0' />
              </fieldset>
            </form>
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => { window.alert('Ikke implementert') }}>Forhåndsvisning</Link>
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
