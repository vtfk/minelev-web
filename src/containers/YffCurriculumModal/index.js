/* eslint-env browser */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import pfdPreview from '../../lib/pdf-preview'
import UtdanningsprogrammerSelectorForm from '../../components/utdanningsprogrammer-selector-form'
import SchoolSelectorForm from '../../components/scool-selector-form'
import KlassetrinSelectorForm from '../../components/klassetrinn-selector-form'
import KompetansemalSelectorForm from './kompetansemal-selector-form'
import LokalLaereplan from './lokal-laereplan.js'
import UtplasseringSelector from './utplassering-selector'

import './styles.scss'
// TODO: Hente inn utplasseringer
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

  // TODO: implementere sending av læreplan
  function send () {
    props.onDismiss()
    window.alert('Læreplan er opprettet.')
  }

  // Repacke document for preview
  // TODO: fikse ekte dokument
  function createDocument () {
    return {
      type: 'laereplan',
      variant: 'laereplan',
      student: {
        username: selectedStudentId
      },
      content: {
        year: new Date().getFullYear()
      }
    }
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
              <div className='person-information'>
                <div className='image'>
                  <InitialsBadge firstName={selectedStudent.firstName} lastName={selectedStudent.lastName} size='large' />
                </div>
                <div className='text-wrapper'>
                  <Heading3 className='name'>
                    {selectedStudent.firstName} {selectedStudent.lastName}
                  </Heading3>
                  <div className='other'>
                    <Paragraph>{selectedStudent.schoolName}</Paragraph>
                    <Paragraph><Link href={`/${ROUTES.classes}/${selectedStudent.classId}`}>{selectedStudent.className}</Link></Paragraph>
                    <Paragraph>26. april 2001</Paragraph>
                    <Paragraph>bra26041@skole.vtfk.no</Paragraph>
                  </div>
                </div>
              </div>
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
            <Link onClick={() => openPreviewModal(createDocument())}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <button onClick={() => { send() }} className='button button-primary'>Send</button>
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
