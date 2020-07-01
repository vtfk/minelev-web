import React from "react"

import { DefaultLayout } from "../../layouts/Default"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { Heading2, Paragraph, Link } from "../../_lib-components/Typography"

import "./styles.scss"

export function Classes() {
  let classes = DEMO_DATA.CLASSES

  return (
    <DefaultLayout>
      <div className="classes">
        
        <Heading2 className="page-title">Klasser</Heading2>

        <table className="data-actions-table">
            <thead>
              <tr>
                <th><Paragraph size="small">Klasse</Paragraph></th>
                <th><Paragraph size="small">Skole</Paragraph></th>
              </tr>
            </thead>
            <tbody>
              {
                classes.map(function(schoolClass, index) {
                  return (
                    <tr key={ schoolClass.id }>
                      <td>
                        <Paragraph>
                          <Link href={ `/${ROUTES.classes}/${schoolClass.id}` }>{ schoolClass.className }</Link>
                        </Paragraph>
                      </td>
                      <td>
                        <Paragraph>{ schoolClass.schoolName }</Paragraph>
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