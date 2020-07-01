import React, { useState } from "react"

import { DefaultLayout } from "../../layouts/Default"

import { Heading2, Heading3, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"

import { NewDocumentModal } from "../../containers/NewDocumentModal"

import "./styles.scss"

export function Home() {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)

  let currentUser = {
    firstName: 'Charlotte',
    lastName: 'Testine',
  }

  let activities = [
    {
      id: 1,
      firstName: 'Brage',
      lastName: 'Dahle',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Sendt',
    },
    {
      id: 2,
      firstName: 'Erik',
      lastName: 'Wang',
      type: 'Varselbrev fag',
      date: '12. juni 2020', // TODO: date
      status: 'I kø',
    },
    {
      id: 3,
      firstName: 'Per Andre',
      lastName: 'Lano-Olsen',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Arkivert',
    }
  ]

  function openDocumentModal(activity) {
    setSelectedPerson(activity)
    setDocumentModalState(true)
  }

  return (
    <DefaultLayout>

      {
        selectedPerson &&
        <NewDocumentModal
          open={ documentModalState }
          selectedPerson={ selectedPerson }
          title="Nytt dokument"
          onDismiss={ () => { setDocumentModalState(false) } }
        />
      }

      <div className="home">
        <Heading2 className="page-title">
          Hei { currentUser.firstName } og velkommen til MinElev
        </Heading2>

        <div className="activity-panel">
          <Heading3 className="activity-panel-title">
            [ikon] Aktivitet
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
                            { activity.firstName } { activity.lastName }
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
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Nytt notat" />
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title={ `YFF for ${activity.firstName} ${activity.lastName}` } />
                        </IconDropdownNav>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

          <div className="activity-panel-link">
            <Link href="/aktivitetslogg" noStyle={ true } hasRightArrow={ true }>Aktivitetsloggen</Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}