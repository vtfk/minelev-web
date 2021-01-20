/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { useForm } from 'react-hook-form'

import { API } from '../../config/app'

import { Link, Paragraph } from '../../_lib-components/Typography'
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
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import serializeForm from '../../lib/serialize-form'
import repackBekreftelse from '../../lib/repack-bekreftelse'
import pfdPreview from '../../lib/pdf-preview'
import { successMessage, errorMessage } from '../../lib/toasts'

import './styles.scss'

export function YffConfirmationModal ({ student, ...props }) {
  const { id: studentID } = student
  const { handleSubmit } = useForm()
  const { apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)

  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [didSubmit, setDidSubmit] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') props.onDismiss()
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  function send () {
    setDidSubmit(true)
    sendForm()
  }

  const sendForm = async () => {
    const bekreftelse = generateBekreftelse()
    if (!bekreftelse) return
    
/*
    try {
      await apiPost(`${API.URL}/yff/${studentID}/utplassering`, bekreftelse)
      successMessage('👍', 'Bekreftelse om utplassering sendt.')
      await apiPost(`${API.URL}/documents`, generateDocument(bekreftelse))
      // cleanup state
      setBrregData(null)
      setCompany(false)
      props.onFinished()
    } catch (error) {
      console.error(error)
      errorMessage('Bekreftelsen ble ikke opprettet', 'Du kan forsøke igjen, men om feilen vedvarer kontakt systemadministrator')
    }*/
  }

  const generateBekreftelse = () => {
    const form = document.getElementById('bekreftelse-form')
    if (!form) return false

    const data = new FormData(form)
    console.log('formdata', data)
    const json = serializeForm(data)
    console.log('json', json)
    const bekreftelse = repackBekreftelse({ bekreftelse: { ...json }, company: { ...company } })
    return bekreftelse
  }

  function generateDocument (data) {
    const bekreftelse = data || generateBekreftelse()
    return createDocument({
      variant: 'bekreftelse',
      student,
      content: {
        bekreftelse
      }
    })
  }

  useEffect(() => {
    setDidSubmit(false)
  }, [brregData, company])

  function FormView ({ company }) {
    const [contactPersonsCompany, setContactPersonsCompany] = useState([])
    const [contactPersonsCompanyErrors, setContactPersonsCompanyErrors] = useState({})

    const [contactPersonsStudent, setContactPersonsStudent] = useState([])
    const [contactPersonsStudentErrors, setContactPersonsStudentErrors] = useState({})

    const [copyEmails, setCopyEmails] = useState([])
    const [copyEmailsErrors, setCopyEmailsErrors] = useState({})

    const [avdeling, setAvdeling] = useState('')
    const [dager, setDager] = useState('')
    const [sted, setSted] = useState('')
    const [startDato, setStartDato] = useState(new Date())
    const [sluttDato, setSluttDato] = useState(null)
    const [start, setStart] = useState('08:00')
    const [slutt, setSlutt] = useState('16:00')

    function onStartDateChange (date) {
      setStartDato(date)
      if (date > sluttDato) setSluttDato(null)
    }

    const setHasError = (hasError, index, state, setState) => setState({ ...state, [index]: hasError })

    function addCompanyContactPerson (event) {
      if (event) event.preventDefault()

      const contactCopy = [...contactPersonsCompany]
      contactCopy.push(<CompanyContactPerson showError={didSubmit || false} setHasError={hasError => setHasError(hasError, contactCopy.length, contactPersonsCompanyErrors, setContactPersonsCompanyErrors)} />)
      setContactPersonsCompany(contactCopy)
    }

    function addStudentContactPerson (event) {
      if (event) event.preventDefault()

      const contactCopy = [...contactPersonsStudent]
      contactCopy.push(<StudentContactPerson showError={didSubmit || false} setHasError={hasError => setHasError(hasError, contactCopy.length, contactPersonsStudentErrors, setContactPersonsStudentErrors)} />)
      setContactPersonsStudent(contactCopy)
    }

    function addCompanyContactCopyEmail (event) {
      if (event) event.preventDefault()

      const contactCopy = [...copyEmails]
      contactCopy.push(<CompanyEmailCopy showError={didSubmit || false} setHasError={hasError => setHasError(hasError, contactCopy.length, copyEmailsErrors, setCopyEmailsErrors)} />)
      setCopyEmails(contactCopy)
    }

    useEffect(() => {
      addCompanyContactPerson()
      addStudentContactPerson()
    }, [company])

    if (!company) return null

    return (
      <form id='bekreftelse-form' onSubmit={handleSubmit((_, event) => event.preventDefault())}>
        <h2 className='subheader'>Informasjon om utplasseringsstedet</h2>
        <CompanyDetails company={company} />
        <div className='input-element'>
          <TextField
            name='organisasjonsAvdeling'
            placeholder='Avdeling (valgfritt)'
            value={avdeling}
            onChange={event => setAvdeling(event.target.value)}
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

        <h2 className='subheader'>{`Kontaktperson${contactPersonsCompany.filter(c => !!c).length <= 1 ? '' : 'er'} hos bedriften`}</h2>
        {contactPersonsCompany.map(contactPerson => contactPerson)}
        <button className='add-more-button button-left-icon button-primary' aria-label='Legg til en kontaktperson til' onClick={addCompanyContactPerson}>
          <div className='button-left-icon-icon'>
            <Icon name='add' size='small' />
          </div>
          <div className='button-left-icon-text'>
            Legg til kontaktperson
          </div>
        </button>

        <h2 className='subheader'>Kopi på e-post</h2>
        <Paragraph className='subtitle'>
          Noen ganger er det enklere sagt enn gjort at korrekt mottaker hos utplasseringsbedriften mottar brevene som sendes,
          i de tilfellene kan man legge kontaktpersonen(e) som kopimottager, og de vil få tilsendt kopi av dokumentene på e-post i tillegg.
        </Paragraph>
        {copyEmails.map(email => email)}
        <button className='add-more-button button-left-icon button-primary' aria-label='Legg til en kopimottager til' onClick={addCompanyContactCopyEmail}>
          <div className='button-left-icon-icon'>
            <Icon name='add' size='small' />
          </div>
          <div className='button-left-icon-text'>
            Legg til kopimottager (valgfritt)
          </div>
        </button>

        <h2 className='subheader'>Tidsrom for utplassering</h2>
        <div className='input-elements'>
          <Datepicker
            placeholder='Fra og med'
            name='fraDato'
            selected={startDato}
            onChange={onStartDateChange}
          />
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
        <div className='input-elements'>
          <TextField
            name='startTid'
            placeholder='Fra klokken'
            value={start}
            onChange={event => setStart(event.target.value)}
          />
          <TextField
            name='sluttTid'
            placeholder='Til klokken'
            value={slutt}
            onChange={event => setSlutt(event.target.value)}
          />
        </div>

        <h2 className='subheader'>Kontaktinformasjon til elevens pårørende</h2>
        {contactPersonsStudent.map(person => person)}
        <button className='add-more-button button-left-icon button-primary' aria-label='Legg til en pårørende til' onClick={addStudentContactPerson}>
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
    <ErrorBoundary
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
          <p className='yff-intro'>
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested. Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
            <br />
            <br />
            Ved søk på virksomhet kan du bruke virksomhetens navn eller organisasjonsnummer.
          </p>
          <div className='form'>
            <EntitySearch setBrregData={setBrregData} fetcher={apiGet} showError={!brregData && didSubmit} />
            <CompanySelector brregData={brregData} setCompany={setCompany} showError={!company && !!brregData && didSubmit} />
            <FormView company={company} />
            {company && <UtdanningsprogrammerSelectorForm fetcher={apiGet} />}
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
            <Link onClick={props.onDismiss}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </ErrorBoundary>
  )
}

YffConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
