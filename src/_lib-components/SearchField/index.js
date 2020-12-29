import React from 'react'
import PropTypes from 'prop-types'

import iconSearch from './icon-search.svg'

import './styles.scss'

export function SearchField ({ type, className, placeholder, value, disabled, inputRef, ...props }) {
  return (
    <div className='search-field'>
      <input
        type={type || 'text'}
        disabled={disabled || false}
        placeholder={placeholder || ''}
        value={value}
        className={`text-field text-field-search ${className || ''}`}
        ref={inputRef}
        {...props}
      />

      <div className='icon'>
        <img src={iconSearch} alt='' />
      </div>
    </div>
  )
}

SearchField.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool
}
