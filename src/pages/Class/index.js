import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading1, Heading2, Heading3, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { Modal } from "../../_lib-components/Modal"
import { ModalBody } from "../../_lib-components/ModalBody"
import { ModalSideActions } from "../../_lib-components/ModalSideActions"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"
import { Icon } from "../../_lib-components/Icon"
import { CardLink } from "../../_lib-components/CardLink"

import "./styles.scss"

export function Class({ match, ...props }) {
  const [documentModalState, setDocumentModalState] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

  const { id } = match.params
  const schoolClass = DEMO_DATA.getSelectedClass(parseInt(id))

  const activities = DEMO_DATA.ACTIVITIES

  return (
    <DefaultLayout>
      <div className="class">

        <Link className="back-link" href={ `/${ROUTES.students}` } noStyle={ true } leftIcon={ <Icon name="arrowLeft" size="xsmall" /> }>Tilbake til elevoversikten</Link>
        
        <div className="class-information">
          <div className="class-shortname">
            {schoolClass.shortName}
          </div>
          <div className="text-wrapper">
            <Heading3 className="name">
              {schoolClass.className}
            </Heading3>
            <div className="other">
              <Paragraph>{schoolClass.schoolName}</Paragraph>
            </div>
          </div>
        </div>

        <div className="numbers">
          <div className="numbers-item">
            <Heading1 as="h2" className="numbers-item-title">
              1000
            </Heading1>
            <Heading3 as="p" className="numbers-item-text">varselbrev</Heading3>
          </div>
          <div className="numbers-item">
            <Heading1 as="h2" className="numbers-item-title">
              1000
            </Heading1>
            <Heading3 as="p" className="numbers-item-text">dokumenterte elevsamtaler</Heading3>
          </div>
          <div className="numbers-item">
            <Heading1 as="h2" className="numbers-item-title">
              1000
            </Heading1>
            <Heading3 as="p" className="numbers-item-text">lokale læreplaner arkivert</Heading3>
          </div>
          <div className="numbers-item">
            <Heading1 as="h2" className="numbers-item-title">
              1000
            </Heading1>
            <Heading3 as="p" className="numbers-item-text">notater til elevmappa</Heading3>
          </div>
          <div className="numbers-item">
            <Heading1 as="h2" className="numbers-item-title">
              1000
            </Heading1>
            <Heading3 as="p" className="numbers-item-text">utplasseringer</Heading3>
          </div>
          <div className="numbers-item">
            <Heading1 as="h2" className="numbers-item-title">
              1000
            </Heading1>
            <Heading3 as="p" className="numbers-item-text">tilbakemeldinger</Heading3>
          </div>
        </div>

        <div className="activity-panel">
          <Heading3 as="h2" className="panel-title">
            <Icon name="activity" size="small" /> Varsler
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


        <div className="activity-panel">
          <Heading3 as="h2" className="panel-title">
            <Icon name="activity" size="small" /> Samtaler
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