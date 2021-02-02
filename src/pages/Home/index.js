import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import ClassPanel from '../../components/class-panel'
import { Heading1, Heading2, Heading3, Paragraph, Link, ErrorMessage } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { Icon } from '../../_lib-components/Icon'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'
import repackDocumentType from '../../lib/repack-document-type'
import repackDocumentStatus from '../../lib/repack-document-status'

export function Home () {
  const { user } = useSession()
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [documents, setDocuments] = useState([])
  const [varsler, setVarsler] = useState([])
  const [conversations, setConversations] = useState([])
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { apiGet } = useSession()

  function openDocumentModal (item) {
    setSelectedStudent(item.student.username)
    setDocumentModalState(true)
  }

  function openNoteModal (item) {
    setSelectedStudent(item.student.username)
    setNoteModalState(true)
  }

  async function getDocuments () {
    const docs = await apiGet(API.URL + '/documents')
    setLoading(false)

    if (docs === false) setError(<>Det skjedde noe galt under innhenting av dine siste aktiviter.<br />Forsøk å laste inn siden på nytt. Kontakt systemansvarlig dersom problemene dine vedvarer.</>)
    if (!docs.data || docs.data.length === 0) return

    const lastModifiedDocuments = [...docs.data].sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
    const docsVarsler = lastModifiedDocuments.filter((item) => item.type === 'varsel')
    const docsConversations = lastModifiedDocuments.filter((item) => item.type === 'samtale')
    const docsNotes = lastModifiedDocuments.filter((item) => item.type === 'notat')

    setDocuments(lastModifiedDocuments)
    setVarsler(docsVarsler)
    setConversations(docsConversations)
    setNotes(docsNotes)
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

      <div className='home'>
        <Heading2 as='h1' className='page-title'>
          {`Hei ${user.givenName} og velkommen til MinElev`}
        </Heading2>

        <ClassPanel
          icon='activity' title='Siste aktivitet' link={
            <div className='panel-link'>
              <Link href={`/${ROUTES.activityLog}`} noStyle rightIcon={<Icon name='arrowRight' size='xsmall' />}>Aktivitetsloggen</Link>
            </div>
          }
        >
          {
            loading &&
            Array(5).fill().map(function (i) {
              return (
                <tr key={i}>
                  <td>
                    <div className='activity-name'>
                      <SkeletonLoader variant='circle'><InitialsBadge size='small' /></SkeletonLoader>
                      <SkeletonLoader className='paragraph' randomWidth={[40, 80]} />
                    </div>
                  </td>
                  <td><SkeletonLoader randomWidth={[40, 70]} /></td>
                  <td><SkeletonLoader width='60%' /></td>
                  <td><SkeletonLoader /></td>
                  <td><SkeletonLoader /></td>
                </tr>
              )
            })
          }
          {
            !loading &&
            error &&
              <ErrorMessage>{error}</ErrorMessage>
          }
          {
            !loading &&
            documents && [...documents].splice(0, 5).map(function (doc, index) {
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
                    <Paragraph>{repackDocumentType(doc.type, doc.variant)}</Paragraph>
                  </td>
                  <td>
                    <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                  </td>
                  <td>
                    <Paragraph>{repackDocumentStatus(doc.status)}</Paragraph>
                  </td>
                  <td>
                    <IconDropdownNav>
                      <IconDropdownNavItem onClick={() => { openDocumentModal(doc) }} title='Nytt dokument' />
                      <IconDropdownNavItem onClick={() => { openNoteModal(doc) }} title='Nytt notat' />
                      <IconDropdownNavItem href={`/${ROUTES.students}/${doc.student.username}`} title={`Elevsiden til ${doc.student.firstName}`} />
                    </IconDropdownNav>
                  </td>
                </tr>
              )
            })
          }
          {
            !loading && !error && documents && documents.length === 0 &&
              <Paragraph style={{ fontStyle: 'italic', color: 'grey' }}>Fant ingen aktiviteter for noen av elevene dine</Paragraph>
          }
        </ClassPanel>

        <div className='statistics-class-support-wrapper'>
          <div className='statistics-panel'>
            <Heading3 as='h2' className='panel-title'>
              <Icon name='statistics' size='small' /> Statistikk for dine elever
            </Heading3>

            <div className='statistics'>
              <div className='statistics-row'>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    {
                      loading
                        ? <SkeletonLoader randomWidth={[20, 80]} />
                        : varsler.length
                    }
                  </Heading1>
                  <Paragraph className='statistics-item-text'>varselbrev</Paragraph>
                </div>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    {
                      loading
                        ? <SkeletonLoader randomWidth={[20, 80]} />
                        : conversations.length
                    }
                  </Heading1>
                  <Paragraph className='statistics-item-text'>dokumenterte elevsamtaler</Paragraph>
                </div>
              </div>
              <div className='statistics-row'>
                <div className='statistics-item'>
                  <Heading1 as='h3' className='statistics-item-title'>
                    {
                      loading
                        ? <SkeletonLoader randomWidth={[20, 80]} />
                        : notes.length
                    }
                  </Heading1>
                  <Paragraph className='statistics-item-text'>notater til elevmappa</Paragraph>
                </div>
                {/*
                  <div className='statistics-item'>
                    <Heading1 as='h3' className='statistics-item-title'>
                    {
                        loading
                          ? <SkeletonLoader randomWidth={[20, 80]} />
                          : '?'
                      }
                    </Heading1>
                    <Paragraph className='statistics-item-text'>utplasseringer</Paragraph>
                  </div>
                */}
              </div>
            </div>

            <div className='panel-link'>
              <Link href={`/${ROUTES.statistics}`} noStyle rightIcon={<Icon name='arrowRight' size='xsmall' />}>Mer statistikk</Link>
            </div>
          </div>

          <div className='class-support-panel'>
            <Heading3 as='h2' className='panel-title'>
              <Icon name='help' /> Trenger du hjelp?
            </Heading3>

            <Paragraph>
              <strong>Mangler du en elev eller klasse?</strong><br />
              Ta kontakt med Extensansvarlig på skolen din, så hjelper de deg.
            </Paragraph>

            <Paragraph>
              Andre henvendelser kan rettes til:<br />
              <br />
              <strong>Servicedesk IT</strong><br />
              Telefon: 33 44 42 00<br />
              E-post: <a href='mailto:servicedesk@vtfk.no'>servicedesk@vtfk.no</a><br />
            </Paragraph>

            <div className='panel-link'>
              <Link href={`/${ROUTES.help}`} noStyle rightIcon={<Icon name='arrowRight' size='xsmall' />}>Gå til hjelpesiden</Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
