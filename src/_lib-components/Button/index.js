import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export function Button ({ className, type, children, ...props }) {
  return (
    <button className={`button button-${type} ${className}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
}
