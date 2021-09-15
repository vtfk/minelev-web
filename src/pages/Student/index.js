import React, { useState, useEffect } from 'react'
import * as Sentry from '@sentry/react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import ClassPanel from '../../components/class-panel'
import { Paragraph, Link, Icon, IconButtonLink, Skeleton } from '@vtfk/components'

import Yff from './yff'
import YffErrorFallback from './yff-error-fallback'
import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'
import { PreviewDocumentModal } from '../../containers/PreviewDocumentModal'

import './styles.scss'
import repackDocumentType from '../../lib/repack-document-type'
import StudentCard from '../../components/student-card'

export function Student ({ match, ...props }) {
  const { apiGet } = useSession()
  const [documentModalState, setDocumentModalState] = useState(false)
  const [documentModalType, setDocumentModalType] = useState(null)
  const [noteModalState, setNoteModalState] = useState(false)
  const [previewDocument, setPreviewDocument] = useState(false)
  const [error, setError] = useState(false)
  const [student, setStudent] = useState(null)
  const [documents, setDocuments] = useState(null)
  const [notes, setNotes] = useState(null)
  const [conversations, setConversations] = useState(null)

  const { id, docId } = match.params
  if (docId) console.log('DocumentId', docId)

  async function getStudent () {
    const student = await apiGet(API.URL + '/students/' + id)
    if (!student || student.error) setError(true)
    if (student.data) setStudent(student.data)
  }

  async function getDocuments () {
    const docs = await apiGet(API.URL + '/students/' + id + '/documents')
    if (!docs || !docs.data || !Array.isArray(docs.data)) {
      setDocuments([])
      setNotes([])
      return
    }
    // TODO: Display error message

    const docsOrderedByModified = docs.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
    const docsExceptNotes = docsOrderedByModified.filter((item) => !['notat', 'samtale'].includes(item.type))
    const notes = docsOrderedByModified.filter((item) => item.type === 'notat')
    const conversations = docsOrderedByModified.filter((item) => item.type === 'samtale')
    setConversations(conversations)
    setDocuments(docsExceptNotes)
    setNotes(notes)

    // If the url contains a document ID - open the preview modal
    const preview = docs.data.find(doc => doc._id === docId)
    if (preview) openPreviewModal(preview)
  }

  function openDocumentModal (type = null) {
    setDocumentModalType(type)
    setDocumentModalState(true)
  }

  function openNoteModal () {
    setNoteModalState(true)
  }

  function openPreviewModal (doc) {
    setPreviewDocument(doc)
  }

  // Last inn elev, dokumenter og utplasseringer når siden lastes
  useEffect(() => {
    getStudent()
    getDocuments()
  }, [])

  return (
    <DefaultLayout>

      {
        student && documentModalState &&
          <NewDocumentModal
            open={documentModalState}
            student={student}
            documentType={documentModalType}
            title='Nytt dokument'
            onDismiss={() => { setDocumentModalState(false) }}
            onFinished={() => {
              setDocumentModalState(false)
              getDocuments()
            }}
          />
      }

      {
        student && noteModalState &&
          <NewNoteModal
            open={noteModalState}
            student={student}
            title='Notat til elevmappen'
            onDismiss={() => { setNoteModalState(false) }}
            onFinished={() => {
              setNoteModalState(false)
              getDocuments()
            }}
          />
      }

      {
        !!previewDocument &&
          <PreviewDocumentModal
            open={!!previewDocument}
            previewDoc={previewDocument}
            title={repackDocumentType(previewDocument.type, previewDocument.variant)}
            onDismiss={() => { setPreviewDocument(false) }}
            onFinished={() => { setPreviewDocument(false) }}
          />
      }

      <div className='student'>
        <Link className='back-link' href={`/${ROUTES.students}`} noStyle leftIcon={<Icon name='arrowLeft' size='xsmall' />}>Til elevoversikten</Link>

        {
          !error
            ? (
              <>
                <StudentCard student={student} largeName>
                  {
                    student &&
                      <div className='person-information-actions'>
                        <IconButtonLink
                          className='person-information-action-button'
                          onClick={() => { openDocumentModal() }}
                          icon='add'
                          type='transparent-bordered'
                        >
                          Nytt dokument
                        </IconButtonLink>

                        <IconButtonLink
                          className='person-information-action-button'
                          onClick={() => { openNoteModal() }}
                          icon='add'
                          type='transparent-bordered'
                        >
                          Nytt notat
                        </IconButtonLink>
                      </div>
                  }
                </StudentCard>

                <Sentry.ErrorBoundary FallbackComponent={YffErrorFallback}>
                  <Yff student={student} fetcher={apiGet} />
                </Sentry.ErrorBoundary>

                <ClassPanel
                  icon='activity' title='Varselbrev' link={
                    <IconButtonLink icon='add' className='add-more-button' onClick={() => { openDocumentModal() }}>
                      Nytt dokument
                    </IconButtonLink>
                  }
                >
                  {
                    !documents && Array(5).fill().map(function (i) {
                      return (
                        <tr key={i}>
                          <td><Skeleton randomWidth={[30, 70]} /></td>
                          <td><Skeleton width='60%' /></td>
                          <td><Skeleton randomWidth={[20, 100]} /></td>
                        </tr>
                      )
                    })
                  }
                  {
                    documents && documents.map(function (doc, index) {
                      return (
                        <tr key={doc.id} onClick={() => openPreviewModal(doc)} className='clickable' aria-label='Klikk for å åpne' title='Klikk for å åpne' tabIndex={0}>
                          <td>
                            <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                          </td>
                          <td>
                            <Paragraph>{repackDocumentType(doc.type, doc.variant)}</Paragraph>
                          </td>
                          <td>
                            <Paragraph>{doc.content.period ? doc.content.period.nb : ''}</Paragraph>
                          </td>
                        </tr>
                      )
                    })
                  }
                  {
                    documents && documents.length === 0 &&
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <Paragraph>Denne eleven har ingen registrerte varsler.</Paragraph>
                        </td>
                      </tr>
                  }

                </ClassPanel>
                <ClassPanel
                  icon='activity' title='Elevsamtaler' link={student && student.isContactTeacher &&
                    <IconButtonLink icon='add' className='add-more-button' onClick={() => { openDocumentModal('samtale') }}>
                      Ny samtale
                    </IconButtonLink>
                  }
                >
                  {
                    !conversations && Array(5).fill().map(function (i) {
                      return (
                        <tr key={i}>
                          <td><Skeleton randomWidth={[30, 70]} /></td>
                          <td><Skeleton width='60%' /></td>
                          <td><Skeleton randomWidth={[20, 100]} /></td>
                          <td />
                        </tr>
                      )
                    })
                  }
                  {
                    conversations && conversations.map(function (doc, index) {
                      return (
                        <tr key={doc.id} onClick={() => openPreviewModal(doc)} className='clickable' aria-label='Klikk for å åpne' title='Klikk for å åpne' tabIndex={0}>
                          <td>
                            <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                          </td>
                          <td>
                            <Paragraph>{doc.variant === 'samtale' ? 'Elevsamtale gjennomført' : 'Eleven ønsket ikke samtale'}</Paragraph>
                          </td>
                          <td>
                            <Paragraph>{doc.teacher.name}</Paragraph>
                          </td>
                          <td />
                        </tr>
                      )
                    })
                  }
                  {
                    conversations && conversations.length === 0 &&
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <Paragraph>Denne eleven har ingen registrerte elevsamtaler.</Paragraph>
                        </td>
                      </tr>
                  }

                </ClassPanel>
                <ClassPanel
                  icon='activity' title='Notater' link={
                    <IconButtonLink
                      className='add-more-button'
                      onClick={() => { openNoteModal(student) }}
                      icon='add'
                    >
                      Nytt notat til elevmappen
                    </IconButtonLink>
                  }
                >
                  {
                    !notes && Array(5).fill().map(function (i) {
                      return (
                        <tr key={i}>
                          <td><Skeleton width='60%' /></td>
                          <td><Skeleton /></td>
                          <td />
                        </tr>
                      )
                    })
                  }
                  {
                    notes && notes.map(function (note, index) {
                      return (
                        <tr key={note.id} onClick={() => openPreviewModal(note)} className='clickable' aria-label='Klikk for å åpne' title='Klikk for å åpne' tabIndex={0}>
                          <td>
                            <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{note.created.timestamp}</Moment></Paragraph>
                          </td>
                          <td>
                            <Paragraph>{note.teacher.name}</Paragraph>
                          </td>
                          <td />
                        </tr>
                      )
                    })
                  }
                  {
                    notes && notes.length === 0 &&
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <Paragraph>Denne eleven har ingen notater.</Paragraph>
                        </td>
                      </tr>
                  }
                </ClassPanel>
              </>
              )
            : (
              <Paragraph>
                Du har ikke tilgang til denne eleven. Kontakt Visma InSchool ansvarlig.
              </Paragraph>
              )
        }
      </div>
    </DefaultLayout>
  )
}
