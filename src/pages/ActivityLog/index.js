import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading2, Paragraph, Link, ErrorMessage, InitialsBadge, IconDropdownNav, IconDropdownNavItem, Skeleton } from '@vtfk/components'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'
import { PreviewDocumentModal } from '../../containers/PreviewDocumentModal'

import './styles.scss'
import repackDocumentType from '../../lib/repack-document-type'

export function ActivityLog () {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [previewDocument, setPreviewDocument] = useState(false)
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { apiGet } = useSession()

  function openDocumentModal (document) {
    setSelectedStudent(document.student.username)
    setDocumentModalState(true)
  }

  function openNoteModal (document) {
    setSelectedStudent(document.student.username)
    setNoteModalState(true)
  }

  async function getDocuments () {
    const result = await apiGet(API.URL + '/documents')
    setLoading(false)

    if (result === false) setError('Det skjedde noe galt under innhenting av aktivitetslista di...')
    if (!result || (result.data && result.data.length === 0)) return

    const docsOrderedByModified = result.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
    setDocuments(docsOrderedByModified || [])
  }

  function openPreviewModal (doc) {
    setPreviewDocument(doc)
  }

  useEffect(() => {
    getDocuments()
  }, [])

  return (
    <DefaultLayout>

      {
        selectedStudent &&
          <NewDocumentModal
            open={documentModalState}
            selectedStudentId={selectedStudent}
            title='Nytt dokument'
            onDismiss={() => { setDocumentModalState(false) }}
            onFinished={() => {
              setDocumentModalState(false)
              getDocuments()
            }}
          />
      }

      {
        selectedStudent &&
          <NewNoteModal
            open={noteModalState}
            selectedStudentId={selectedStudent}
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

      <div className='activity-log'>

        <Heading2 className='page-title'>Aktivitetslogg</Heading2>

        {
          error &&
            <ErrorMessage>{error}</ErrorMessage>
        }
        {
          !error &&
          (loading || (documents && documents.length > 0)) &&
            <table className='data-actions-table'>
              <thead>
                <tr>
                  <th><Paragraph size='small'>Elev</Paragraph></th>
                  <th><Paragraph size='small'>Dokumenttype</Paragraph></th>
                  <th><Paragraph size='small'>Dato</Paragraph></th>
                  <th><Paragraph size='small'>Sendt av</Paragraph></th>
                  <th className='actions-th'><Paragraph size='small'>Ny handling</Paragraph></th>
                </tr>
              </thead>
              <tbody>
                {
                  loading &&
                  Array(15).fill().map(function (i) {
                    return (
                      <tr key={i}>
                        <td width='300px'>
                          <div className='name'>
                            <Skeleton variant='circle'><InitialsBadge size='small' /></Skeleton>
                            <Skeleton className='paragraph' randomWidth={[40, 80]} />
                          </div>
                        </td>
                        <td><Skeleton randomWidth={[40, 90]} /></td>
                        <td><Skeleton width='90px' /></td>
                        <td width='200px'><Skeleton randomWidth={[40, 80]} /></td>
                        <td><Skeleton width='40%' /></td>
                      </tr>
                    )
                  })
                }
                {
                  !loading &&
                  documents &&
                  documents.length > 0 &&
                  documents.map(function (doc, index) {
                    return (
                      <tr key={index}>
                        <td>
                          <div className='name'>
                            <InitialsBadge firstName={doc.student.firstName} lastName={doc.student.lastName} size='small' />
                            <Paragraph>
                              <Link href={`/${ROUTES.students}/${doc.student.username}`}>
                                {doc.student.name}
                              </Link>
                            </Paragraph>
                          </div>
                        </td>
                        <td>
                          <Paragraph><Link aria-label='Klikk for å åpne' onClick={() => openPreviewModal(doc)}>{repackDocumentType(doc.type, doc.variant)}</Link></Paragraph>
                        </td>
                        <td>
                          <Paragraph><Link tabIndex={-1} aria-label='Klikk for å åpne' aria-hidden onClick={() => openPreviewModal(doc)}><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Link></Paragraph>
                        </td>
                        <td>
                          <Paragraph>{doc.teacher.name}</Paragraph>
                        </td>
                        <td>
                          <IconDropdownNav>
                            <IconDropdownNavItem onClick={() => { openPreviewModal(doc) }} title={`Åpne ${doc.type === 'yff' ? doc.variant.replace('ae', 'æ') : doc.type}`} />
                            <IconDropdownNavItem onClick={() => { openDocumentModal(doc) }} title='Nytt dokument' />
                            <IconDropdownNavItem onClick={() => { openNoteModal(doc) }} title='Nytt notat' />
                            <IconDropdownNavItem href={`/${ROUTES.students}/${doc.student.username}`} title={`Elevsiden til ${doc.student.firstName}`} />
                          </IconDropdownNav>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        }
        {
          !loading &&
          documents &&
          documents.length === 0 &&
            <Paragraph>
              Ingen aktiviteter ble funnet for noen av elevene dine.
            </Paragraph>
        }
      </div>
    </DefaultLayout>
  )
}
