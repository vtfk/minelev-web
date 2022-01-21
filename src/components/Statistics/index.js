import React from 'react'
import PropTypes from 'prop-types'

import { Heading1, Heading3 } from '@vtfk/components'

import './styles.scss'

export function StatisticsCard ({ className, title, ...props }) {
  return (
    <div className={className || 'statistics-card'}>
      <Heading1 as='h2' className='statistics-card-title'>
        {props.children}
      </Heading1>
      <Heading3 as='p' className='statistics-card-text'>{title}</Heading3>
    </div>
  )
}

export function StatisticsGroup ({ className, ...props }) {
  return (
    <div className={className || 'statistics-group'}>
      {props.children}
    </div>
  )
}


StatisticsCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

StatisticsGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
}
