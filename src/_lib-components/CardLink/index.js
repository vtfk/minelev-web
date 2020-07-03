import React from "react"
import PropTypes from 'prop-types'

import icon from './icon-arrow-right-short.svg'

import "./styles.scss"

export function CardLink({ href, onClick, className, children, ...props }) {
  return (
    <a href={href ? href : null} onClick={ onClick ? onClick : null } className={ `card-link ${className ? className : ''}` } { ...props }>
      <div className="card-link-text">{ children }</div>
      <span className="card-link-icon">
        <img src={ icon } alt=""/>
      </span>
    </a>
  )
}

CardLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}