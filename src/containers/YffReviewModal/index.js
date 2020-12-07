import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'

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

            <h2 className='subheader'>Tilbakemelding</h2>

            <table className='data-actions-table'>
              <thead>
                <tr>
                  <th><Paragraph size='small'>Kompetansemål / Arbeidsoppgaver</Paragraph></th>
                  <th><Paragraph size='small'>Utplasseringssted</Paragraph></th>
                  <th className='actions-th'><Paragraph size='small'>Ny handling</Paragraph></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Paragraph>
                      Utarbeide framdriftsplanar for arbeidet og bestille materiale i samsvar med teikningar og beskrivingar
                    </Paragraph>
                  </td>
                  <td>
                    Vest-Telemark vidaregåande skule, avdeling Seljord
                  </td>
                  <td className='actions'>
                    <Link onClick={() => { window.alert('Ikke implementert') }}>Fjern</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Paragraph>
                      Bruke digitale måleverktøy
                    </Paragraph>
                  </td>
                  <td>
                    Vest-Telemark vidaregåande skule, avdeling Seljord
                  </td>
                  <td className='actions'>
                    <Link onClick={() => { window.alert('Ikke implementert') }}>Fjern</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Paragraph>
                      Bruke nivellerings- og oppmålingsutstyr til stikking av anleggstekniske arbeid
                    </Paragraph>
                  </td>
                  <td>
                    Vest-Telemark vidaregåande skule, avdeling Seljord
                  </td>
                  <td className='actions'>
                    <Link onClick={() => { window.alert('Ikke implementert') }}>Fjern</Link>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => { window.alert('Ikke implementert') }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            {/* TODO: component */}
            <button onClick={() => { send() }} className='button button-primary'>Send brev og arkiver</button>
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
