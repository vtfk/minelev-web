/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
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
import serializeForm from '../../lib/serialize-form'
import repackBekreftelse from '../../lib/repack-bekreftelse'
import pfdPreview from '../../lib/pdf-preview'
import { successMessage, errorMessage } from '../../lib/toasts'
import logError from '../../lib/log-error'

import './styles.scss'
import { validateField, validateForm } from '../../lib/form-validation'

function getClassLevel (id) {
  return `VG${/\d/.exec(id) || 1}`
}

export function YffConfirmationModal ({ student, ...props }) {
  const { id: studentID } = student
  const { handleSubmit } = useForm()
  const { apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)

  const [formAction, setFormAction] = useState('')

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') props.onDismiss()
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  const send = event => {
    event.preventDefault()
    setFormAction(`send-${new Date().getTime()}`)
  }
  const preview = event => {
    event.preventDefault()
    setFormAction(`send-${new Date().getTime()}`)
  }

  console.log('Modal re-render')

  function FormView ({ action }) {
    const [contactPersonsCompany, setContactPersonsCompany] = useState([])
    const [contactPersonsCompanyErrors, setContactPersonsCompanyErrors] = useState({})

    const [contactPersonsStudent, setContactPersonsStudent] = useState([])
    const [contactPersonsStudentErrors, setContactPersonsStudentErrors] = useState({})

    const [copyEmails, setCopyEmails] = useState([])
    const [copyEmailsErrors, setCopyEmailsErrors] = useState({})

    const [brregData, setBrregData] = useState(null)
    const [company, setCompany] = useState()

    const [didSubmit, setDidSubmit] = useState(false)
    const [errors, setErrors] = useState(false)
    const [formState, setFormState] = useState({
      department: '',
      meetingpoint: '',
      fromDate: new Date(),
      toDate: null,
      fromHours: '08:00',
      toHours: '16:00'
    })

    useEffect(() => {
      setDidSubmit(false)
    }, [brregData, company])

    console.log('FormView re-render')

    useEffect(() => {
      console.log('Action changed!', { action, didSubmit, brregData: !!brregData, company: !!company })

      if (!action || action === '') return

      setDidSubmit(true) // Indicate to child components that we tried to submit
      if (!company) return // No company selected - don't validate form that doesn't exist yet.

      // Validate form - return on errors
      const formErrors = validateForm(validators, formState)
      setErrors(formErrors)
      if (formErrors) return

      // If any of the sub components have errors - return
      if (contactPersonsCompanyErrors) return
      if (contactPersonsStudentErrors) return
      if (copyEmailsErrors) return

      // Run action
      if (action.startsWith('send')) sendForm()
      if (action.startsWith('preview')) openPreviewModal(generateDocument())
    }, [action])

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

    const sendForm = async () => {
      const bekreftelse = generateBekreftelse()
      try {
        await apiPost(`${API.URL}/yff/${studentID}/utplassering`, bekreftelse)
        successMessage('👍', 'Bekreftelse om utplassering sendt.')
        await apiPost(`${API.URL}/documents`, generateDocument(bekreftelse))
        // cleanup state
        setBrregData(null)
        setCompany(false)
        props.onFinished()
      } catch (error) {
        logError(error)
        errorMessage('Bekreftelsen ble ikke opprettet', 'Du kan forsøke igjen, men om feilen vedvarer kontakt systemadministrator')
      }
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
          bekreftelse,
          utdanningsprogram: student.utdanningsprogram,
          level: student.level || getClassLevel(student.classId)
        }
      })
    }

    const setHasError = (hasError, index, state, setState) => setState({ ...state, [index]: hasError })

    function addCompanyContactPerson (event) {
      if (event) event.preventDefault()

      const contactCopy = [...contactPersonsCompany]
      contactCopy.push(<CompanyContactPerson showError={didSubmit} setHasError={hasError => setHasError(hasError, contactCopy.length, contactPersonsCompanyErrors, setContactPersonsCompanyErrors)} />)
      setContactPersonsCompany(contactCopy)
    }

    function addStudentContactPerson (event) {
      if (event) event.preventDefault()

      const contactCopy = [...contactPersonsStudent]
      contactCopy.push(<StudentContactPerson showError={didSubmit} setHasError={hasError => setHasError(hasError, contactCopy.length, contactPersonsStudentErrors, setContactPersonsStudentErrors)} />)
      setContactPersonsStudent(contactCopy)
    }

    function addCompanyContactCopyEmail (event) {
      if (event) event.preventDefault()

      const contactCopy = [...copyEmails]
      contactCopy.push(<CompanyEmailCopy showError={didSubmit} setHasError={hasError => setHasError(hasError, contactCopy.length, copyEmailsErrors, setCopyEmailsErrors)} />)
      setCopyEmails(contactCopy)
    }

    useEffect(() => {
      addCompanyContactPerson()
      addStudentContactPerson()
    }, [])

    const entityCompanySelector = (
      <>
        <EntitySearch setBrregData={setBrregData} fetcher={apiGet} showError={!brregData && didSubmit} />
        <CompanySelector brregData={brregData} setCompany={setCompany} showError={!company && !!brregData && didSubmit} />
      </>
    )

    // No company set - render company search
    if (!company) return entityCompanySelector

    return (
      <>
        {entityCompanySelector}
        <form id='bekreftelse-form' onSubmit={handleSubmit((_, event) => event.preventDefault())}>
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
      </>
    )
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
          <p className='yff-intro'>
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested. Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
            <br />
            <br />
            Ved søk på virksomhet kan du bruke virksomhetens navn eller organisasjonsnummer.
          </p>
          <div className='form'>
            <FormView action={formAction} />
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={preview}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <Button onClick={send} type='primary'>Send</Button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avslutt</Link>
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
