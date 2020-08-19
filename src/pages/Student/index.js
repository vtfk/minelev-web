import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading2, Heading3, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { Modal } from "../../_lib-components/Modal"
import { ModalBody } from "../../_lib-components/ModalBody"
import { ModalSideActions } from "../../_lib-components/ModalSideActions"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"
import { Icon } from "../../_lib-components/Icon"
import { CardLink } from "../../_lib-components/CardLink"

import "./styles.scss"

export function Student({ match, ...props }) {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

  const { id } = match.params
  const student = DEMO_DATA.getSelectedStudent(parseInt(id))

  const activities = DEMO_DATA.ACTIVITIES

  return (
    <DefaultLayout>
      <div className="student">

        <Link className="back-link" href={ `/${ROUTES.students}` } noStyle={ true } leftIcon={ <Icon name="arrowLeft" size="xsmall" /> }>Tilbake til elevoversikten</Link>
        
        <div className="person-information">
          <div className="image">
            <InitialsBadge firstName={student.firstName} lastName={student.lastName} size="large" />
          </div>
          <div className="text-wrapper">
            <Heading2 className="name">
              {student.firstName} {student.lastName}
            </Heading2>
            <div className="other">
              <Paragraph>{student.schoolName}</Paragraph>
              <Paragraph><Link href={ `/${ROUTES.classes}/${student.classId}` }>{student.className}</Link></Paragraph>
              <Paragraph>26. april 2001</Paragraph>
              <Paragraph>bra26041@skole.vtfk.no</Paragraph>
            </div>
          </div>
        </div>

        <div className="intro">
          <Heading3 className="intro-title">Om YFF og utplassering</Heading3>
          <Paragraph>
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested.
            <br/>
            Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
          </Paragraph>
        </div>

        <div className="actions">
          <CardLink className="action-link" onClick={ () => { alert('Ikke implementert') } }>
            Bekreftelse om utplassering av elev
          </CardLink>
          <CardLink className="action-link" onClick={ () => { alert('Ikke implementert') } }>
            Opprett lokal læreplan
          </CardLink>
        </div>

        <div className="activity-panel">
          <Heading3 as="h2" className="panel-title">
            <Icon name="activity" size="small" /> Aktivitet
          </Heading3>

          <table className="activity-panel-table">
            <tbody>
              {
                activities.map(function(activity, index) {
                  return (
                    <tr key={ activity.id }>
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
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Element 1" />
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Element 2" />
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Element 3" />
                        </IconDropdownNav>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </DefaultLayout>
  )
}