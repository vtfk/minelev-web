import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading2, Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { Icon } from '../../_lib-components/Icon'
import { CardLink } from '../../_lib-components/CardLink'

import { YffConfirmationModal } from '../../containers/YffConfirmationModal'
import { YffCurriculumModal } from '../../containers/YffCurriculumModal'
import { YffSendModal } from '../../containers/YffSendModal'
import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'

export function Student ({ match, ...props }) {
  const [confirmationModalState, setConfirmationModalState] = useState(false)
  const [curriculumModalState, setCurriculumModalState] = useState(false)
  const [sendModalState, setSendModalState] = useState(false)
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [student, setStudent] = useState({})
  const { apiGet } = useSession()

  const { id } = match.params

  useEffect(() => {
    async function getStudent () {
      const student = await apiGet(API.URL + '/students/' + id)
      console.log(student)
      setStudent(student.data)
    }
    getStudent()
  }, [])

  const activities = [] // <--- needs to be populated

  function openConfirmationModal () {
    setConfirmationModalState(true)
  }

  function openCurriculumModal () {
    setCurriculumModalState(true)
  }

  function openSendModal () {
    setSendModalState(true)
  }

  function openDocumentModal (activity) {
    setDocumentModalState(true)
  }

  function openNoteModal (activity) {
    setNoteModalState(true)
  }

  // testing
  useEffect(() => {
    // setConfirmationModalState(true)
    // setCurriculumModalState(true)
  }, [])
  // -- testing

  return (
    <DefaultLayout>

      <YffConfirmationModal
        open={confirmationModalState}
        selectedStudent={student}
        title='Bekreftelse om utplassering av elev'
        onDismiss={() => { setConfirmationModalState(false) }}
      />

      <YffCurriculumModal
        open={curriculumModalState}
        selectedStudent={student}
        title='Lokal læreplan'
        onDismiss={() => { setCurriculumModalState(false) }}
      />

      <YffSendModal
        open={sendModalState}
        selectedStudent={student}
        title='Send og arkiver lokal læreplan'
        onDismiss={() => { setSendModalState(false) }}
      />

      <NewDocumentModal
        open={documentModalState}
        selectedStudent={student}
        title='Nytt dokument'
        onDismiss={() => { setDocumentModalState(false) }}
      />

      <NewNoteModal
        open={noteModalState}
        selectedStudent={student}
        title='Notat til elevmappen'
        onDismiss={() => { setNoteModalState(false) }}
      />

      <div className='student'>

        <Link className='back-link' href={`/${ROUTES.students}`} noStyle leftIcon={<Icon name='arrowLeft' size='xsmall' />}>Til elevoversikten</Link>

        {
          student &&
          student.id &&
            <div>
              <div className='person-information'>
                <div className='image'>
                  <InitialsBadge firstName={student.firstName} lastName={student.lastName} size='large' />
                </div>
                <div className='text-wrapper'>
                  <Heading2 className='name'>
                    {student.firstName} {student.lastName}
                  </Heading2>
                  <div className='other'>
                    <Paragraph>{student.schoolName}</Paragraph>
                    <Paragraph><Link href={`/${ROUTES.classes}/${student.classId}`}>{student.className}</Link></Paragraph>
                    <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{student.birthdate}</Moment></Paragraph>
                    <Paragraph>{student.mail}</Paragraph>
                  </div>
                </div>

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
              </div>

              <div className='intro'>
                <Heading3 className='intro-title'>Om YFF og utplassering</Heading3>
                <Paragraph>
                  Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested.
                  <br />
                  Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
                </Paragraph>
              </div>

              <div className='actions'>
                <CardLink className='action-link' onClick={() => { openConfirmationModal() }}>
                  Bekreftelse om utplassering av elev
                </CardLink>
                <CardLink className='action-link' onClick={() => { openCurriculumModal() }}>
                  Opprett lokal læreplan
                </CardLink>
                <CardLink title='Du må først opprette lokal læreplan' disabled className='action-link' onClick={() => { openSendModal() }}>
                  Send og arkiver lokal læreplan
                  <br />
                  <Paragraph size='small'>Du må først opprette lokal læreplan</Paragraph>
                </CardLink>
              </div>

              <div className='activity-panel'>
                <Heading3 as='h2' className='panel-title'>
                  <Icon name='activity' size='small' /> Aktivitet
                </Heading3>

                <table className='activity-panel-table'>
                  <tbody>
                    {
                      activities.map(function (activity, index) {
                        return (
                          <tr key={activity.id}>
                            <td>
                              <Paragraph>Tekst</Paragraph>
                            </td>
                            <td>
                              <Paragraph>Tekst</Paragraph>
                            </td>
                            <td>
                              <Paragraph>Tekst</Paragraph>
                            </td>
                            <td>
                              <IconDropdownNav>
                                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 1' />
                                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 2' />
                                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 3' />
                              </IconDropdownNav>
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
                      activities.map(function (activity, index) {
                        return (
                          <tr key={activity.id}>
                            <td>
                              <Paragraph>Tekst</Paragraph>
                            </td>
                            <td>
                              <Paragraph>Tekst</Paragraph>
                            </td>
                            <td>
                              <Paragraph>Tekst</Paragraph>
                            </td>
                            <td>
                              <IconDropdownNav>
                                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 1' />
                                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 2' />
                                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 3' />
                              </IconDropdownNav>
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
