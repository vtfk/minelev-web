import React from "react"

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading2, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"

import "./styles.scss"

export function ActivityLog() {
  let activities = DEMO_DATA.ACTIVITIES

  return (
    <DefaultLayout>
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