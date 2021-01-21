import React, { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import ClassPanel from '../../components/class-panel'
import { Paragraph, Link } from '../../_lib-components/Typography'
import { Icon } from '../../_lib-components/Icon'
import { IconButtonLink } from '../../_lib-components/Button'

import Yff from './yff'
import YffErrorFallback from './yff-error-fallback'
import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'
import repackDocumentType from '../../lib/repack-document-type'
import repackDocumentStatus from '../../lib/repack-document-status'
import StudentCard from '../../components/student-card'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

export function Student ({ match, ...props }) {
  const { apiGet } = useSession()
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [error, setError] = useState(false)
  const [student, setStudent] = useState(null)
  const [documents, setDocuments] = useState(null)
  const [notes, setNotes] = useState(null)

  const { id } = match.params

  async function getStudent () {
    const student = await apiGet(API.URL + '/students/' + id)
    if (!student || student.error) setError(true)
    if (student.data) setStudent(student.data)
  }

  async function getDocuments () {
    const docs = await apiGet(API.URL + '/students/' + id + '/documents')
    if (!docs.data) return
    // TODO: Display error message

    const docsOrderedByModified = docs.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
    const docsExceptNotes = docsOrderedByModified.filter((item) => item.type !== 'notat')
    const notes = docsOrderedByModified.filter((item) => item.type === 'notat')
    setDocuments(docsExceptNotes)
    setNotes(notes)
  }

  function openDocumentModal () {
    setDocumentModalState(true)
  }

  function openNoteModal () {
    setNoteModalState(true)
  }

  // Last inn elev, dokumenter og utplasseringer når siden lastes
  useEffect(() => {
    getStudent()
    getDocuments()
  }, [])

  return (
    <DefaultLayout>

      {
        student &&
          <>
            <NewDocumentModal
              open={documentModalState}
              student={student}
              title='Nytt dokument'
              onDismiss={() => { setDocumentModalState(false) }}
              onFinished={() => {
                setDocumentModalState(false)
                getDocuments()
              }}
            />

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
          </>
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

                <ErrorBoundary FallbackComponent={YffErrorFallback}>
                  <Yff student={student} fetcher={apiGet} />
                </ErrorBoundary>

                <ClassPanel
                  icon='activity' title='Varsler og samtaler' link={
                    <IconButtonLink icon='add' className='add-more-button' onClick={() => { openDocumentModal() }}>
                              Nytt dokument
                    </IconButtonLink>
                  }
                >
                  {
                    !documents && Array(5).fill().map(function (i) {
                      return (
                        <tr key={i}>
                          <td><SkeletonLoader randomWidth={[30, 70]} /></td>
                          <td><SkeletonLoader width='60%' /></td>
                          <td><SkeletonLoader randomWidth={[20, 100]} /></td>
                        </tr>
                      )
                    })
                  }
                  {
                    documents && documents.map(function (doc, index) {
                      return (
                        <tr key={doc.id}>
                          <td>
                            <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                          </td>
                          <td>
                            <Paragraph>{repackDocumentType(doc.type, doc.variant)}</Paragraph>
                          </td>
                          <td>
                            <Paragraph>{repackDocumentStatus(doc.status, true)}</Paragraph>
                          </td>
                        </tr>
                      )
                    })
                  }
                  {
                    documents && documents.length === 0 &&
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <Paragraph>Denne eleven har ingen registrerte varsler eller samtaler.</Paragraph>
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
                          <td><SkeletonLoader width='60%' /></td>
                          <td><SkeletonLoader /></td>
                        </tr>
                      )
                    })
                  }
                  {
                    notes && notes.map(function (note, index) {
                      return (
                        <tr key={note.id}>
                          <td>
                            <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{note.created.timestamp}</Moment></Paragraph>
                          </td>
                          <td>
                            <Paragraph>{repackDocumentStatus(note.status, true)}</Paragraph>
                          </td>
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
                Du har ikke tilgang til denne eleven. Kontakt Extensansvarlig.
              </Paragraph>
            )
        }
      </div>
    </DefaultLayout>
  )
}
