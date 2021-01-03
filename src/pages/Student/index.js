import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { Icon } from '../../_lib-components/Icon'

import Yff from './yff'
import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'
import repackDocumentType from '../../lib/repack-document-type'
import repackDocumentStatus from '../../lib/repack-document-status'
<<<<<<< HEAD
=======
import { nanoid } from 'nanoid'
import StudentCard from '../../components/student-card'
>>>>>>> main

export function Student ({ match, ...props }) {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [student, setStudent] = useState({})
  const [documents, setDocuments] = useState([])
  const [notes, setNotes] = useState([])
  const { apiGet } = useSession()

  const { id } = match.params

<<<<<<< HEAD
  useEffect(() => {
    async function getStudent () {
      const student = await apiGet(API.URL + '/students/' + id)
      setStudent(student.data)
    }
    getStudent()

    async function getDocuments () {
      const docs = await apiGet(API.URL + '/students/' + id + '/documents')
      const docsOrderedByModified = docs.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
      const docsExceptNotes = docsOrderedByModified.filter((item) => item.type !== 'notat')
      const notes = docsOrderedByModified.filter((item) => item.type === 'notat')
      setDocuments(docsExceptNotes)
      setNotes(notes)
    }
    getDocuments()
  }, [])
=======
  async function getStudent () {
    const student = await apiGet(API.URL + '/students/' + id)
    if (!student.data) return
    // TODO: Display error message

    setStudent(student.data)
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

  async function getUtplasseringer () {
    const utplasseringer = await apiGet(`${API.URL}/yff/${id}/utplassering`)
    const utenTilbakemelding = utplasseringer.filter(utplassering => !utplassering.tilbakemelding)
    setUtplasseringer(utenTilbakemelding)
  }

  function openConfirmationModal () {
    setConfirmationModalState(true)
  }

  function openCurriculumModal () {
    setCurriculumModalState(true)
  }

  function openReviewModal (id) {
    setSelectedUtplassering(id)
    setReviewModalState(true)
  }

  function openSendModal () {
    setSendModalState(true)
  }
>>>>>>> main

  function openDocumentModal (activity) {
    setDocumentModalState(true)
  }

  function openNoteModal (activity) {
    setNoteModalState(true)
  }

<<<<<<< HEAD
=======
  // Last inn elev, dokumenter og utplasseringer når siden lastes
  useEffect(() => {
    getStudent()
    getDocuments()
    getUtplasseringer()
  }, [])

  function Utplassering ({ _id: id, bedriftsData, utplasseringData }) {
    const { navn } = bedriftsData
    const { startDato, sluttDato } = utplasseringData
    return (
      <CardLink className='action-link' onClick={() => { openReviewModal(id) }}>
        Tilbakemelding på utplassering<br />
        <Paragraph size='small'>{navn}</Paragraph>
        <Paragraph size='small'>{startDato} - {sluttDato}</Paragraph>
      </CardLink>
    )
  }

>>>>>>> main
  return (
    <DefaultLayout>

      {
        student &&
        student.username &&
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
          student &&
          student.id &&
            <div>

              <StudentCard student={student} largeName>
                <div className='person-information-actions'>
                  {/* TODO: component */}
                  <Link
                    className='person-information-action-button button-left-icon transparent-with-border'
                    onClick={() => { openDocumentModal(student) }}
                  >
                    <div className='button-left-icon-icon'>
                      <Icon name='add' size='small' />
                    </div>
                    <div className='button-left-icon-text'>
                      Nytt dokument
                    </div>
                  </Link>

                  {/* TODO: component */}
                  <Link
                    className='person-information-action-button button-left-icon transparent-with-border'
                    onClick={() => { openNoteModal(student) }}
                  >
                    <div className='button-left-icon-icon'>
                      <Icon name='add' size='small' />
                    </div>
                    <div className='button-left-icon-text'>
                      Nytt notat
                    </div>
                  </Link>
                </div>
              </StudentCard>

              <Yff student={student} fetcher={apiGet} />

              <div className='activity-panel'>
                <Heading3 as='h2' className='panel-title'>
                  <Icon name='activity' size='small' /> Varsler og samtaler
                </Heading3>

                <table className='activity-panel-table'>
                  <tbody>
                    {
                      documents.map(function (doc, index) {
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
                  </tbody>
                </table>

                {/* TODO: component */}
                <Link
                  className='add-more-button button-left-icon button-primary'
                  onClick={() => { openDocumentModal(student) }}
                >
                  <div className='button-left-icon-icon'>
                    <Icon name='add' size='small' />
                  </div>
                  <div className='button-left-icon-text'>
                    Nytt dokument
                  </div>
                </Link>
              </div>

              <div className='activity-panel'>
                <Heading3 as='h2' className='panel-title'>
                  <Icon name='activity' size='small' /> Notater
                </Heading3>

                <table className='activity-panel-table'>
                  <tbody>
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
                      notes.length === 0 &&
                        <tr>
                          <td style={{ textAlign: 'left' }}>
                            <Paragraph>Denne eleven har ingen notater.</Paragraph>
                          </td>
                        </tr>
                    }
                  </tbody>
                </table>

                {/* TODO: component */}
                <Link
                  className='add-more-button button-left-icon button-primary'
                  onClick={() => { openNoteModal(student) }}
                >
                  <div className='button-left-icon-icon'>
                    <Icon name='add' size='small' />
                  </div>
                  <div className='button-left-icon-text'>
                    Nytt notat til elevmappen
                  </div>
                </Link>
              </div>
            </div>
        }

      </div>
    </DefaultLayout>
  )
}
