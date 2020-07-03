import React from "react"

import {
  useLocation,
} from "react-router-dom"

import { ROUTES } from "../../config/constants"
import * as DEMO_DATA from "../../config/demo-data"

import { SideNav } from "../../_lib-components/SideNav"
import { SideNavItem } from"../../_lib-components/SideNavItem"
import { SearchField } from"../../_lib-components/TextField"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { Paragraph } from "../../_lib-components/Typography"
import { IconDropdownNav } from "../../_lib-components/IconDropdownNav"
import { IconDropdownNavItem } from "../../_lib-components/IconDropdownNavItem"
import { Icon } from '../../_lib-components/Icon'

import "./styles.scss"

export function DefaultLayout({ children }) {   
  let location = useLocation();

  let currentUser = DEMO_DATA.CURRENT_USER

  return (
    <div className="default-layout">
      <SideNav title="MinElev">
        <SideNavItem icon={ <Icon name="home" />  } active={ location.pathname === '/' ? true : false } href="/" title="Forside" />
        <SideNavItem icon={ <Icon name="activity" />  } active={ location.pathname === `/${ ROUTES.activityLog }` ? true : false } href={ `/${ ROUTES.activityLog }` } title="Aktivitetslogg" />
        <SideNavItem icon={ <Icon name="students" />  } active={ location.pathname === `/${ ROUTES.students }` ? true : false } href={ `/${ ROUTES.students }` } title="Elever" />
        <SideNavItem icon={ <Icon name="classes" />  } active={ location.pathname === `/${ ROUTES.classes }` ? true : false } href={ `/${ ROUTES.classes }` } title="Klasser" />
        <SideNavItem icon={ <Icon name="statistics" />  } active={ location.pathname === `/${ ROUTES.statistics }` ? true : false } href={ `/${ ROUTES.statistics }` } title="Statistikk" />
        <SideNavItem icon={ <Icon name="help" />  } active={ location.pathname === `/${ ROUTES.help }` ? true : false } href={ `/${ ROUTES.help }` } title="Hjelp" />
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