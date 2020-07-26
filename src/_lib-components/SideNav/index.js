import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import logoBadge from './logo-badge.svg'

import "./styles.scss"

export function SideNav({ title, ...props}) {
  return (
    <Fragment>
      <nav className="sidenav" {...props}>
        <div className="brand">
          <div className="brand-logo">
            <img src={ logoBadge } alt="VTFK logo" />
          </div>
          <div className="brand-name">
            { title }
          </div>
        </div>
        <div className="sidenav-list-wrapper">
          <ul className="sidenav-list">
            { props.children }
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export function SideNavItem({ href, icon, title, active, ...props }) {
  return (
    <li className={ `sidenav-item ${ active === true ? 'active' : '' }` } { ...props }>
      <a href={href}>
        <div className="sidenav-item-icon">
          { icon }
        </div>
        <div className="sidenav-item-text">{title}</div>
      </a>
    </li>
  )
}

SideNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

SideNavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
}