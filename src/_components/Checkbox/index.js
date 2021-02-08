import React from 'react'
import PropTypes from 'prop-types'

import iconCheck from './icon-check.svg'

import './styles.scss'

export function Checkbox ({ name, value, label, onChange, ...props }) {
  return (
    <div className='checkbox' {...props}>
      <div className='checkbox-inner'>
        <div className='check-wrapper'>
          <input id={`check-${name}-${value}`} type='checkbox' name={name} value={value} onChange={onChange} {...props} tabIndex='0' />
          <div className='check'>
            <img src={iconCheck} alt='item checked' />
          </div>
        </div>
        <label htmlFor={`check-${name}-${value}`}>{label}</label>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired
}
