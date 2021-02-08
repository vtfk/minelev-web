import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link, InitialsBadge, Modal, ModalBody, ModalSideActions, Button } from '@vtfk/components'

import './styles.scss'

export function YffSendModal ({ selectedStudentId, ...props }) {
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
    window.alert('Lokal læreplan er sendt og arkivert.')
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
                    <Paragraph><Link href={`/${ROUTES.classes}/${selectedStudent.classId}`}>{selectedStudent.className || selectedStudent.classId}</Link></Paragraph>
                    <Paragraph>26. april 2001</Paragraph>
                    <Paragraph>bra26041@skole.vtfk.no</Paragraph>
                  </div>
                </div>
              </div>
          }

          <p className='intro'>
            Her sender du den lokale læreplanen til eleven, og arkiverer den i elevens elevmappe.
            <br />
            Hvis du sender og arkiverer kan du likevel gjøre endringer i planen og sende en ny versjon senere.
            <br />
            I elevmappa vil det alltid være den nyeste versjonen som er gjeldende.
          </p>

          <div className='form'>

            <h2 className='subheader'>Innhold i lokal læreplan</h2>

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
            <Button onClick={() => { send() }} type='primary'>Send og arkiver</Button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avbryt og lukk</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </>
  )
}

YffSendModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
