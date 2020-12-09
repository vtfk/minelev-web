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
import maal from '../../mocks/laereplan'

import './styles.scss'

export function YffReviewModal ({ selectedStudentId, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const { apiGet } = useSession()

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
    getStudent()
  }, [selectedStudentId])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function send () {
    props.onDismiss()
    window.alert('Tilbakemelding er sendt og arkivert.')
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
            {/* TODO: component */}
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
