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

export function StatisticsGroup ({ className, type, ...props }) {
  return (
    <div className={className || (type === 'card' ? 'statistics-card-group' : 'statistics-progressbar-group')}>
      {
        type === 'card' && props.children
      }
      {
        type === 'progress' &&
          <table>
            <tbody>
              {props.children}
            </tbody>
          </table>
      }
    </div>
  )
}

export function StatisticsProgressBar ({ className, name, value, maxValue }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td className='statistics-progressbar'>
        <div
          className={className || 'statistics-progressbar-container'}
          style={{ maxWidth: (100 * parseInt(value) / maxValue) + '%' }}
        />
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
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'card',
    'progress'
  ])
}

StatisticsGroup.defaultProps = {
  type: 'card'
}

StatisticsProgressBar.propTypes = {
  className: PropTypes.string,
  maxValue: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
