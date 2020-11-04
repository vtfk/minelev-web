import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '../../lib/auth-provider'

import { Heading1, Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { Icon } from '../../_lib-components/Icon'

import './styles.scss'

export function Class ({ match, ...props }) {
  let { id } = match.params
  id = id ? id.replace('/', '+') : ''

  const [schoolClass, setSchoolClass] = useState({})
  const { apiGet, apiPost, apiPut } = useSession()

  useEffect(() => {
    async function getClass() {
      const c = await apiGet(API.URL + '/classes/' + id)
      setSchoolClass(c.data);
    }
    getClass();
  }, [])

  const activities = [] // <--- needs to be populated

  return (
    <DefaultLayout>
      <div className='class'>

        <Link className='back-link' href={`/${ROUTES.students}`} noStyle leftIcon={<Icon name='arrowLeft' size='xsmall' />}>Til klasseoversikten</Link>

        {
          schoolClass &&
          schoolClass.id &&
          <div>
            <div className='class-information'>
              <div className='class-shortname'>
                [X]
              </div>
              <div className='text-wrapper'>
                <Heading3 className='name'>
                  {schoolClass.name}
                </Heading3>
                <div className='other'>
                  <Paragraph>{schoolClass.schoolName}</Paragraph>
                </div>
              </div>
            </div>

            <div className='numbers'>
              <div className='numbers-item'>
                <Heading1 as='h2' className='numbers-item-title'>
                  [X]
                </Heading1>
                <Heading3 as='p' className='numbers-item-text'>varselbrev</Heading3>
              </div>
              <div className='numbers-item'>
                <Heading1 as='h2' className='numbers-item-title'>
                  [X]
                </Heading1>
                <Heading3 as='p' className='numbers-item-text'>dokumenterte elevsamtaler</Heading3>
              </div>
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
                <Heading3 as='p' className='numbers-item-text'>notater til elevmappa</Heading3>
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
            </div>

            <div className='activity-panel'>
              <Heading3 as='h2' className='panel-title'>
                <Icon name='activity' size='small' /> Varsler
              </Heading3>

              <table className='activity-panel-table'>
                <tbody>
                  {
                    activities.map(function (activity, index) {
                      return (
                        <tr key={activity.id}>
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
                              <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 1' />
                              <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 2' />
                              <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 3' />
                            </IconDropdownNav>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>

            <div className='activity-panel'>
              <Heading3 as='h2' className='panel-title'>
                <Icon name='activity' size='small' /> Samtaler
              </Heading3>

              <table className='activity-panel-table'>
                <tbody>
                  {
                    activities.map(function (activity, index) {
                      return (
                        <tr key={activity.id}>
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
                              <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 1' />
                              <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 2' />
                              <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Element 3' />
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
        }
        </div>
    </DefaultLayout>
  )
}
