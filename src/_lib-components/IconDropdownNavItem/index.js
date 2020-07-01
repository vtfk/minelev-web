import React from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

export function IconDropdownNavItem({ href, onClick, title, ...props }) {
  return (
    <li className="icon-dropdown-nav-item" { ...props }>
      <a href={href ? href : null} onClick={ onClick ? onClick : null }>
        <div className="sidenav-item-icon"></div>
        <div className="sidenav-item-text">{title}</div>
      </a>
    </li>
  )
}

IconDropdownNavItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
}