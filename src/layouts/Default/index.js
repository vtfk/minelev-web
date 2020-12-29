import React, { useRef, useState } from 'react'
import { useSession } from '@vtfk/react-msal'

import {
  useLocation,
  Link
} from 'react-router-dom'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { ROUTES } from '../../config/constants'

import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { SideNav, SideNavItem } from '../../_lib-components/SideNav'
import { SearchField } from '../../_lib-components/SearchField'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Paragraph } from '../../_lib-components/Typography'
import { IconDropdownNav, IconDropdownNavItem } from '../../_lib-components/IconDropdownNav'
import { Icon } from '../../_lib-components/Icon'
import { Logo } from '../../_lib-components/Logo'

import './styles.scss'

export function DefaultLayout (props) {
  const { user, logout } = useSession()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState(new URLSearchParams(location.search).get('s'))
  const [openTopNavSide, setOpenTopNavSide] = useState(false)
  const [scrollLock, setScrollLock] = useState(false)
  const searchFieldRef = useRef()

  function clickTopNavToggle () {
    const newIsOpen = !openTopNavSide
    setOpenTopNavSide(newIsOpen)

    if (newIsOpen && window.innerWidth <= 1000) {
      setScrollLock(true)
    } else {
      setScrollLock(false)
    }

    return newIsOpen
  }

  function clickTopNavToggleSearch () {
    const opened = clickTopNavToggle()
    if (opened && searchFieldRef.current) setTimeout(() => searchFieldRef.current.focus(), 0)
  }

  function clickContainer () {
    if (openTopNavSide) {
      setOpenTopNavSide(false)
    }
  }

  return (
    <div>
      <ReactNotification />

      <div className='default-layout'>
        <SideNav title='MinElev'>
          <SideNavItem icon={<Icon name='home' />} active={location.pathname === '/'} href='/' title='Forside' />
          <SideNavItem icon={<Icon name='activity' />} active={location.pathname === `/${ROUTES.activityLog}`} href={`/${ROUTES.activityLog}`} title='Aktivitetslogg' />
          <SideNavItem icon={<Icon name='students' />} active={location.pathname === `/${ROUTES.students}`} href={`/${ROUTES.students}`} title='Elever' />
          <SideNavItem icon={<Icon name='classes' />} active={location.pathname === `/${ROUTES.classes}`} href={`/${ROUTES.classes}`} title='Klasser' />
          <SideNavItem icon={<Icon name='statistics' />} active={location.pathname === `/${ROUTES.statistics}`} href={`/${ROUTES.statistics}`} title='Statistikk' />
          <SideNavItem icon={<Icon name='help' />} active={location.pathname === `/${ROUTES.help}`} href={`/${ROUTES.help}`} title='Hjelp' />
        </SideNav>

        {/* TODO: To lib component when desktop design is in place */}
        <nav role='navigation' className={`topnav-side ${openTopNavSide ? 'open' : ''}`}>
          <div className='topnav-side-user'>
            <div className='user'>
              <InitialsBadge className='user-image' firstName={user.givenName} lastName={user.surname} />
              <div className='user-name'>
                <Paragraph>{user.displayName}</Paragraph>
              </div>
              <div className='user-menu'>
                <IconDropdownNav>
                  <IconDropdownNavItem onClick={() => logout()} title='Logg ut' />
                </IconDropdownNav>
              </div>
            </div>

            <button aria-label='Lukk meny' title='Lukk menyen' className='topnav-side-top-close' onClick={clickTopNavToggle}>
              <Icon name='close' size='xsmall' />
            </button>
          </div>

          <div className='topnav-side-search'>
            <div className='search'>
              <SearchField
                className='search-input'
                type='text' placeholder='Søk etter elev ...'
                onChange={(event) => { setSearchTerm(event.target.value) }}
                value={searchTerm || ''}
                inputRef={searchFieldRef}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    window.location.replace(`/${ROUTES.students}?s=${event.target.value}`)
                  }
                }}
              />
            </div>
          </div>

          <TouchScrollable>
            <div className='topnav-side-list'>
              <div className='topnav-side-list-inner'>
                <Link className={`topnav-side-list-item ${location.pathname === '/' ? 'active' : ''}`} to='/'>
                  <div className='topnav-side-list-item-icon'><Icon size='medium' name='home' /></div>
                  <div className='topnav-side-list-item-text'>Forside</div>
                </Link>
                <Link className={`topnav-side-list-item ${location.pathname === '/' + ROUTES.activityLog ? 'active' : ''}`} to={`/${ROUTES.activityLog}`}>
                  <div className='topnav-side-list-item-icon'><Icon size='medium' name='activity' /></div>
                  <div className='topnav-side-list-item-text'>Aktivitetslogg</div>
                </Link>
                <Link className={`topnav-side-list-item ${location.pathname === '/' + ROUTES.students ? 'active' : ''}`} to={`/${ROUTES.students}`}>
                  <div className='topnav-side-list-item-icon'><Icon size='medium' name='students' /></div>
                  <div className='topnav-side-list-item-text'>Elever</div>
                </Link>
                <Link className={`topnav-side-list-item ${location.pathname === '/' + ROUTES.classes ? 'active' : ''}`} to={`/${ROUTES.classes}`}>
                  <div className='topnav-side-list-item-icon'><Icon size='medium' name='classes' /></div>
                  <div className='topnav-side-list-item-text'>Klasser</div>
                </Link>
                <Link className={`topnav-side-list-item ${location.pathname === '/' + ROUTES.statistics ? 'active' : ''}`} to={`/${ROUTES.statistics}`}>
                  <div className='topnav-side-list-item-icon'><Icon size='medium' name='statistics' /></div>
                  <div className='topnav-side-list-item-text'>Statistikk</div>
                </Link>
                <Link className={`topnav-side-list-item ${location.pathname === '/' + ROUTES.help ? 'active' : ''}`} to={`/${ROUTES.help}`}>
                  <div className='topnav-side-list-item-icon'><Icon size='medium' name='help' /></div>
                  <div className='topnav-side-list-item-text'>Hjelp</div>
                </Link>
              </div>
            </div>
          </TouchScrollable>
        </nav>

        <div className='container' onClick={() => { clickContainer() }}>
          <header className='topnav'>
            <a href='/' className='topnav-brand'>
              <div className='brand-logo' aria-hidden>
                <Logo />
              </div>
              <div className='brand-name'>
                MinElev
              </div>
            </a>
            <div className='topnav-toggles'>
              <button aria-label='Søk etter elev' title='Søk etter elev' onClick={clickTopNavToggleSearch}>
                <Icon size='small' name='search' />
              </button>
              <button aria-label='Åpne meny' title='Åpne menyen' onClick={clickTopNavToggle}>
                <Icon size='small' name='menu' />
              </button>
            </div>
          </header>

          <div className='action-bar'>
            <div className='search'>
              <SearchField
                className='search-input'
                type='text' placeholder='Søk etter elev ...'
                onChange={(event) => { setSearchTerm(event.target.value) }}
                value={searchTerm || ''}
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
                  <IconDropdownNavItem onClick={() => logout()} title='Logg ut' />
                </IconDropdownNav>
              </div>
            </div>
          </div>

          <ScrollLock isActive={scrollLock}>
            <div>{props.children}</div>
          </ScrollLock>
        </div>
      </div>
    </div>
  )
}
