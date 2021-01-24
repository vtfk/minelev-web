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

export function YffCurriculumModal ({ student, ...props }) {
  const [kompetansemaal, setKompetansemaal] = useState()
  const [utplasseringer, setUtplasseringer] = useState([])
  const [utplassering, setUtplassering] = useState()
  const [referanse, setReferanse] = useState({})
  const [triggerSaveMaal, setTriggerSaveMaal] = useState()
  const [refreshLaereplan, setRefreshLaereplan] = useState()
  const { apiDelete, apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)
  const isOpen = props.open

  function cleanupState () {
    setKompetansemaal(false)
    setUtplasseringer([])
    setUtplassering(false)
    setTriggerSaveMaal(false)
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

  async function send () {
    const document = await createDocument()
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
            Her endrer du den lokale læreplanen for eleven og velger kompetansemål eleven skal jobbe med i løpet av utplasseringen. Du skriver også inn elevens arbeidsoppgaver knyttet til hvert kompetansemål.
          </p>

          <div className='form'>
            <h2 className='subheader'>Legg til nye kompetansemål</h2>
            <div className='add-new-curriculum'>
              <UtplasseringSelector utplasseringer={utplasseringer} setUtplassering={setUtplassering} />
              {utplassering && utplassering.value === 'skole' && <SchoolSelectorForm />}
              <UtdanningsprogrammerSelectorForm fetcher={apiGet} setKompetansemaal={setKompetansemaal} />
              <KompetansemalSelectorForm
                kompetansemaal={kompetansemaal}
                apiPost={apiPost}
                selectedStudentId={student.id}
                referanse={referanse}
                triggerSaveMaal={triggerSaveMaal}
                setTriggerSaveMaal={setTriggerSaveMaal}
                setRefreshLaereplan={setRefreshLaereplan}
              />
            </div>

            <LokalLaereplan
              deleter={apiDelete}
              fetcher={apiGet}
              selectedStudentId={student.id}
              refreshLaereplan={refreshLaereplan}
              setRefreshLaereplan={setRefreshLaereplan}
            />

          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={async () => { const document = await generateDocument(); openPreviewModal(document) }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <Button onClick={() => { send() }} type='primary'>Send og arkiver</Button>
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
