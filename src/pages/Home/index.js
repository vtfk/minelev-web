import React, { useState, useEffect } from "react"
import { useSession } from '../../lib/auth-provider'

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading1, Heading2, Heading3, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { IconDropdownNav, IconDropdownNavItem } from "../../_lib-components/IconDropdownNav"
import { Icon } from '../../_lib-components/Icon'

import { NewDocumentModal } from "../../containers/NewDocumentModal"
import { NewNoteModal } from "../../containers/NewNoteModal"

import "./styles.scss"

export function Home () {
  const { user } = useSession()
  const [documentModalState, setDocumentModalState] = useState(false)
  const [noteModalState, setNoteModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

  const activities = DEMO_DATA.ACTIVITIES.slice(0, 3)

  function openDocumentModal(activity) {
    setSelectedStudent(activity)
    setDocumentModalState(true)
  }
  
  function openNoteModal(activity) {
    setSelectedStudent(activity)
    setNoteModalState(true)
  }

  // testing
  useEffect(() => {
    // setSelectedStudent(activities[0])
    // setDocumentModalState(true)
    // setNoteModalState(true)
  }, []);
  // -- testing 
  
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

      <div className="home">
        <Heading2 as="h1" className="page-title">
          Hei { user.name } og velkommen til MinElev
        </Heading2>

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
                        <div className="activity-name">
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

          <div className="panel-link">
            <Link href={ `/${ROUTES.activityLog}` } noStyle={ true } rightIcon={ <Icon name="arrowRight" size="xsmall" /> }>Aktivitetsloggen</Link>
          </div>
        </div>

        <div className="statistics-class-reports-wrapper">
          <div className="statistics-panel">
            <Heading3 as="h2" className="panel-title">
              <Icon name="statistics" size="small" /> Statistikk
            </Heading3>

            <div className="statistics">
              <div className="statistics-row">
                <div className="statistics-item">
                  <Heading1 as="h3" className="statistics-item-title">
                    1000
                  </Heading1>
                  <Paragraph className="statistics-item-text">varselbrev</Paragraph>
                </div>
                <div className="statistics-item">
                  <Heading1 as="h3" className="statistics-item-title">
                    1000
                  </Heading1>
                  <Paragraph className="statistics-item-text">dokumenterte elevsamtaler</Paragraph>
                </div>
              </div>
              <div className="statistics-row">
                <div className="statistics-item">
                  <Heading1 as="h3" className="statistics-item-title">
                    1000
                  </Heading1>
                  <Paragraph className="statistics-item-text">notater til elevmappa</Paragraph>
                </div>
                <div className="statistics-item">
                  <Heading1 as="h3" className="statistics-item-title">
                    1000
                  </Heading1>
                  <Paragraph className="statistics-item-text">utplasseringer</Paragraph>
                </div>
              </div>
            </div>

            <div className="panel-link">
              <Link href={ `/${ROUTES.statistics}` } noStyle={ true } rightIcon={ <Icon name="arrowRight" size="xsmall" /> }>Mer statistikk</Link>
            </div>
          </div>

          <div className="class-reports-panel">
            <Heading3 as="h2" className="panel-title">
              <Icon name="classes" /> Siste 5 klasserapporter
            </Heading3>

            <div className="class-reports-group">
              <Paragraph className="class-reports-group-title">Kragerø videregående skole</Paragraph>
              <Paragraph className="class-reports-group-text">VG1 – Helsefag</Paragraph>
            </div>

            <div className="class-reports-group">
              <Paragraph className="class-reports-group-title">Skogmo videregående skole</Paragraph>
              <Paragraph className="class-reports-group-text">VG1 – Elektro</Paragraph>
            </div>

            <div className="class-reports-group">
              <Paragraph className="class-reports-group-title">Bamle videregående skole</Paragraph>
              <Paragraph className="class-reports-group-text">VG1 – Helsefag</Paragraph>
            </div>

            <div className="class-reports-group">
              <Paragraph className="class-reports-group-title">Sandefjord videregående skole</Paragraph>
              <Paragraph className="class-reports-group-text">VG1 – Helsefag</Paragraph>
            </div>

            <div className="panel-link">
              <Link href={ `/${ROUTES.classes}` } noStyle={ true } rightIcon={ <Icon name="arrowRight" size="xsmall" /> }>Alle klasser</Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}