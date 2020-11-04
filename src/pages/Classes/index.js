import React, { useState, useEffect } from 'react'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '../../lib/auth-provider'

import { Heading2, Paragraph, Link } from '../../_lib-components/Typography'

import './styles.scss'

export function Classes () {
  const [classes, setClasses] = useState([])
  const { apiGet, apiPost, apiPut } = useSession()

  useEffect(() => {
    async function getClasses() {
      const c = await apiGet(API.URL + '/classes')
      setClasses(c.data);
    }
    getClasses();
  }, [])

  return (
    <DefaultLayout>
      <div className='classes'>

        <Heading2 className='page-title'>Klasser</Heading2>

        <table className='data-actions-table'>
          <thead>
            <tr>
              <th><Paragraph size='small'>Klasse</Paragraph></th>
              <th><Paragraph size='small'>Skole</Paragraph></th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map(function (schoolClass, index) {
                return (
                  <tr key={schoolClass.id}>
                    <td>
                      <Paragraph>
                        <Link href={`/${ROUTES.classes}/${encodeURI(schoolClass.id).replace('/', '+')}`}>{schoolClass.name}</Link>
                      </Paragraph>
                    </td>
                    <td>
                      <Paragraph>{schoolClass.schoolName}</Paragraph>
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
