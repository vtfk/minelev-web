import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export function SkeletonLoader ({ size, ...props }) {
  return (
    <div className={`skeleton-loader ${size || ''}`} {...props} />
  )
}

SkeletonLoader.propTypes = {
  size: PropTypes.string
}
