import React, { useState } from "react"

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading2, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { IconDropdownNav, IconDropdownNavItem } from "../../_lib-components/IconDropdownNav"

import { NewDocumentModal } from "../../containers/NewDocumentModal"
import { NewNoteModal } from "../../containers/NewNoteModal"

import "./styles.scss"

export function ActivityLog() {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

  let activities = DEMO_DATA.ACTIVITIES

  function openDocumentModal(activity) {
    setSelectedStudent(activity)
    setDocumentModalState(true)
  }

  function openNoteModal(activity) {
    setSelectedStudent(activity)
    setNoteModalState(true)
  }

  return (
    <DefaultLayout>

      {
        selectedStudent &&
        <NewDocumentModal
          open={ documentModalState }
          selectedStudent={ selectedStudent }
          title="Nytt dokument"
          onDismiss={ () => { setDocumentModalState(false) } }
        />
      }

      {
        selectedStudent &&
        <NewNoteModal
          open={ noteModalState }
          selectedStudent={ selectedStudent }
          title="Notat til elevmappen"
          onDismiss={ () => { setNoteModalState(false) } }
        />
      }

      <div className="activity-log">
        
        <Heading2 className="page-title">Aktivitetslogg</Heading2>

        <table className="data-actions-table">
            <thead>
              <tr>
                <th><Paragraph size="small">Elev</Paragraph></th>
                <th><Paragraph size="small">Dokument type</Paragraph></th>
                <th><Paragraph size="small">Dato</Paragraph></th>
                <th><Paragraph size="small">Status</Paragraph></th>
                <th><Paragraph size="small">Sendt av</Paragraph></th>
                <th className="actions-th"><Paragraph size="small">Ny handling</Paragraph></th>
              </tr>
            </thead>
            <tbody>
              {
                activities.map(function(activity, index) {
                  return (
                    <tr key={ activity.id }>
                      <td>
                        <div className="name">
                          <InitialsBadge firstName={activity.firstName} lastName={activity.lastName} size="small" />
                          <Paragraph>
                            <Link href={ `/${ROUTES.students}/${activity.studentId}` }>{ activity.firstName } { activity.lastName }</Link>
                          </Paragraph>
                        </div>
                      </td>
                      <td>
                        <Paragraph>{ activity.type }</Paragraph>
                      </td>
                      <td>
                        <Paragraph>{ activity.date }</Paragraph>
                      </td>
                      <td>
                        <Paragraph>{ activity.status }</Paragraph>
                      </td>
                      <td>
                        <Paragraph>{ activity.sentBy }</Paragraph>
                      </td>
                      <td className="actions">
                        <IconDropdownNav>
                          <IconDropdownNavItem onClick={ () => { openDocumentModal(activity) } } title="Nytt dokument" />
                          <IconDropdownNavItem onClick={ () => { openNoteModal(activity) } } title="Nytt notat" />
                          <IconDropdownNavItem href={ `/${ROUTES.students}/${activity.studentId}` } title={ `YFF for ${activity.firstName} ${activity.lastName}` } />
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