/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import pfdPreview from '../../lib/pdf-preview'
import { successMessage } from '../../lib/toasts'
import createDocument from '../../lib/create-yff-document'
import StudentCard from '../../components/student-card'
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import SchoolSelectorForm from '../../components/scool-selector-form'
import KlassetrinSelectorForm from '../../components/klassetrinn-selector-form'
import KompetansemalSelectorForm from './kompetansemal-selector-form'
import LokalLaereplan from './lokal-laereplan.js'
import UtplasseringSelector from './utplassering-selector'

import './styles.scss'
export function YffCurriculumModal ({ selectedStudentId, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [selectedKlassetrinn, setSelectedKlassetrinn] = useState('')
  const [kompetansemaal, setKompetansemaal] = useState()
  const [utplasseringer, setUtplasseringer] = useState([])
  const [utplassering, setUtplassering] = useState()
  const { apiDelete, apiGet, apiPost } = useSession()
  const { PreviewModal, openPreviewModal } = pfdPreview(apiPost)
  console.log(selectedKlassetrinn)

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    async function getStudent () {
      const student = await apiGet(API.URL + '/students/' + selectedStudentId)
      console.log(student)
      setSelectedStudent(student.data)
    }
    async function getUtplasseringer () {
      const url = `${API.URL}/yff/${selectedStudentId}/utplassering`
      const data = await apiGet(url)
      setUtplasseringer(data)
    }
    getStudent()
    getUtplasseringer()
  }, [selectedStudentId])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  async function send () {
    const document = await createDocument()
    await apiPost(`${API.URL}/documents`, document)
    successMessage('👍', 'Lokal læreplan er sendt og arkivert')
    // cleanup state
    setSelectedKlassetrinn('')
    setKompetansemaal(false)
    setUtplasseringer([])
    setUtplassering(false)
    props.onDismiss()
  }

  async function generateDocument () {
    const maal = await apiGet(`${API.URL}/yff/${selectedStudentId}/maal`)
    return createDocument({
      variant: 'laereplan',
      student: selectedStudent,
      content: {
        maal
      }
    })
  }

  return (
    <>
      <PreviewModal />
      <Modal
        {...props}
        className='yff-curriculum-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          {
            selectedStudent &&
            selectedStudent.firstName &&
              <StudentCard student={selectedStudent} />
          }

          <p className='intro'>
            Her endrer du den lokale læreplanen for eleven og velger kompetansemål eleven skal jobbe med i løpet av utplasseringen. Du skriver også inn elevens arbeidsoppgaver knyttet til hvert kompetansemål.
          </p>

          <div className='form'>
            <h2 className='subheader'>Klassetrinn</h2>

            <KlassetrinSelectorForm setSelected={setSelectedKlassetrinn} />

            <h2 className='subheader'>Legg til nye kompetansemål</h2>
            <div className='add-new-curriculum'>
              <UtplasseringSelector utplasseringer={utplasseringer} setUtplassering={setUtplassering} />
              {utplassering && utplassering.value === 1 && <SchoolSelectorForm />}
              <UtdanningsprogrammerSelectorForm fetcher={apiGet} setKompetansemaal={setKompetansemaal} />
              <KompetansemalSelectorForm kompetansemaal={kompetansemaal} apiPost={apiPost} selectedStudentId={selectedStudentId} />

            </div>

            <LokalLaereplan deleter={apiDelete} fetcher={apiGet} selectedStudentId={selectedStudentId} />

          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={async () => { const document = await generateDocument(); openPreviewModal(document) }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <button onClick={() => { send() }} className='button button-primary'>Send og arkiver</button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Lagre og lukk</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </>
  )
}

YffCurriculumModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
