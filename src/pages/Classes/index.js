import React, { useState, useEffect } from 'react'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading2, Paragraph, Link, ErrorMessage } from '../../_lib-components/Typography'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

import './styles.scss'

export function Classes () {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { apiGet } = useSession()

  useEffect(() => {
    async function getClasses () {
      const c = await apiGet(API.URL + '/classes')
      setLoading(false)

      if (c === false) setError('Det skjedde noe galt under innhenting av klassene dine...')
      if (c && c.data) setClasses(c.data)
    }

    getClasses()
  }, [])

  return (
    <DefaultLayout>
      <div className='classes'>

        <Heading2 className='page-title'>Klasser</Heading2>

        {
          error &&
            <ErrorMessage>{error}</ErrorMessage>
        }
        {
          !error &&
          (loading || (classes && classes.length > 0)) &&
            <table className='data-actions-table'>
              <thead>
                <tr>
                  <th><Paragraph size='small'>Klasse</Paragraph></th>
                  <th><Paragraph size='small'>Type / fag</Paragraph></th>
                  <th><Paragraph size='small'>Skole</Paragraph></th>
                </tr>
              </thead>
              <tbody>
                {
                loading &&
                Array(4).fill().map(function (i) {
                  return (
                    <tr key={i}>
                      <td><SkeletonLoader /></td>
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
                        <Paragraph>{schoolClass.grep ? schoolClass.grep.kortform.nb : (schoolClass.type ? schoolClass.type.charAt(0).toUpperCase() + schoolClass.type.slice(1) : 'Gruppe')}</Paragraph>
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
        }
        {
          !loading &&
          classes &&
          classes.length === 0 &&
            <Paragraph>
              Du har ikke tilgang til noen klasser. Kontakt Extensansvarlig.
            </Paragraph>
        }
      </div>
    </DefaultLayout>
  )
}
