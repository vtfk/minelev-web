import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export function SkeletonLoader ({ variant = 'text', width, height, className, style, title, ...props }) {
  
  return (
    <span 
      className={`skeleton-loader ${variant || ''} ${props.children ? `with-children ${!height ? 'auto-height' : ''} ${!width ? 'auto-width' : ''}` : ''} ${className || ''}`} 
      style={{width, height, ...style}} 
      title={title || 'Laster inn...'}
      {...props} 
    />
  )
}

SkeletonLoader.propTypes = {
  variant: PropTypes.oneOf(['text', 'circle', 'rectangle']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.any
}
