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

export function StatisticsProgress ({ className, name, value, maxValue }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td className='statistics-progress'>
        <div
          className={className || 'statistics-progressbar'}
          style={{ maxWidth: (100 * parseInt(value) / maxValue) + '%' }} />
      </td>
    </tr>
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

StatisticsProgress.propTypes = {
  className: PropTypes.string,
  maxValue: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

StatisticsProgress.defaultProps = {
  maxValue: 100,
  value: 0
}
