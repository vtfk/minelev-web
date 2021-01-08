import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../Typography'
import { Icon } from '../Icon'

import './styles.scss'

export function Button ({ className, type, children, ...props }) {
  return (
    <button className={`button button-${type} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function IconButtonLink ({ className, type, icon, children, ...props }) {
  return (
    <Link
      className={`icon-button-link icon-button-link-${type} ${className}`}
      {...props}
    >
      <div className='icon-button-link-icon'>
        <Icon name={icon} size='small' />
      </div>
      <div className='icon-button-link-text'>
        {children}
      </div>
    </Link>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired
}

IconButtonLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
