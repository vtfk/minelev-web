import React, { useEffect, useState } from 'react'
import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { Heading1, Heading2, Heading3 } from '../../_lib-components/Typography'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

import './styles.scss'
import { API } from '../../config/app'

export function Statistics () {
  const [schoolStats, setSchoolStats] = useState([])
  const [loading, setLoading] = useState(true)

  const { apiGet } = useSession()

  async function getAPISchoolStats () {
    const schoolStats = await apiGet(API.URL + '/stats/type/school')
    setSchoolStats(schoolStats)
    setLoading(false)
  }

  function getTypeStats (type) {
    if (!schoolStats) return 0
    const typeStat = schoolStats.filter(stats => stats.type === type)
    return typeStat.length > 0 ? typeStat[0].count : 0
  }

  function getSchools (type) {
    if (!schoolStats) return []
    const typeSchools = schoolStats.filter(stats => stats.type === type)
    return typeSchools.length > 0 ? typeSchools[0].schools.sort((a, b) => a.count < b.count ? 1 : -1) : []
  }

  useEffect(() => {
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
              {
                loading
                  ? <SkeletonLoader randomWidth={[20, 80]} />
                  : getTypeStats('varsel')
              }
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>varselbrev</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              {
                loading
                  ? <SkeletonLoader randomWidth={[20, 80]} />
                  : getTypeStats('samtale')
              }
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>dokumenterte elevsamtaler</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              {
                loading
                  ? <SkeletonLoader randomWidth={[20, 80]} />
                  : getTypeStats('notat')
              }
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
                  loading
                    ? Array(3).fill().map((i) => <tr key={i}><td><SkeletonLoader /></td></tr>)
                    : getSchools('varsel').map(function (item, index) {
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
                  loading
                    ? Array(3).fill().map((i) => <tr key={i}><td><SkeletonLoader /></td></tr>)
                    : getSchools('samtale').map(function (item, index) {
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
                  loading
                    ? Array(3).fill().map((i) => <tr key={i}><td><SkeletonLoader /></td></tr>)
                    : getSchools('notat').map(function (item, index) {
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
