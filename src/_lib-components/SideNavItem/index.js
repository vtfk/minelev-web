import React from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

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

SideNavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
}