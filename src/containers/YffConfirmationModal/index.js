/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { useForm } from 'react-hook-form'

import { API } from '../../config/app'

import { Link, Paragraph, Modal, ModalBody, ModalSideActions, TextField, Icon, Button, Datepicker, Skeleton } from '@vtfk/components'

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
import repackBekreftelse from '../../lib/repack-yff-bekreftelse'
import pfdPreview from '../../lib/pdf-preview'
import { validateField, validateForm } from '../../lib/form-validation'
import { successMessage, errorMessage } from '../../lib/toasts'
import logError from '../../lib/log-error'

import './styles.scss'

function getClassLevel (id) {
  return `VG${/\d/.exec(id) || 1}`
}

const defaultState = {
  department: '',
  meetingpoint: '',
  fromDate: new Date(),
  toDate: null,
  fromHours: '08:00',
  toHours: '16:00'
}

export function YffConfirmationModal ({ student, ...props }) {
  const { handleSubmit } = useForm()
  const { apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal, closePreviewModal, openRef } = pfdPreview(apiPost)
  const { id: studentID } = student

  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [contactPersonsCompany, setContactPersonsCompany] = useState(1)
  const [contactPersonsStudent, setContactPersonsStudent] = useState(1)
  const [copyEmails, setCopyEmails] = useState(0)

  const [submitting, setSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [errors, setErrors] = useState(false)
  const [subErrors, setSubErrors] = useState(false)
  const [formState, setFormState] = useState(defaultState)

  const onSubmit = (data, event) => {
    event.preventDefault()
  }

  const cleanupState = () => {
    setContactPersonsCompany(0)
    setContactPersonsStudent(0)
    setCopyEmails(0)
    setFormState(defaultState)
    setContactPersonsCompany(1)
    setContactPersonsStudent(1)
    setSubmitting(false)
  }

  const validators = {
    department: [
      {
        test: () => true,
        error: 'Ikke påkrevd'
      }
    ],
    meetingpoint: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi oppmøtested'
      }
    ],
    fromDate: [
      {
        test: (v) => v,
        error: 'Du må velge datoen utplasseringen gjelder fra'
      }
    ],
    toDate: [
      {
        test: (v) => v,
        error: 'Du må velge datoen utplasseringen gjelder til'
      }
    ],
    daysPerWeek: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi hvor mange dager i uken eleven er utplassert'
      }
    ],
    fromHours: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi klokkeslett for når eleven starter på jobb'
      }
    ],
    toHours: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi klokkeslett for når eleven slutter på jobb'
      }
    ]
  }

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)

    const invalid = validateField(name, validators, newState)
    setErrors({ ...errors, [name]: invalid ? invalid.error : undefined })
  }

  const onStartDateChange = (date) => {
    handleChange(date, 'fromDate')
    console.log(date, formState.toDate, date > formState.toDate)
    if (date > formState.toDate) handleChange(null, 'toDate')
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
      setSubmitting(false)
    }
  }

  const setHasSubError = (field, hasError, index) => setSubErrors({ ...subErrors, [field]: { ...subErrors[field], [index]: hasError } })

  function addCompanyContactPerson (event) {
    if (event) event.preventDefault()
    setContactPersonsCompany(contactPersonsCompany + 1)
  }

  function addStudentContactPerson (event) {
    if (event) event.preventDefault()
    setContactPersonsStudent(contactPersonsStudent + 1)
  }

  function addCompanyContactCopyEmail (event) {
    if (event) event.preventDefault()
    setCopyEmails(copyEmails + 1)
  }

  useEffect(() => {
    setDidSubmit(false)
  }, [brregData, company])

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') openRef.current ? closePreviewModal() : props.onDismiss(cleanupState)
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  const validate = () => {
    setDidSubmit(true) // Show errors in child components
    const formErrors = validateForm(validators, formState)
    setErrors(formErrors)

    const hasSubError = Object.keys(subErrors).filter(key => Object.keys(subErrors[key]).filter(index => !!subErrors[key][index]).length > 0).length > 0
    return !!formErrors || hasSubError
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

  function send () {
    if (submitting) return
    if (validate()) return
    setSubmitting(true)
    sendForm()
  }

  function openPreview () {
    if (submitting) return
    if (validate()) return
    openPreviewModal(generateDocument())
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
          <Paragraph className='yff-intro'>
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested. Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
            <br />
            <br />
            Ved søk på virksomhet kan du bruke virksomhetens navn eller organisasjonsnummer.
          </Paragraph>
          <div className='form'>
            <EntitySearch setBrregData={setBrregData} fetcher={apiGet} showError={didSubmit && !brregData} />
            <CompanySelector brregData={brregData} setCompany={setCompany} showError={didSubmit && !company} />
            <form id='bekreftelse-form' onSubmit={handleSubmit(onSubmit)} className={company ? '' : 'hidden'}>
              <h2 className='subheader'>Informasjon om utplasseringsstedet</h2>
              <CompanyDetails company={company} />
              <div className='input-element'>
                <TextField
                  name='organisasjonsAvdeling'
                  placeholder='Avdeling (valgfritt)'
                  value={formState.department}
                  onChange={event => handleChange(event.target.value, 'department')}
                  error={errors.department}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='oppmotested'
                  placeholder='Oppmøtested'
                  value={formState.meetingpoint}
                  onChange={event => handleChange(event.target.value, 'meetingpoint')}
                  error={errors.meetingpoint}
                />
              </div>

              <h2 className='subheader'>{`Kontaktperson${contactPersonsCompany <= 1 ? '' : 'er'} hos bedriften`}</h2>
              {Array.from({ length: contactPersonsCompany }).map((_, index) =>
                <CompanyContactPerson key={index} showError={didSubmit} setHasError={hasError => { setHasSubError('kontaktperson', hasError, index) }} />
              )}
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
              {Array.from({ length: copyEmails }).map((_, index) =>
                <CompanyEmailCopy key={index} showError={didSubmit} setHasError={hasError => { setHasSubError('kopi', hasError, index) }} />
              )}
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
                  selected={formState.fromDate}
                  onChange={date => onStartDateChange(date)}
                  error={errors.fromDate}
                />
                <Datepicker
                  placeholder='Til og med'
                  name='tilDato'
                  selected={formState.toDate}
                  minDate={formState.fromDate}
                  onChange={date => handleChange(date, 'toDate')}
                  error={errors.toDate}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='daysPerWeek'
                  placeholder='Antall dager i uken'
                  value={formState.daysPerWeek}
                  onChange={event => handleChange(event.target.value, 'daysPerWeek')}
                  error={errors.daysPerWeek}
                />
              </div>
              <div className='input-elements'>
                <TextField
                  name='startTid'
                  placeholder='Fra klokken'
                  value={formState.fromHours}
                  onChange={event => handleChange(event.target.value, 'fromHours')}
                  error={errors.fromHours}
                />
                <TextField
                  name='sluttTid'
                  placeholder='Til klokken'
                  value={formState.toHours}
                  onChange={event => handleChange(event.target.value, 'toHours')}
                  error={errors.toHours}
                />
              </div>

              <h2 className='subheader'>Kontaktinformasjon til elevens pårørende</h2>
              {Array.from({ length: contactPersonsStudent }).map((_, index) =>
                <StudentContactPerson key={index} showError={didSubmit} setHasError={hasError => { setHasSubError('parorende', hasError, index) }} />
              )}
              <button className='add-more-button button-left-icon button-primary' aria-label='Legg til en pårørende til' onClick={addStudentContactPerson}>
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
            {
              studentID
                ? <Link onClick={() => { openPreview() }}>Forhåndsvisning</Link>
                : <Skeleton width='100%' />
            }
          </div>
          <div className='action'>
            {
              studentID
                ? <Button onClick={() => { send() }} type='primary' spinner={submitting}>Send</Button>
                : <Skeleton variant='circle' style={{ borderRadius: '24px' }}><Button type='primary'>Send</Button></Skeleton>
            }
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
