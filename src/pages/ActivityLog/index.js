import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading2, Paragraph, Link, ErrorMessage } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'
import { PreviewDocumentModal } from '../../containers/PreviewDocumentModal'

import './styles.scss'
import repackDocumentType from '../../lib/repack-document-type'
import repackDocumentStatus from '../../lib/repack-document-status'

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
                  <th><Paragraph size='small'>Status</Paragraph></th>
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
                            <SkeletonLoader variant='circle'><InitialsBadge size='small' /></SkeletonLoader>
                            <SkeletonLoader className='paragraph' randomWidth={[40, 80]} />
                          </div>
                        </td>
                        <td><SkeletonLoader randomWidth={[40, 90]} /></td>
                        <td><SkeletonLoader width='90px' /></td>
                        <td><SkeletonLoader /></td>
                        <td width='200px'><SkeletonLoader randomWidth={[40, 80]} /></td>
                        <td><SkeletonLoader width='40%' /></td>
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
                          <Paragraph><Link onClick={() => openPreviewModal(doc)}>{repackDocumentType(doc.type, doc.variant)}</Link></Paragraph>
                        </td>
                        <td>
                          <Paragraph><Link tabindex={-1} onClick={() => openPreviewModal(doc)}><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Link></Paragraph>
                        </td>
                        <td>
                          <Paragraph>{repackDocumentStatus(doc.status)}</Paragraph>
                        </td>
                        <td>
                          <Paragraph>{doc.teacher.name}</Paragraph>
                        </td>
                        <td>
                          <IconDropdownNav>
                            <IconDropdownNavItem onClick={() => { openPreviewModal(doc) }} title='Vis dokument' />
                            <IconDropdownNavItem onClick={() => { openDocumentModal(doc) }} title='Nytt dokument' />
                            <IconDropdownNavItem onClick={() => { openNoteModal(doc) }} title='Nytt notat' />
                            <IconDropdownNavItem href={`/${ROUTES.students}/${doc.student.username}`} title={`YFF for ${doc.student.name}`} />
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
