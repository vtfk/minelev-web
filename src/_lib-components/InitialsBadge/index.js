import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export function InitialsBadge ({ firstName, lastName, className, size, ...props }) {
  let colorClass = 'peppermint'

  if (lastName && lastName.charAt(0) < 'K') {
    colorClass = 'swansDown'
  } else if (lastName && lastName.charAt(0) < 'P') {
    colorClass = 'potPourri'
  }

  return (
    <div className={`initials-badge ${colorClass} ${className || ''} ${size || ''}`} aria-hidden {...props}>
      {firstName && firstName.charAt(0)} {lastName && lastName.charAt(0)}
    </div>
  )
}

InitialsBadge.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string
}
