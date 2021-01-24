import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../Typography'
import { Icon } from '../Icon'
import { Spinner } from '../Spinner'

import './styles.scss'

export function Button ({ className, type, spinner, disabled, children, ...props }) {
  return (
    <button
      className={`button button-${type || 'primary'} ${className}`}
      disabled={disabled || spinner || false}
      {...props}
    >
      {spinner ? <Spinner /> : children}
    </button>
  )
}

export function IconButtonLink ({ className, type, icon, children, ...props }) {
  return (
    <Link
      className={`icon-button-link ${type ? `icon-button-link-${type}` : ''} ${className}`}
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
  disabled: PropTypes.bool,
  spinner: PropTypes.bool,
  children: PropTypes.string.isRequired
}

IconButtonLink.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
