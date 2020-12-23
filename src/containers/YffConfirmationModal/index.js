/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import StudentCard from '../../components/student-card'
import createDocument from '../../lib/create-yff-document'
import CompanySelector from './company-selector'
import EntitySearch from './entity-search'
import CompanyDetails from './company-details'
import CompanyContactPerson from './company-contact-person'
import StudentContactPerson from './student-contact-person'
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import serializeForm from '../../lib/serialize-form'
import repackBekreftelse from '../../lib/repack-bekreftelse'
import pfdPreview from '../../lib/pdf-preview'
import { successMessage } from '../../lib/toasts'

import './styles.scss'

export function YffConfirmationModal ({ selectedStudentId, ...props }) {
  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [selectedStudent, setSelectedStudent] = useState(null)
  const { handleSubmit } = useForm()
  const { apiGet, apiPost } = useSession()
  const [contactPersonsCompany, setContactPersonsCompany] = useState([<CompanyContactPerson key={nanoid()} />])
  const [contactPersonsStudent, setContactPersonsStudent] = useState([<StudentContactPerson key={nanoid()} />])
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)
  const onSubmit = (data, event) => {
    event.preventDefault()
  }

  const generateBekreftelse = () => {
    const form = document.getElementById('bekreftelse-form')
    const data = new FormData(form)
    const json = serializeForm(data)
    const bekreftelse = repackBekreftelse({ bekreftelse: { ...json }, company: { ...company } })
    return bekreftelse
  }

  const sendForm = async () => {
    const bekreftelse = generateBekreftelse()
    await apiPost(`${API.URL}/yff/${selectedStudentId}/utplassering`, bekreftelse)
    successMessage('👍', 'Bekreftelse om utplassering sendt.')
    // cleanup state
    setBrregData(null)
    setCompany(false)
    setSelectedStudent(null)
    setContactPersonsCompany([<CompanyContactPerson key={nanoid()} />])
    setContactPersonsStudent([<StudentContactPerson key={nanoid()} />])
    props.onDismiss()
    // TODO: Refresh studentsiden etter oppdateringer
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

  function generateDocument () {
    const bekreftelse = generateBekreftelse()
    return createDocument({
      variant: 'bekreftelse',
      student: selectedStudent,
      content: {
        bekreftelse
      }
    })
  }

  function FormView () {
    return (
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
        {/** TODO: Vurdere å hente inn kalenderkomponenten */}
        <div className='input-element'>
          <label htmlFor='datofra'>Fra og med: </label>
          <input type='date' name='fraDato' id='datofra' placeholder='f.o.m' />
          <label htmlFor='datotil'>Til og med:</label>
          <input type='date' name='tilDato' id='datotil' placeholder='t.o.m' />
        </div>
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
    )
  }

  return (
    <>
      <PreviewModal />
      <Modal
        {...props}
        className='yff-confirmation-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          {
            selectedStudent &&
            selectedStudent.firstName &&
              <StudentCard student={selectedStudent} />
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
            {company && <FormView />}
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => openPreviewModal(generateDocument())}>Forhåndsvisning</Link>
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
