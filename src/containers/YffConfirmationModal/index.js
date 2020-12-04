/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import CompanySelector from './company-selector'
import EntitySearch from './entity-search'
import CompanyDetails from './company-details'
import CompanyContactPerson from './company-contact-person'
import StudentContactPerson from './student-contact-person'
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import serializeForm from '../../lib/serialize-form'

import './styles.scss'

export function YffConfirmationModal ({ selectedStudentId, ...props }) {
  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [selectedStudent, setSelectedStudent] = useState(null)
  const { handleSubmit } = useForm()
  const { apiGet, apiPost } = useSession()
  const [contactPersonsCompany, setContactPersonsCompany] = useState([<CompanyContactPerson key={nanoid()} />])
  const [contactPersonsStudent, setContactPersonsStudent] = useState([<StudentContactPerson key={nanoid()} />])
  const onSubmit = (data, event) => {
    event.preventDefault()
  }
  const sendForm = async () => {
    const form = document.getElementById('bekreftelse-form')
    const data = new FormData(form)
    // TODO: Fikse skikkelig serializing
    const json = serializeForm(data)
    const result = await apiPost(`${API.URL}/yff/${selectedStudentId}/bekreftelse`, json)
    console.log(result)
    props.onDismiss()
  }

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

  function addCompanyContactPerson () {
    const copyContactPersonsCompany = [...contactPersonsCompany]
    copyContactPersonsCompany.push(<CompanyContactPerson key={nanoid()} />)
    setContactPersonsCompany(copyContactPersonsCompany)
  }

  function addStudentContactPerson () {
    const copyStudentContactPerson = [...contactPersonsStudent]
    copyStudentContactPerson.push(<StudentContactPerson key={nanoid()} />)
    setContactPersonsStudent(copyStudentContactPerson)
  }

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function send () {
    sendForm()
  }

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
            <EntitySearch setBrregData={setBrregData} fetcher={apiGet} />
            <CompanySelector brregData={brregData} setCompany={setCompany} />
            <form id='bekreftelse-form' onSubmit={handleSubmit(onSubmit)}>
              <CompanyDetails company={company} />
              <div className='input-element'>
                <TextField
                  name='organisasjonsAvdeling'
                  placeholder='Avdeling'
                />
              </div>
              <h2 className='subheader'>Kontaktpersoner</h2>
              {contactPersonsCompany.map(person => person)}
              <button className='add-more-button button-left-icon button-primary' onClick={() => addCompanyContactPerson()}>
                <div className='button-left-icon-icon'>
                  <Icon name='add' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Legg til kontaktperson
                </div>
              </button>
              <div className='input-element'>
                <TextField
                  name='kopiPrEpost'
                  placeholder='Legg e-postadresse(r) som skal få kopi av bekreftelsen. Bruk mellomrom som skilletegn ved flere adresser'
                />
              </div>
              <h2 className='subheader'>Tidsrom</h2>
              startdato(datovelger) - sluttdato(datovelger)
              <div className='input-element'>
                <TextField
                  name='daysPerWeek'
                  placeholder='Antall dager i uken'
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='startTid'
                  placeholder='Fra kl'
                  value='08:00'
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='sluttTid'
                  placeholder='Til kl'
                  value='16:00'
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='oppmotested'
                  placeholder='Oppmøtested'
                />
              </div>
              <h2 className='subheader'>Elevinformasjon</h2>
              <UtdanningsprogrammerSelectorForm fetcher={apiGet} />
              <h2 className='subheader'>Pårørende</h2>
              {contactPersonsStudent.map(person => person)}
              <button className='add-more-button button-left-icon button-primary' onClick={() => addStudentContactPerson()}>
                <div className='button-left-icon-icon'>
                  <Icon name='add' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Legg til pårørende
                </div>
              </button>
            </form>
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
