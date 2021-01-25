/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { useForm } from 'react-hook-form'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import { Button } from '../../_lib-components/Button'
import { Datepicker } from '../../_lib-components/Datepicker'

import StudentCard from '../../components/student-card'
import createDocument from '../../lib/create-yff-document'
import YffErrorFallback from '../../components/yff-error-fallback'
import CompanySelector from './company-selector'
import EntitySearch from './entity-search'
import CompanyDetails from './company-details'
import CompanyContactPerson from './company-contact-person'
import CompanyEmailCopy from './company-email-copy'
import StudentContactPerson from './student-contact-person'
import serializeForm from '../../lib/serialize-form'
import repackBekreftelse from '../../lib/repack-bekreftelse'
import pfdPreview from '../../lib/pdf-preview'
import { successMessage, errorMessage } from '../../lib/toasts'
import logError from '../../lib/log-error'

import './styles.scss'

function getClassLevel (id) {
  return `VG${/\d/.exec(id) || 1}`
}

export function YffConfirmationModal ({ student, ...props }) {
  const [submitted, setSubmitted] = useState(false)
  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [contactPersonsCompany, setContactPersonsCompany] = useState([])
  const [contactPersonsStudent, setContactPersonsStudent] = useState([])
  const [copyEmails, setCopyEmails] = useState([])
  const [avdeling, setAvdeling] = useState('')
  const [dager, setDager] = useState('')
  const [sted, setSted] = useState('')
  const [startDato, setStartDato] = useState(new Date())
  const [sluttDato, setSluttDato] = useState(null)
  const [start, setStart] = useState('08:00')
  const [slutt, setSlutt] = useState('16:00')
  const { handleSubmit } = useForm()
  const { apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)
  const { id: studentID } = student
  const onSubmit = (data, event) => {
    event.preventDefault()
  }

  const cleanupState = () => {
    setBrregData(null)
    setCompany(false)
    setContactPersonsCompany([])
    setContactPersonsStudent([])
    setCopyEmails([])
    setAvdeling('')
    setDager('')
    setSted('')
    setStartDato(new Date())
    setSluttDato(null)
    setStart('08:00')
    setSlutt('16:00')
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
    try {
      await apiPost(`${API.URL}/yff/${studentID}/utplassering`, bekreftelse)
      successMessage('👍', 'Bekreftelse om utplassering sendt.')
      await apiPost(`${API.URL}/documents`, generateDocument(bekreftelse))
      props.onFinished(cleanupState)
    } catch (error) {
      logError(error)
      errorMessage('Bekreftelsen ble ikke opprettet', 'Du kan forsøke igjen, men om feilen vedvarer kontakt systemadministrator')
    }
  }

  function addCompanyContactPerson (event) {
    if (event) {
      event.preventDefault()
    }
    const copyContactPersonsCompany = [...contactPersonsCompany]
    copyContactPersonsCompany.push(<CompanyContactPerson />)
    setContactPersonsCompany(copyContactPersonsCompany)
  }

  function addStudentContactPerson (event) {
    if (event) {
      event.preventDefault()
    }
    const copyStudentContactPerson = [...contactPersonsStudent]
    copyStudentContactPerson.push(<StudentContactPerson />)
    setContactPersonsStudent(copyStudentContactPerson)
  }

  function addCompanyContactCopyEmail (event) {
    if (event) {
      event.preventDefault()
    }
    const copyCompanyEmails = [...copyEmails]
    copyCompanyEmails.push(<CompanyEmailCopy />)
    setCopyEmails(copyCompanyEmails)
  }

  function onStartDateChange (date) {
    setStartDato(date)
    if (date > sluttDato) setSluttDato(null)
  }

  useEffect(() => {
    setSubmitted(false)
  }, [brregData, company])

  useEffect(() => {
    addCompanyContactPerson()
    addStudentContactPerson()
  }, [])

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') props.onDismiss(cleanupState)
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  function send () {
    setSubmitted(true)
    if (company) sendForm()
  }

  function generateDocument (data) {
    const bekreftelse = data || generateBekreftelse()
    return createDocument({
      variant: 'bekreftelse',
      student,
      content: {
        bekreftelse,
        utdanningsprogram: student.utdanningsprogram,
        level: student.level || getClassLevel(student.classId)
      }
    })
  }

  return (
    <Sentry.ErrorBoundary
      FallbackComponent={YffErrorFallback}
      onReset={() => props.onDismiss()}
    >
      <PreviewModal />
      <Modal
        {...props}
        className='yff-confirmation-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          <StudentCard student={student} />
          <p className='intro'>
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested. Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
            <br />
            <br />
            Ved søk på virksomhet kan du bruke virksomhetens navn eller organisasjonsnummer.
          </p>
          <div className='form'>
            <EntitySearch setBrregData={setBrregData} fetcher={apiGet} showError={submitted && !brregData} />
            <CompanySelector brregData={brregData} setCompany={setCompany} showError={submitted && !company} />
            <CompanyDetails company={company} />
            <form id='bekreftelse-form' onSubmit={handleSubmit(onSubmit)} className={company ? '' : 'hidden'}>
              <div className='input-element'>
                <TextField
                  name='organisasjonsAvdeling'
                  placeholder='Avdeling'
                  value={avdeling}
                  onChange={event => setAvdeling(event.target.value)}
                />
              </div>
              <h2 className='subheader'>Kontaktpersoner</h2>
              {contactPersonsCompany.map(person => person)}
              <button className='add-more-button button-left-icon button-primary' onClick={addCompanyContactPerson}>
                <div className='button-left-icon-icon'>
                  <Icon name='add' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Legg til kontaktperson
                </div>
              </button>
              <h2 className='subheader'>Kopi pr e-post</h2>
              {copyEmails.map(email => email)}
              <button className='add-more-button button-left-icon button-primary' onClick={addCompanyContactCopyEmail}>
                <div className='button-left-icon-icon'>
                  <Icon name='add' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Legg til kopimottager
                </div>
              </button>
              <h2 className='subheader'>Tidsrom</h2>
              <div className='input-element'>
                <Datepicker
                  placeholder='Fra og med'
                  name='fraDato'
                  selected={startDato}
                  onChange={onStartDateChange}
                />
              </div>
              <div className='input-element'>
                <Datepicker
                  placeholder='Til og med'
                  name='tilDato'
                  selected={sluttDato}
                  minDate={startDato}
                  onChange={date => setSluttDato(date)}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='daysPerWeek'
                  placeholder='Antall dager i uken'
                  value={dager}
                  onChange={event => setDager(event.target.value)}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='startTid'
                  placeholder='Fra kl'
                  value={start}
                  onChange={event => setStart(event.target.value)}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='sluttTid'
                  placeholder='Til kl'
                  value={slutt}
                  onChange={event => setSlutt(event.target.value)}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='oppmotested'
                  placeholder='Oppmøtested'
                  value={sted}
                  onChange={event => setSted(event.target.value)}
                />
              </div>
              <h2 className='subheader'>Pårørende</h2>
              {contactPersonsStudent.map(person => person)}
              <button className='add-more-button button-left-icon button-primary' onClick={addStudentContactPerson}>
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
            <Link onClick={() => { openPreviewModal(generateDocument()) }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <Button onClick={() => { send() }} type='primary'>Send</Button>
          </div>
          <div className='action'>
            <Link onClick={() => props.onDismiss(cleanupState)}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </Sentry.ErrorBoundary>
  )
}

YffConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
