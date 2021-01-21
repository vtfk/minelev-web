import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export function SkeletonLoader ({ size, ...props }) {
  return (
    <div className={ `skeleton-loader ${size ? size : ''}` } {...props}></div>
  )
}

SkeletonLoader.propTypes = {
  size: PropTypes.string
}
