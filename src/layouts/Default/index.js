import React from "react"

import {
  useLocation,
} from "react-router-dom"

import { ROUTES } from "../../config/constants"

import { SideNav } from "../../_lib-components/SideNav"
import { SideNavItem } from"../../_lib-components/SideNavItem"
import { SearchField } from"../../_lib-components/TextField"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { Paragraph } from "../../_lib-components/Typography"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"

import "./styles.scss"

export function DefaultLayout({ children }) {   
  let location = useLocation();

  let currentUser = {
    firstName: 'Charlotte',
    lastName: 'Testine',
  }

  return (
    <div className="default-layout">
      <SideNav title="MinElev">
        <SideNavItem active={ location.pathname === '/' ? true : false } href="/" title="Forside" />
        <SideNavItem active={ location.pathname === `/${ ROUTES.activityLog }` ? true : false } href={ `/${ ROUTES.activityLog }` } title="Aktivitetslogg" />
        <SideNavItem active={ location.pathname === `/${ ROUTES.classReports }` ? true : false } href={ `/${ ROUTES.classReports }` } title="Klasserapporter" />
        <SideNavItem active={ location.pathname === `/${ ROUTES.statistics }` ? true : false } href={ `/${ ROUTES.statistics }` } title="Statistikk" />
        <SideNavItem active={ location.pathname === `/${ ROUTES.help }` ? true : false } href={ `/${ ROUTES.help }` } title="Hjelp" />
      </SideNav>

      <div className="container">
        <div className="action-bar">
          <div className="search">
            <SearchField className="search-input" type="text" placeholder="Søk etter elev ..." />
          </div>

          <div className="user">
            <div className="user-name">
              <Paragraph>{ currentUser.firstName } { currentUser.lastName }</Paragraph>
            </div>
            <InitialsBadge className="user-image" firstName={currentUser.firstName} lastName={currentUser.lastName} />
            <div className="user-menu">
              <IconDropdownNav>
                <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Element 1" />
                <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Element 2" />
                <IconDropdownNavItem onClick={ () => { alert('Ikke implementert') } } title="Element 3" />
              </IconDropdownNav>
            </div>
          </div>
        </div>

        { children }
      </div>
    </div>
  ); 
} 