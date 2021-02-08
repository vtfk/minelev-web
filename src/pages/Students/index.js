import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading2, Paragraph, Link, InitialsBadge, IconDropdownNav, IconDropdownNavItem, Skeleton } from '@vtfk/components'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'

export function Students (props) {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [status, setStatus] = useState('')
  const [students, setStudents] = useState([])
  const [didSearch, setDidSearch] = useState(false)
  const { apiGet } = useSession()

  const searchTerm = new URLSearchParams(props.location.search).get('s')

  useEffect(() => {
    async function getStudents () {
      setStatus('Loading')
      const students = await apiGet(API.URL + '/students')
      if (students === false || students.error) setStatus('Error')
      if (students.data) {
        setStudents(students.data)
        setStatus('Finish')
      }
    }
    getStudents()
  }, [])

  if (students.length > 0 && searchTerm && searchTerm !== '' && !didSearch) {
    const filteredStudents = students.filter((student) => {
      const studentName = student.firstName + ' ' + student.lastName
      return studentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    })
    setStudents(filteredStudents)
    setDidSearch(true)
  }

  function openDocumentModal (student) {
    setSelectedStudent(student)
    setDocumentModalState(true)
  }

  function openNoteModal (item) {
    setSelectedStudent(item)
    setNoteModalState(true)
  }

  return (
    <DefaultLayout>

      {
        selectedStudent &&
          <NewDocumentModal
            open={documentModalState}
            selectedStudentId={selectedStudent.username}
            title='Nytt dokument'
            onDismiss={() => { setDocumentModalState(false) }}
            onFinished={() => { setDocumentModalState(false) }}
          />
      }

      {
        selectedStudent &&
          <NewNoteModal
            open={noteModalState}
            selectedStudentId={selectedStudent.username}
            title='Notat til elevmappen'
            onDismiss={() => { setNoteModalState(false) }}
            onFinished={() => { setNoteModalState(false) }}
          />
      }

      <div className='students'>
        <Heading2 className='page-title'>Elever</Heading2>

        {
          (status === 'Loading' || (students && students.length > 0)) &&
            <table className='data-actions-table'>
              <thead>
                <tr>
                  <th><Paragraph size='small'>Navn</Paragraph></th>
                  <th><Paragraph size='small'>Fødselsdato</Paragraph></th>
                  <th><Paragraph size='small'>Klasse</Paragraph></th>
                  <th><Paragraph size='small'>Skole</Paragraph></th>
                  <th className='actions-th'><Paragraph size='small'>Ny handling</Paragraph></th>
                </tr>
              </thead>
              <tbody>
                {
                  status === 'Loading' &&
                  Array(8).fill().map(function (i) {
                    return (
                      <tr key={i}>
                        <td width='380px'>
                          <div className='name'>
                            <Skeleton variant='circle'><InitialsBadge size='small' /></Skeleton>
                            <Skeleton className='paragraph' randomWidth={[40, 80]} />
                          </div>
                        </td>
                        <td><Skeleton width='120px' /></td>
                        <td><Skeleton width='90px' /></td>
                        <td><Skeleton width='150px' /></td>
                        <td><Skeleton /></td>
                      </tr>
                    )
                  })
                }
                {
                  status === 'Finish' &&
                  students.map(function (student) {
                    return (
                      <tr key={student.id}>
                        <td>
                          <div className='name'>
                            <InitialsBadge firstName={student.firstName} lastName={student.lastName} size='small' />
                            <Paragraph>
                              <Link href={`/${ROUTES.students}/${student.id}`}>{student.firstName} {student.lastName}</Link>
                            </Paragraph>
                          </div>
                        </td>
                        <td>
                          <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{student.birthdate}</Moment></Paragraph>
                        </td>
                        <td>
                          <Paragraph><Link href={`/${ROUTES.classes}/${encodeURIComponent(student.classId)}`}>{student.classShortId}</Link></Paragraph>
                        </td>
                        <td>
                          <Paragraph>{student.schoolShortName}</Paragraph>
                        </td>
                        <td className='actions'>
                          <IconDropdownNav>
                            <IconDropdownNavItem onClick={() => { openDocumentModal(student) }} title='Nytt dokument' />
                            <IconDropdownNavItem onClick={() => { openNoteModal(student) }} title='Nytt notat' />
                            <IconDropdownNavItem href={`/${ROUTES.students}/${student.id}`} title={`Elevsiden til ${student.firstName}`} />
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
          (status === 'Error' &&
            <>
              <Paragraph>
                Klarte ikke å hente elevene dine... :(
              </Paragraph>
            </>) ||

          (status === 'Finish' && searchTerm && students.length === 0 &&
            <>
              <Paragraph>
                Fant ingen elever med valgt filtrering. Forsøk et annet søkeord, eller <Link href={ROUTES.students}>gå til elevoversikten</Link>.
              </Paragraph>
            </>) ||

          (status === 'Finish' && students.length === 0 &&
            <>
              <Paragraph>
                Du har ikke tilgang til noen elever. Kontakt Extensansvarlig.
              </Paragraph>
            </>)
        }

      </div>
    </DefaultLayout>
  )
}
