import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading2, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'

import { NewDocumentModal } from '../../containers/NewDocumentModal'
import { NewNoteModal } from '../../containers/NewNoteModal'

import './styles.scss'

export function Students (props) {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [students, setStudents] = useState([])
  const [didSearch, setDidSearch] = useState(false)
  const { apiGet } = useSession()

  const searchTerm = new URLSearchParams(props.location.search).get('s')

  useEffect(() => {
    async function getStudents () {
      const students = await apiGet(API.URL + '/students')
      setStudents(students.data)
    }
    getStudents()
  }, [])

  if (students.length > 0 && searchTerm && searchTerm !== '' && !didSearch) {
    const filteredStudents = students.filter((student) => {
      const studentName = student.firstName + ' ' + student.lastName
      return studentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    })
    console.log(filteredStudents)
    setStudents(filteredStudents)
    setDidSearch(true)
  }

  function openDocumentModal (student) {
    setSelectedStudent(student)
    setDocumentModalState(true)
  }

  function openNoteModal (activity) {
    setSelectedStudent(activity)
    setNoteModalState(true)
  }

  return (
    <DefaultLayout>

      {
        selectedStudent &&
          <NewDocumentModal
            open={documentModalState}
            selectedStudent={selectedStudent}
            title='Nytt dokument'
            onDismiss={() => { setDocumentModalState(false) }}
          />
      }

      {
        selectedStudent &&
          <NewNoteModal
            open={noteModalState}
            selectedStudent={selectedStudent}
            title='Notat til elevmappen'
            onDismiss={() => { setNoteModalState(false) }}
          />
      }

      <div className='classes'>

        <Heading2 className='page-title'>Elever</Heading2>

        {
          students.length > 0 &&
            <table className='data-actions-table'>
              <thead>
                <tr>
                  <th><Paragraph size='small'>Klasse</Paragraph></th>
                  <th><Paragraph size='small'>F.dato</Paragraph></th>
                  <th><Paragraph size='small'>Klasse</Paragraph></th>
                  <th><Paragraph size='small'>Skole</Paragraph></th>
                  <th className='actions-th'><Paragraph size='small'>Ny handling</Paragraph></th>
                </tr>
              </thead>
              <tbody>
                {
                  students.map(function (student, index) {
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
                          <Paragraph><Link href={`/${ROUTES.classes}/${student.classId}`}>{student.classShortId}</Link></Paragraph>
                        </td>
                        <td>
                          <Paragraph>{student.schoolShortName}</Paragraph>
                        </td>
                        <td className='actions'>
                          <IconDropdownNav>
                            <IconDropdownNavItem onClick={() => { openDocumentModal(student) }} title='Nytt dokument' />
                            <IconDropdownNavItem onClick={() => { openNoteModal(student) }} title='Nytt notat' />
                            <IconDropdownNavItem href={`/${ROUTES.students}/${student.id}`} title={`YFF for ${student.firstName} ${student.lastName}`} />
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
          students.length === 0 &&
            <p>Det er ingen elev med valgt filtrering.</p>
        }

      </div>
    </DefaultLayout>
  )
}
