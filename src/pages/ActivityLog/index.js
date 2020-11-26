import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading2, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'

export function ActivityLog () {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [documents, setDocuments] = useState([])

  const { apiGet } = useSession()

  function openDocumentModal (document) {
    setSelectedStudent(document.student.username)
    setDocumentModalState(true)
  }

  function openNoteModal (document) {
    setSelectedStudent(document)
    setNoteModalState(true)
  }

  useEffect(() => {
    async function getClass () {
      const docs = await apiGet(API.URL + '/documents')
      const docsOrderedByModified = docs.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
      setDocuments(docsOrderedByModified)
    }
    getClass()
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
          />
      }

      {
        selectedStudent &&
          <NewNoteModal
            open={noteModalState}
            selectedStudentId={selectedStudent}
            title='Notat til elevmappen'
            onDismiss={() => { setNoteModalState(false) }}
          />
      }

      <div className='activity-log'>

        <Heading2 className='page-title'>Aktivitetslogg</Heading2>

        <table className='data-actions-table'>
          <thead>
            <tr>
              <th><Paragraph size='small'>Elev</Paragraph></th>
              <th><Paragraph size='small'>Dokument type</Paragraph></th>
              <th><Paragraph size='small'>Dato</Paragraph></th>
              <th><Paragraph size='small'>Status</Paragraph></th>
              <th><Paragraph size='small'>Sendt av</Paragraph></th>
              <th className='actions-th'><Paragraph size='small'>Ny handling</Paragraph></th>
            </tr>
          </thead>
          <tbody>
            {
              documents && documents.map(function (doc, index) {
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
                      <Paragraph>{doc.type}</Paragraph>
                    </td>
                    <td>
                      <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.status && doc.status[doc.status.length - 1] ? doc.status[doc.status.length - 1].timestamp : '-'}</Moment></Paragraph>
                    </td>
                    <td>
                      <Paragraph>{doc.status && doc.status[doc.status.length - 1] ? doc.status[doc.status.length - 1].status : '-'}</Paragraph>
                    </td>
                    <td>
                      <Paragraph>{doc.teacher.name}</Paragraph>
                    </td>
                    <td>
                      <IconDropdownNav>
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

      </div>
    </DefaultLayout>
  )
}
