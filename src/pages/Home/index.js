import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading1, Heading2, Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { Icon } from '../../_lib-components/Icon'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'

export function Home () {
  const { user } = useSession()
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [documents, setDocuments] = useState([])

  const { apiGet } = useSession()

  function openDocumentModal (item) {
    setSelectedStudent(item.student.username)
    setDocumentModalState(true)
  }

  function openNoteModal (item) {
    setSelectedStudent(item.student.username)
    setNoteModalState(true)
  }

  useEffect(() => {
    async function getClass () {
      const docs = await apiGet(API.URL + '/documents')
      const lastModifiedDocuments = docs.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
      setDocuments(lastModifiedDocuments)
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

      <div className='home'>
        <Heading2 as='h1' className='page-title'>
          Hei {user.givenName} og velkommen til MinElev
        </Heading2>

        <div className='activity-panel'>
          <Heading3 as='h2' className='panel-title'>
            <Icon name='activity' size='small' /> Siste aktivitet
          </Heading3>

          <table className='activity-panel-table'>
            <tbody>
              {
                documents && documents.splice(0, 5).map(function (doc, index) {
                  return (
                    <tr key={index}>
                      <td>
                        <div className='activity-name'>
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

          <div className='panel-link'>
            <Link href={`/${ROUTES.activityLog}`} noStyle rightIcon={<Icon name='arrowRight' size='xsmall' />}>Aktivitetsloggen</Link>
          </div>
        </div>

        <div className='statistics-class-reports-wrapper'>
          <div className='statistics-panel'>
            <Heading3 as='h2' className='panel-title'>
              <Icon name='statistics' size='small' /> Statistikk for dine elever
            </Heading3>

            <div className='statistics'>
              <div className='statistics-row'>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    [X]
                  </Heading1>
                  <Paragraph className='statistics-item-text'>varselbrev</Paragraph>
                </div>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    [X]
                  </Heading1>
                  <Paragraph className='statistics-item-text'>dokumenterte elevsamtaler</Paragraph>
                </div>
              </div>
              <div className='statistics-row'>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    [X]
                  </Heading1>
                  <Paragraph className='statistics-item-text'>notater til elevmappa</Paragraph>
                </div>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    [X]
                  </Heading1>
                  <Paragraph className='statistics-item-text'>utplasseringer</Paragraph>
                </div>
              </div>
            </div>

            <div className='panel-link'>
              <Link href={`/${ROUTES.statistics}`} noStyle rightIcon={<Icon name='arrowRight' size='xsmall' />}>Mer statistikk</Link>
            </div>
          </div>

          <div className='class-reports-panel'>
            <Heading3 as='h2' className='panel-title'>
              <Icon name='help' /> Support
            </Heading3>

            {
              /*
              <div className='class-reports-group'>
                <Paragraph className='class-reports-group-title'>[Kragerø videregående skole]</Paragraph>
                <Paragraph className='class-reports-group-text'>[VG1 – Helsefag]</Paragraph>
              </div>

              <div className='class-reports-group'>
                <Paragraph className='class-reports-group-title'>[Skogmo videregående skole]</Paragraph>
                <Paragraph className='class-reports-group-text'>[VG1 – Elektro]</Paragraph>
              </div>

              <div className='class-reports-group'>
                <Paragraph className='class-reports-group-title'>[Bamle videregående skole]</Paragraph>
                <Paragraph className='class-reports-group-text'>[VG1 – Helsefag]</Paragraph>
              </div>

              <div className='class-reports-group'>
                <Paragraph className='class-reports-group-title'>[Sandefjord videregående skole]</Paragraph>
                <Paragraph className='class-reports-group-text'>[VG1 – Helsefag]</Paragraph>
              </div>
              */
            }

            {
              /*
              <div className='panel-link'>
                <Link href={`/${ROUTES.classes}`} noStyle rightIcon={<Icon name='arrowRight' size='xsmall' />}>Alle klasser</Link>
              </div>
              */
            }
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
