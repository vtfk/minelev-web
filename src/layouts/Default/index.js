import React, { useState } from 'react'
import { useSession } from '../../lib/auth-provider'

import {
  useLocation
} from 'react-router-dom'

import { ROUTES } from '../../config/constants'

import { SideNav, SideNavItem } from '../../_lib-components/SideNav'
import { SearchField } from '../../_lib-components/SearchField'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Paragraph } from '../../_lib-components/Typography'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { Icon } from '../../_lib-components/Icon'

import './styles.scss'

export function DefaultLayout (props) {
  const { user, logout } = useSession()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState(new URLSearchParams(location.search).get('s'))

  return (
    <div className='default-layout'>
      <SideNav title='MinElev'>
        <SideNavItem icon={<Icon name='home' />} active={location.pathname === '/'} href='/' title='Forside' />
        <SideNavItem icon={<Icon name='activity' />} active={location.pathname === `/${ROUTES.activityLog}`} href={`/${ROUTES.activityLog}`} title='Aktivitetslogg' />
        <SideNavItem icon={<Icon name='students' />} active={location.pathname === `/${ROUTES.students}`} href={`/${ROUTES.students}`} title='Elever' />
        <SideNavItem icon={<Icon name='classes' />} active={location.pathname === `/${ROUTES.classes}`} href={`/${ROUTES.classes}`} title='Klasser' />
        <SideNavItem icon={<Icon name='statistics' />} active={location.pathname === `/${ROUTES.statistics}`} href={`/${ROUTES.statistics}`} title='Statistikk' />
        <SideNavItem icon={<Icon name='help' />} active={location.pathname === `/${ROUTES.help}`} href={`/${ROUTES.help}`} title='Hjelp' />
      </SideNav>

      <div className='container'>
        <div className='action-bar'>
          <div className='search'>
            <SearchField
              className='search-input'
              type='text' placeholder='Søk etter elev ...'
              onChange={(event) => { setSearchTerm(event.target.value) }}
              value={searchTerm}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  window.location.replace(`/${ROUTES.students}?s=${event.target.value}`)
                }
              }}
            />
          </div>

          <div className='user'>
            <div className='user-name'>
              <Paragraph>{user.displayName}</Paragraph>
            </div>
            <InitialsBadge className='user-image' firstName={user.givenName} lastName={user.surname} />
            <div className='user-menu'>
              <IconDropdownNav>
                <IconDropdownNavItem onClick={() => { window.alert('Ikke implementert') }} title='Min konto' />
                <IconDropdownNavItem onClick={() => logout()} title='Logg ut' />
              </IconDropdownNav>
            </div>
          </div>
        </div>

        {props.children}
      </div>
    </div>
  )
}
