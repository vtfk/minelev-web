import React, { useEffect, useState } from 'react'
import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { Heading1, Heading2, Heading3 } from '../../_lib-components/Typography'

import './styles.scss'
import { API } from '../../config/app'

export function Statistics () {
  const [typeStats, setTypeStats] = useState([])
  const [schoolStats, setSchoolStats] = useState([])

  const { apiGet } = useSession()

  async function getAPITypeStats () {
    const typeStats = await apiGet(API.URL + '/stats/type')
    setTypeStats(typeStats)
  }

  async function getAPISchoolStats () {
    const schoolStats = await apiGet(API.URL + '/stats/type/school')
    setSchoolStats(schoolStats)
  }

  function getTypeStats (type) {
    if (!typeStats) return 0
    const typeStat = typeStats.filter(stats => stats.type === type)
    return typeStat.length > 0 ? typeStat[0].count : 0
  }

  function getSchools (type) {
    if (!schoolStats) return []
    const typeSchools = schoolStats.filter(stats => stats.type === type)
    return typeSchools.length > 0 ? typeSchools[0].schools.sort((a, b) => a.count < b.count ? 1 : -1) : []
  }

  useEffect(() => {
    getAPITypeStats()
    getAPISchoolStats()
  }, [])

  return (
    <DefaultLayout>
      <div className='statistics'>

        <Heading2 as='h1' className='page-title'>
          Statistikk
        </Heading2>

        <div className='numbers'>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              {getTypeStats('varsel')}
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>varselbrev</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              {getTypeStats('samtale')}
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>dokumenterte elevsamtaler</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              {getTypeStats('notat')}
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>notater til elevmappa</Heading3>
          </div>
          {/*
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              [X]
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>lokale læreplaner arkivert</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              [X]
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>utplasseringer</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              [X]
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>tilbakemeldinger</Heading3>
          </div>
           */}
        </div>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Varsler fordelt pr. skole
          </Heading3>

          <div className='stats-collapse-table'>
            <table>
              <tbody>
                {
                  getSchools('varsel').map(function (item, index) {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td className='stats-collapse-table-progress'>
                          <div
                            className='stats-collapse-table-progressbar'
                            style={{ maxWidth: (100 * parseInt(item.count) / getTypeStats('varsel')) + '%' }}
                          />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Samtaler fordelt pr. skole
          </Heading3>

          <div className='stats-collapse-table'>
            <table>
              <tbody>
                {
                  getSchools('samtale').map(function (item, index) {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td className='stats-collapse-table-progress'>
                          <div
                            className='stats-collapse-table-progressbar'
                            style={{ maxWidth: (100 * parseInt(item.count) / getTypeStats('samtale')) + '%' }}
                          />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Notater fordelt pr. skole
          </Heading3>

          <div className='stats-collapse-table'>
            <table>
              <tbody>
                {
                  getSchools('notat').map(function (item, index) {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td className='stats-collapse-table-progress'>
                          <div
                            className='stats-collapse-table-progressbar'
                            style={{ maxWidth: (100 * parseInt(item.count) / getTypeStats('notat')) + '%' }}
                          />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </DefaultLayout>
  )
}
