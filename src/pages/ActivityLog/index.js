import React from "react"

import { DefaultLayout } from "../../layouts/Default"

import { Heading2, Paragraph } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"

import "./styles.scss"

export function ActivityLog() {
  let activities = [
    {
      id: 1,
      firstName: 'Brage',
      lastName: 'Dahle',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Sendt',
      sentBy: 'Charlotte Testine',
    },
    {
      id: 2,
      firstName: 'Erik',
      lastName: 'Wang',
      type: 'Varselbrev fag',
      date: '12. juni 2020', // TODO: date
      status: 'I kø',
      sentBy: 'Robert Gaarden',
    },
    {
      id: 3,
      firstName: 'Per Andre',
      lastName: 'Olsen',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Arkivert',
      sentBy: 'Charlotte Testine',
    },
    {
      id: 4,
      firstName: 'Dag Otto',
      lastName: 'Johannesen',
      type: 'Varselbrev fag',
      date: '12. juni 2020', // TODO: date
      status: 'I kø',
      sentBy: 'Robert Gaarden',
    },
    {
      id: 5,
      firstName: 'Per Andre',
      lastName: 'Haler-Olsen',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Arkivert',
      sentBy: 'Charlotte Testine',
    }
  ]

  return (
    <DefaultLayout>
      <div className="activity-log">
        
        <Heading2 className="page-title">Aktivitetslogg</Heading2>

        <table className="activity-table">
            <thead>
              <tr>
                <th><Paragraph size="small">Elev</Paragraph></th>
                <th><Paragraph size="small">Dokument type</Paragraph></th>
                <th><Paragraph size="small">Dato</Paragraph></th>
                <th><Paragraph size="small">Status</Paragraph></th>
                <th><Paragraph size="small">Sendt av</Paragraph></th>
                <th><Paragraph size="small">Ny handling</Paragraph></th>
              </tr>
            </thead>
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
                        <Paragraph>{ activity.sentBy }</Paragraph>
                      </td>
                      <td>
                        <IconDropdownNav>
                          <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Nytt dokument" />
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

      </div>
    </DefaultLayout>
  )
}