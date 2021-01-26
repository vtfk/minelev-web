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
import { validateField, validateForm } from '../../lib/form-validation'

export function YffCurriculumModal ({ student, ...props }) {
  const { apiDelete, apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)

  const [kompetansemaal, setKompetansemaal] = useState()
  const [utplasseringer, setUtplasseringer] = useState([])
  const [utplassering, setUtplassering] = useState()
  const [referanse, setReferanse] = useState({})
  const [triggerSaveMaal, setTriggerSaveMaal] = useState()
  const [refreshLaereplan, setRefreshLaereplan] = useState()

  const [laereplan, setLaereplan] = useState([null])
  const [formState, setFormState] = useState({ utplassering: '', skole: '', kompetansemaal: [], maal: [], laereplan: [] })
  const [errors, setErrors] = useState(false)
  const isOpen = props.open

  function cleanupState () {
    setKompetansemaal(false)
    setUtplasseringer([])
    setUtplassering(false)
    setTriggerSaveMaal(false)
  }

  const validators = {
    utplassering: [
      {
        test: (v) => v && v.length,
        error: 'Du må velge en utplassering'
      }
    ],
    skole: [
      {
        test: (v, { utplassering }) => utplassering !== 'skole' || (v && v.length),
        error: 'Du må velge en skole'
      }
    ],
    kompetansemaal: [
      {
        test: (v) => v && v.length && v.length > 0,
        error: 'Du må velge hvor du skal hente kompetansemål fra'
      }
    ],
    maal: [
      {
        test: (v) => v && v.length && v.length > 0,
        error: 'Du må velge ett eller flere kompetansemål som skal legges til i den lokale læreplanen'
      }
    ]
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
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
    if (utplassering) {
      setReferanse({
        referanseID: utplassering.value,
        referanseTittel: utplassering.label
      })
    }
  }, [utplassering])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss(cleanupState)
    }
  }

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)

    const invalid = validateField(name, validators, newState)
    setErrors({ ...errors, [name]: invalid ? invalid.error : undefined })
  }

  function handleAvslutt () {
    if (kompetansemaal) {
      setTriggerSaveMaal(true)
      setTimeout(() => {
        props.onDismiss(cleanupState)
      }, 1000)
    } else {
      props.onDismiss(cleanupState)
    }
  }

  const validate = () => {
    const formErrors = false // validateForm(validators, formState)
    setErrors(formErrors)
    console.log(formState)
    console.log(formErrors)
    return !!formErrors
  }

  async function send () {
    if (validate()) return
    const document = await generateDocument()
    try {
      await apiPost(`${API.URL}/documents`, document)
      successMessage('👍', 'Lokal læreplan er sendt og arkivert')
      props.onDismiss(cleanupState)
    } catch (error) {
      logError(error)
      errorMessage('Læreplanen ble ikke lagret', 'Du kan forsøke igjen, men om problemene fortsetter kontakt systemadministrator.')
    }
  }

  async function generateDocument () {
    const maal = await apiGet(`${API.URL}/yff/${student.id}/maal`)
    return createDocument({
      variant: 'laereplan',
      student,
      content: {
        maal
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
              <UtplasseringSelector utplasseringer={utplasseringer} setUtplassering={utplassering => handleChange(utplassering, 'utplassering')} showError={errors.utplassering} />
              {formState.utplassering && formState.utplassering.value === 'skole' && <SchoolSelectorForm onSelect={skole => handleChange(skole, 'skole')} showError={errors.skole} />}
              <UtdanningsprogrammerSelectorForm fetcher={apiGet} setKompetansemaal={kompetansemaal => handleChange(kompetansemaal, 'kompetansemaal')} showError={errors.kompetansemaal} />
              <KompetansemalSelectorForm
                kompetansemaal={formState.kompetansemaal || []}
                apiPost={apiPost}
                selectedStudentId={student.id}
                referanse={referanse}
                triggerSaveMaal={triggerSaveMaal}
                setTriggerSaveMaal={setTriggerSaveMaal}
                setRefreshLaereplan={setRefreshLaereplan}
                onMaalChange={maal => handleChange(maal || null, 'maal')}
                showError={errors.maal}
              />
            </div>

            <LokalLaereplan
              deleter={apiDelete}
              fetcher={apiGet}
              selectedStudentId={student.id}
              refreshLaereplan={refreshLaereplan}
              setRefreshLaereplan={setRefreshLaereplan}
              onMaalChange={setLaereplan}
            />

          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={async () => { const document = await generateDocument(); openPreviewModal(document) }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <Button onClick={async () => { await send() }} type='primary'>Send og arkiver</Button>
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
