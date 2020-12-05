import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { Icon } from '../../_lib-components/Icon'

import './styles.scss'

export function YffCurriculumModal ({ selectedStudentId, ...props }) {
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
    window.alert('Læreplan er opprettet.')
  }

  return (
    <>
      <Modal
        {...props}
        className='yff-curriculum-modal'
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
            Her endrer du den lokale læreplanen for eleven og velger kompetansemål eleven skal jobbe med i løpet av utplasseringen. Du skriver også inn elevens arbeidsoppgaver knyttet til hvert kompetansemål.
          </p>

          <div className='form'>

            <h2 className='subheader'>Klassetrinn</h2>

            <div className='input-element'>
              <Select
                placeholder='Klassetrinn'
                items={[
                  { value: 1, label: 'Vg1' },
                  { value: 2, label: 'Vg2' }
                ]}
                selectedItem={{ value: 1, label: 'Vg1' }}
                onChange={(item) => { console.log(item) }}
              />
            </div>

            <h2 className='subheader'>Legg til nye kompetansemål</h2>
            <div className='add-new-curriculum'>
              <div className='input-element'>
                <Select
                  placeholder='Velg utplasseringssted'
                  items={[
                    { value: 1, label: 'Skole' },
                    { value: 2, label: 'Ungdomsbedrift (entreprenørskap)' }
                  ]}
                  selectedItem={{ value: 1, label: 'Skole' }}
                  onChange={(item) => { console.log(item) }}
                />
              </div>

              <div className='input-element'>
                <Select
                  placeholder='Velg skole'
                  items={[
                    { value: 1, label: 'Bamble videregående skole, avdeling Croftholmen' },
                    { value: 2, label: 'Skogmo videregående skole' }
                  ]}
                  selectedItem={{ value: 1, label: 'Bamble videregående skole, avdeling Croftholmen' }}
                  onChange={(item) => { console.log(item) }}
                />
              </div>

              <div className='input-element'>
                <Select
                  placeholder='Velg utdanningsprogram'
                  items={[
                    { value: 1, label: 'Bygg- og anleggsteknikk' },
                    { value: 2, label: 'Noe annet' }
                  ]}
                  selectedItem={{ value: 1, label: 'Bygg- og anleggsteknikk' }}
                  onChange={(item) => { console.log(item) }}
                />
              </div>

              <div className='input-element'>
                <Select
                  placeholder='Velg klassetrinn'
                  items={[
                    { value: 1, label: 'VG3' },
                    { value: 2, label: 'Noe annet' }
                  ]}
                  selectedItem={{ value: 1, label: 'VG3' }}
                  onChange={(item) => { console.log(item) }}
                />
              </div>

              <div className='input-element'>
                <Select
                  placeholder='Velg programområde'
                  items={[
                    { value: 1, label: 'Anleggsmaskinførerfaget' },
                    { value: 2, label: 'Noe annet' }
                  ]}
                  selectedItem={{ value: 1, label: 'Anleggsmaskinførerfaget' }}
                  onChange={(item) => { console.log(item) }}
                />
              </div>

              <div className='input-element'>
                <SelectMultiple
                  placeholder='Velg kompetansemål'
                  items={[
                    { value: 1, label: 'Mestre tre ulike typer masseflyttingsmaskiner' },
                    { value: 2, label: 'Utføre arbeid innenfor graving, lasting, transport, utlegging og finavretting' },
                    { value: 3, label: 'Bruke tilleggsutstyr tilpasset arbeidsoppgaven på en forsvarlig og hensiktsmessig måte' }
                  ]}
                  selectedItems={[
                    { value: 2, label: 'Utføre arbeid innenfor graving, lasting, transport, utlegging og finavretting' },
                    { value: 3, label: 'Bruke tilleggsutstyr tilpasset arbeidsoppgaven på en forsvarlig og hensiktsmessig måte' }
                  ]}
                  onChange={(item) => { window.alert('Valgt: ' + item.label) }}
                />
              </div>

              {/* TODO: component */}
              <button className='check-button button-left-icon button-primary'>
                <div className='button-left-icon-icon'>
                  <Icon name='check' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Lagre kompetansemål i lokal læreplan
                </div>
              </button>
            </div>

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
            {/* TODO: component */}
            <button onClick={() => { send() }} className='button button-primary'>Send</button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Lagre og lukk</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </>
  )
}

YffCurriculumModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
