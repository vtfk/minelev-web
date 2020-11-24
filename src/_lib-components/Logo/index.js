import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as LogoIcon } from './logo.svg'

export function Logo ({ className }) {
  return (
    <span className={className}>
      <LogoIcon />
    </span>
  )
}

Logo.propTypes = {
  className: PropTypes.string
}
