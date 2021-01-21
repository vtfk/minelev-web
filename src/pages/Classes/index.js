import React, { useState, useEffect } from 'react'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading2, Paragraph, Link } from '../../_lib-components/Typography'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

import './styles.scss'

export function Classes () {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const { apiGet } = useSession()

  useEffect(() => {
    async function getClasses () {
      const c = await apiGet(API.URL + '/classes')
      setClasses(c.data)
    }
    getClasses()

    setLoading(false)
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
              loading &&
              Array(5).fill().map(function() {
                return (
                  <tr>
                    <td><SkeletonLoader /></td>
                    <td><SkeletonLoader /></td>
                  </tr>
                )
              })
            }

            {
              !loading &&
              classes.map(function (schoolClass, index) {
                return (
                  <tr key={schoolClass.id}>
                    <td>
                      <Paragraph>
                        <Link href={`/${ROUTES.classes}/${encodeURIComponent(schoolClass.groupId)}`}>{schoolClass.name}</Link>
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
