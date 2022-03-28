import React, { useEffect, useState } from 'react'
import { useSession } from '@vtfk/react-msal'

import { DefaultLayout } from '../../layouts/Default'

import { Heading2, Heading3, Skeleton, StatisticsCard, StatisticsGroup, StatisticsProgressBar } from '@vtfk/components'

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

        <StatisticsGroup className='stats-group'>
          <StatisticsCard title='varselbrev' value={ loading ? <Skeleton randomWidth={[20, 80]} /> : getTypeStats('varsel') } />
          <StatisticsCard title='dokumenterte elevsamtaler' value={ loading ? <Skeleton randomWidth={[20, 80]} /> : getTypeStats('samtale') } />
          <StatisticsCard title='notater til elevmappa' value={ loading ? <Skeleton randomWidth={[20, 80]} /> : getTypeStats('notat') } />
          {/*
          <StatisticsCard title='lokale læreplaner arkivert' value='[X]' />
          <StatisticsCard title='utplasseringer' value='[X]' />
          <StatisticsCard title='tilbakemeldinger' value='[X]' />
           */}
        </StatisticsGroup>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Varsler fordelt pr. skole
          </Heading3>

          <StatisticsGroup type='progress'>
            {
              loading
                ? Array(3).fill().map((i) => <tr key={i}><td><Skeleton /></td></tr>)
                : getSchools('varsel').map(function (item, index) {
                  return <StatisticsProgressBar key={index} name={item.name} value={item.count} maxValue={getTypeStats('varsel')} />
                })
            }
          </StatisticsGroup>
        </div>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Samtaler fordelt pr. skole
          </Heading3>

          <StatisticsGroup type='progress'>
            {
              loading
                ? Array(3).fill().map((i) => <tr key={i}><td><Skeleton /></td></tr>)
                : getSchools('samtale').map(function (item, index) {
                  return <StatisticsProgressBar key={index} name={item.name} value={item.count} maxValue={getTypeStats('samtale')} />
                })
            }
          </StatisticsGroup>
        </div>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Notater fordelt pr. skole
          </Heading3>

          <StatisticsGroup type='progress'>
            {
              loading
                ? Array(3).fill().map((i) => <tr key={i}><td><Skeleton /></td></tr>)
                : getSchools('notat').map(function (item, index) {
                  return <StatisticsProgressBar key={index} name={item.name} value={item.count} maxValue={getTypeStats('notat')} />
                })
            }
          </StatisticsGroup>
        </div>

      </div>

    </DefaultLayout>
  )
}
