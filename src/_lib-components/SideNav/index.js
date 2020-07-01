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

SideNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}