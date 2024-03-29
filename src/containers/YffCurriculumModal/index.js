/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Link, Modal, ModalBody, ModalSideActions, Button, Skeleton, Paragraph } from '@vtfk/components'

import pfdPreview from '../../lib/pdf-preview'
import { successMessage, errorMessage } from '../../lib/toasts'
import createDocument from '../../lib/create-yff-document'
import logError from '../../lib/log-error'
import YffErrorFallback from '../../components/yff-error-fallback'
import StudentCard from '../../components/student-card'
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import SchoolSelectorForm from '../../components/school-selector-form'
import KompetansemalSelectorForm from './kompetansemal-selector-form'
import LokalLaereplan from './lokal-laereplan.js'
import UtplasseringSelector from './utplassering-selector'

import './styles.scss'
import { validateForm } from '../../lib/form-validation'

import { repackLaereplan } from '../../lib/repack-yff-laereplan'

export function YffCurriculumModal ({ student, ...props }) {
  const { apiDelete, apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal, closePreviewModal, openRef } = pfdPreview(apiPost)

  const [klassetrinn, setKlassetrinn] = useState()
  const [utdanningsprogram, setUtdanningsprogram] = useState()
  const [programomraade, setProgramomraade] = useState()

  const [utplasseringer, setUtplasseringer] = useState([])
  const [triggerSaveMaal, setTriggerSaveMaal] = useState()
  const [refreshLaereplan, setRefreshLaereplan] = useState(false)

  const [laereplan, setLaereplan] = useState([])
  const [formState, setFormState] = useState({})
  const [errors, setErrors] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveState, setSaveState] = useState(false)
  const isOpen = props.open

  function cleanupState () {
    setKlassetrinn(false)
    setUtdanningsprogram(false)
    setProgramomraade(false)
    setTriggerSaveMaal(false)
    setFormState({})
    setSubmitting(false)
  }

  const validators = {
    laereplan: [
      {
        test: (v) => v && v.length && v.length > 0,
        error: 'Du må legge kompetansemål i den lokale læreplanen fra skjemaet ovenfor før læreplanen kan sendes.'
      }
    ]
  }

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') openRef.current ? closePreviewModal() : props.onDismiss(cleanupState)
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  useEffect(() => {
    async function getUtplasseringer () {
      const url = `${API.URL}/yff/${student.id}/utplassering`
      try {
        const data = await apiGet(url)
        setUtplasseringer(data)
      } catch (error) {
        logError(error)
      }
    }
    if (isOpen) {
      getUtplasseringer()
    }
  }, [isOpen])

  useEffect(() => {
    if (errors.laereplan) validate()
  }, [laereplan])

  useEffect(() => {
    if (saveState === 'success') {
      successMessage('👍', 'Lokal læreplan er lagret')
      setFormState({})
    }
    if (saveState === 'fail') {
      errorMessage('Lokal lærplan ble ikke lagret', 'Prøv igjen og kontakt systemadministrator om det fortsatt ikke fungerer')
    }
    setSaveState(false)
  }, [saveState])

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)
  }

  function handleSave () {
    if (formState.maal && formState.maal.length > 0) {
      setTriggerSaveMaal(true)
    } else {
      successMessage('👍', 'Ikke noe å lagre')
      setSaving(false)
    }
  }

  const validate = () => {
    const formErrors = validateForm(validators, { laereplan })
    setErrors(formErrors)
    return !!formErrors
  }

  async function openPreview () {
    if (submitting) return
    if (validate()) return

    const document = await generateDocument()
    openPreviewModal(document)
  }

  async function send () {
    if (formState.maal && formState.maal.length > 0) {
      errorMessage('Ulagrede mål', 'Du har ulagrede kompetansemål. Vennligst lagre disse før arkivering')
      return
    }
    if (submitting) return
    if (validate()) return
    setSubmitting(true)

    try {
      const document = await generateDocument()
      await apiPost(`${API.URL}/documents`, document)
      successMessage('👍', 'Lokal læreplan er sendt og arkivert')
      props.onDismiss(cleanupState)
    } catch (error) {
      logError(error)
      errorMessage('Læreplanen ble ikke lagret', 'Du kan forsøke igjen, men om problemene fortsetter kontakt systemadministrator.')
      setSubmitting(false)
    }
  }

  async function generateDocument () {
    const { data: maal } = await apiGet(`${API.URL}/yff/${student.id}/maal`)
    const repacked = repackLaereplan(maal)
    return createDocument({
      variant: 'laereplan',
      student,
      content: {
        utplasseringer: repacked
      }
    })
  }

  return (
    <Sentry.ErrorBoundary
      FallbackComponent={YffErrorFallback}
      onReset={() => props.onDismiss(cleanupState)}
    >
      <PreviewModal />
      <Modal
        {...props}
        className='yff-curriculum-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          <StudentCard student={student} />
          <Paragraph className='intro'>
            Her endrer du den lokale læreplanen for eleven og velger kompetansemål eleven skal jobbe med i løpet av utplasseringen. Du skriver også inn elevens arbeidsoppgaver knyttet til hvert kompetansemål.
            <br />
            Når du klikker <i>Send og arkiver</i> blir læreplanen sendt til elevens digitale postkasse. Du kan oppdatere og sende oppdaterte planer kontinuerlig underveis i skoleåret.
            <br /><br />
            <strong>En lokal læreplan MÅ inneholde minst et kompetansemål for å kunne gi en tilbakemelding på utplasseringen.</strong>
          </Paragraph>

          <div className='form'>
            <h2 className='subheader'>Legg til nye kompetansemål</h2>
            <div className='add-new-curriculum'>
              <UtplasseringSelector utplasseringer={utplasseringer} setUtplassering={utplassering => handleChange(utplassering, 'utplassering')} />
              {formState.utplassering && formState.utplassering.value === 'skole' && <SchoolSelectorForm onSelect={skole => handleChange(skole, 'skole')} />}
              <UtdanningsprogrammerSelectorForm
                fetcher={apiGet}
                startOpen={false}
                setKlassetrinn={setKlassetrinn}
                setUtdanningsprogram={setUtdanningsprogram}
                setProgramomraade={setProgramomraade}
                setKompetansemaal={kompetansemaal => handleChange(kompetansemaal, 'kompetansemaal')}
              />
              <KompetansemalSelectorForm
                utplassering={formState.utplassering}
                skole={formState.skole || null}
                klassetrinn={klassetrinn}
                utdanningsprogram={utdanningsprogram}
                programomraade={programomraade}
                kompetansemaal={formState.kompetansemaal || []}
                apiPost={apiPost}
                selectedStudentId={student.id}
                triggerSaveMaal={triggerSaveMaal}
                setTriggerSaveMaal={setTriggerSaveMaal}
                setRefreshLaereplan={setRefreshLaereplan}
                onMaalChange={maal => handleChange(maal || null, 'maal')}
                setSaving={setSaving}
                setSaveState={setSaveState}
              />
            </div>

            <LokalLaereplan
              deleter={apiDelete}
              fetcher={apiGet}
              selectedStudentId={student.id}
              refreshLaereplan={refreshLaereplan}
              setRefreshLaereplan={setRefreshLaereplan}
              onMaalChange={setLaereplan}
              showError={errors.laereplan}
            />

          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            {
              student
                ? <Link onClick={async () => { await openPreview() }}>Forhåndsvisning</Link>
                : <Skeleton width='100%' />
            }
          </div>
          <div className='action'>
            {
              student
                ? <Button onClick={async () => { await send() }} type='primary' spinner={submitting}>Send og arkiver</Button>
                : <Skeleton variant='circle' style={{ borderRadius: '24px' }}><Button type='primary'>Send og arkiver</Button></Skeleton>
            }
          </div>
          <div className='action'>
            <Link spinner={saving} onClick={() => handleSave()}>Lagre</Link>
          </div>
          <div className='action'>
            <Link onClick={() => props.onDismiss(cleanupState)}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </Sentry.ErrorBoundary>
  )
}

YffCurriculumModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
