import React from 'react'

import { DefaultLayout } from '../../layouts/Default'

import { Heading1, Heading2, Heading3 } from '../../_lib-components/Typography'

import './styles.scss'

export function Statistics () {
  const warningsCount = 6000
  const followupsCount = 5000

  const warningsBySchool = [
    {
      id: 1,
      schoolName: 'Skogmo videregående skole',
      count: 2500
    },
    {
      id: 2,
      schoolName: 'Porsgrunn videregående skole',
      count: 2000
    },
    {
      id: 3,
      schoolName: 'Hjalmar Johansen videregående skole',
      count: 1500
    }
  ]

  const followupsBySchool = [
    {
      id: 1,
      schoolName: 'Skogmo videregående skole',
      count: 2900
    },
    {
      id: 2,
      schoolName: 'Porsgrunn videregående skole',
      count: 1700
    },
    {
      id: 3,
      schoolName: 'Hjalmar Johansen videregående skole',
      count: 400
    }
  ]

  return (
    <DefaultLayout>
      <div className='statistics'>

        <Heading2 as='h1' className='page-title'>
          Statistikk
        </Heading2>

        <div className='numbers'>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              1000
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>varselbrev</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              1000
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>dokumenterte elevsamtaler</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              1000
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>lokale læreplaner arkivert</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              1000
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>notater til elevmappa</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              1000
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>utplasseringer</Heading3>
          </div>
          <div className='numbers-item'>
            <Heading1 as='h2' className='numbers-item-title'>
              1000
            </Heading1>
            <Heading3 as='p' className='numbers-item-text'>tilbakemeldinger</Heading3>
          </div>
        </div>

        <div className='stats-collapse'>
          <Heading3 as='h2' className='stats-collapse-title'>
            Varsler fordelt pr skole
          </Heading3>

          <div className='stats-collapse-table'>
            <table>
              <tbody>
                {
                  warningsBySchool.map(function (item, index) {
                    return (
                      <tr key={index}>
                        <td>{item.schoolName}</td>
                        <td>{item.count}</td>
                        <td className='stats-collapse-table-progress'>
                          <div
                            className='stats-collapse-table-progressbar'
                            style={{ width: (100 * parseInt(item.count) / warningsCount) + '%' }}
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
            Samtaler fordelt pr skole
          </Heading3>

          <div className='stats-collapse-table'>
            <table>
              <tbody>
                {
                  followupsBySchool.map(function (item, index) {
                    return (
                      <tr key={index}>
                        <td>{item.schoolName}</td>
                        <td>{item.count}</td>
                        <td className='stats-collapse-table-progress'>
                          <div
                            className='stats-collapse-table-progressbar'
                            style={{ width: (100 * parseInt(item.count) / followupsCount) + '%' }}
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
