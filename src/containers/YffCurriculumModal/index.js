/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Button } from '../../_lib-components/Button'

import pfdPreview from '../../lib/pdf-preview'
import { successMessage, errorMessage } from '../../lib/toasts'
import createDocument from '../../lib/create-yff-document'
import logError from '../../lib/log-error'
import YffErrorFallback from '../../components/yff-error-fallback'
import StudentCard from '../../components/student-card'
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import SchoolSelectorForm from '../../components/scool-selector-form'
import KompetansemalSelectorForm from './kompetansemal-selector-form'
import LokalLaereplan from './lokal-laereplan.js'
import UtplasseringSelector from './utplassering-selector'

import './styles.scss'
import { validateForm } from '../../lib/form-validation'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'
import { repackLaereplan } from '../../lib/repack-yff-laereplan'

export function YffCurriculumModal ({ student, ...props }) {
  const { apiDelete, apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal, closePreviewModal, openRef } = pfdPreview(apiPost)

  const [klassetrinn, setKlassetrinn] = useState()
  const [utdanningsprogram, setUtdanningsprogram] = useState()
  const [programomraade, setProgramomraade] = useState()

  const [utplasseringer, setUtplasseringer] = useState([])
  const [triggerSaveMaal, setTriggerSaveMaal] = useState()
  const [refreshLaereplan, setRefreshLaereplan] = useState()

  const [laereplan, setLaereplan] = useState([])
  const [formState, setFormState] = useState({})
  const [errors, setErrors] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const isOpen = props.open

  function cleanupState () {
    setKlassetrinn(null)
    setUtdanningsprogram(null)
    setProgramomraade(null)
    setUtplasseringer([])
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

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)
  }

  function handleAvslutt () {
    if (formState.kompetansemaal) {
      setTriggerSaveMaal(true)
      setTimeout(() => {
        props.onDismiss(cleanupState)
      }, 1000)
    } else {
      props.onDismiss(cleanupState)
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
    if (submitting) return
    if (validate()) return
    setSubmitting(true)

    const document = await generateDocument()
    try {
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
          <p className='intro'>
            Her endrer du den lokale læreplanen for eleven og velger kompetansemål eleven skal jobbe med i løpet av utplasseringen. Du skriver også inn elevens arbeidsoppgaver knyttet til hvert kompetansemål. Når du klikker "Send og arkiver" blir læreplanen sendt til elevens digitale postkasse. Du kan oppdatere og sendte oppdaterte planer kontinuerlig underveis i skoleåret.
          </p>

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
                : <SkeletonLoader width='100%' />
            }
          </div>
          <div className='action'>
            {
              student
                ? <Button onClick={async () => { await send() }} type='primary' spinner={submitting}>Send og arkiver</Button>
                : <SkeletonLoader variant='circle' style={{ borderRadius: '24px' }}><Button type='primary'>Send og arkiver</Button></SkeletonLoader>
            }
          </div>
          <div className='action'>
            <Link onClick={handleAvslutt}>Lagre og lukk</Link>
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
