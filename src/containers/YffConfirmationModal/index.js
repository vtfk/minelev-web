import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import CompanySelector from './company-selector'
import EntitySearch from './entity-search'

import './styles.scss'

export function YffConfirmationModal ({ selectedStudentId, ...props }) {
  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [select, setSelect] = useState(null)
  const [selectMultiple, setSelectMultiple] = useState([
    { value: 2, label: 'Valg 2' },
    { value: 3, label: 'Valg 3' }
  ])
  const [text, setText] = useState('')
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
    window.alert('Bekreftelse om utplassering av elev er sendt.')
  }

  console.log(company)
  return (
    <>
      <Modal
        {...props}
        className='yff-confirmation-modal'
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
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested. Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
            <br />
            <br />
            Ved søk på virksomhet kan du bruke virksomhetens navn eller organisasjonsnummer.
          </p>

          <div className='form'>

            <h2 className='subheader'>Mellomheader</h2>
            <EntitySearch setBrregData={setBrregData} fetcher={apiGet} />
            <CompanySelector brregData={brregData} setCompany={setCompany} />
            <div className='prefilled'>
              <div className='prefilled-label'>Ferdig utfylt</div>
              <div className='prefilled-text'>Hentet info her</div>
            </div>

            <div className='prefilled'>
              <div className='prefilled-label'>Ferdig utfylt</div>
              <div className='prefilled-text'>Hentet info her</div>
            </div>

            <h2 className='subheader'>Mellomheader</h2>

            <div className='input-element'>
              <TextField
                placeholder='Placeholder tekstinput'
                value={text}
                onChange={(event) => { setText(event.target.value) }}
              />
            </div>

            <div className='input-element'>
              <Select
                placeholder='Placeholder select enkeltelement'
                items={[
                  { value: 1, label: 'Valg 1' },
                  { value: 2, label: 'Valg 2' },
                  { value: 3, label: 'Valg 3' }
                ]}
                selectedItem={select}
                onChange={(item) => { setSelect(item) }}
              />
            </div>

            <div className='input-element'>
              <SelectMultiple
                placeholder='Placeholder select flere'
                items={[
                  { value: 1, label: 'Valg 1' },
                  { value: 2, label: 'Valg 2' },
                  { value: 3, label: 'Valg 3' },
                  { value: 4, label: 'Valg 4' },
                  { value: 5, label: 'Valg 5' }
                ]}
                selectedItems={selectMultiple}
                onChange={(item) => {
                  setSelectMultiple([
                    { value: 1, label: 'Valg 1' },
                    { value: 2, label: 'Valg 2' },
                    { value: 3, label: 'Valg 3' },
                    { value: 4, label: 'Valg 4' },
                    { value: 5, label: 'Valg 5' }
                  ])
                }}
              />
            </div>

            <h2 className='subheader'>Kontaktperson</h2>

            <div className='contact-person'>
              <div className='input-element'>
                <TextField
                  placeholder='Fornavn og etternavn'
                  value=''
                  onChange={(event) => { console.log(event.target.value) }}
                />
              </div>

              <div className='input-element'>
                <TextField
                  placeholder='Telefonnummer'
                  value=''
                  onChange={(event) => { console.log(event.target.value) }}
                />
              </div>

              <div className='input-element'>
                <TextField
                  type='email'
                  placeholder='E-post'
                  value=''
                  onChange={(event) => { console.log(event.target.value) }}
                />
              </div>

              <div className='input-element'>
                <TextField
                  placeholder='Avdeling'
                  value=''
                  onChange={(event) => { console.log(event.target.value) }}
                />
              </div>
            </div>

            {/* TODO: component */}
            <button className='add-more-button button-left-icon button-primary'>
              <div className='button-left-icon-icon'>
                <Icon name='add' size='small' />
              </div>
              <div className='button-left-icon-text'>
                Legg til kontaktperson
              </div>
            </button>

            <h2 className='subheader'>Pårørende</h2>

            <div className='dependent-person'>
              <div className='input-element'>
                <TextField
                  placeholder='Fornavn og etternavn'
                  value=''
                  onChange={(event) => { console.log(event.target.value) }}
                />
              </div>

              <div className='input-element'>
                <TextField
                  placeholder='Telefonnummer'
                  value=''
                  onChange={(event) => { console.log(event.target.value) }}
                />
              </div>
            </div>

            {/* TODO: component */}
            <button className='add-more-button button-left-icon button-primary'>
              <div className='button-left-icon-icon'>
                <Icon name='add' size='small' />
              </div>
              <div className='button-left-icon-text'>
                Legg til pårørende
              </div>
            </button>

          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => { window.alert('Ikke implementert') }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            {/* TODO: component */}
            <button onClick={() => { send() }} className='button button-primary'>Send</button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </>
  )
}

YffConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
