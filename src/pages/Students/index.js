import React from "react"

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading2, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"

import "./styles.scss"

export function Students(props) {
  let students = DEMO_DATA.STUDENTS
  let searchTerm = new URLSearchParams(props.location.search).get("s")

  if (searchTerm && searchTerm !== '') {
    students = students.filter(student => student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || student.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <DefaultLayout>
      <div className="classes">
        
        <Heading2 className="page-title">Elever</Heading2>

        {
          students.length > 0 &&
          <table className="data-actions-table">
            <thead>
              <tr>
                <th><Paragraph size="small">Klasse</Paragraph></th>
                <th><Paragraph size="small">F.dato</Paragraph></th>
                <th><Paragraph size="small">Klasse</Paragraph></th>
                <th><Paragraph size="small">Skole</Paragraph></th>
                <th className="actions-th"><Paragraph size="small">Ny handling</Paragraph></th>
              </tr>
            </thead>
            <tbody>
              {
                students.map(function(student, index) {
                  return (
                    <tr key={ student.id }>
                      <td>
                        <div className="name">
                          <InitialsBadge firstName={student.firstName} lastName={student.lastName} size="small" />
                          <Paragraph>
                            <Link href={ `/${ROUTES.students}/${student.id}` }>{ student.firstName } { student.lastName }</Link>
                          </Paragraph>
                        </div>
                      </td>
                      <td>
                        <Paragraph>{ student.bornDate }</Paragraph>
                      </td>
                      <td>
                        <Paragraph><Link href={ `/${ROUTES.classes}/${student.classId}` }>{student.className}</Link></Paragraph>
                      </td>
                      <td>
                        <Paragraph>{ student.schoolName }</Paragraph>
                      </td>
                      <td className="actions">
                        <IconDropdownNav>
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Nytt dokument" />
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Nytt notat" />
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title={ `YFF for ${student.firstName} ${student.lastName}` } />
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
          <p>Det er ingen student med valgt filtrering.</p>
        }

      </div>
    </DefaultLayout>
  )
}