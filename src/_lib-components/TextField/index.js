import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import { nanoid } from 'nanoid'

export function TextField ({ type, className, placeholder, label, value, id, disabled, rows, rounded, onFocus, onBlur, inputRef, ...props }) {
  const [focusState, setFocusState] = useState(false)
  const [labelId] = useState(id || nanoid())

  const handleFocus = (event) => {
    setFocusState(true)
    if (onFocus && typeof onFocus === 'function') onFocus(event)
  }

  const handleBlur = (event) => {
    setFocusState(false)
    if (onBlur && typeof onBlur === 'function') onBlur(event)
  }

  return (
    <div className={`
      ${rounded ? 'rounded-input' : 'text-field'}
      ${className || ''} 
      ${type || 'text'} 
      ${focusState ? 'focused' : ''}
    `}
    >
      {
        value !== '' && !rounded &&
          <label htmlFor={labelId} className='placeholder-label'>
            {label || placeholder}
          </label>
      }

      {
        rows &&
          <textarea
            id={labelId}
            type={type || 'text'}
            disabled={disabled || false}
            placeholder={placeholder || ''}
            rows={rows}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            ref={inputRef}
            {...props}
          />
      }

      {
        !rows &&
          <input
            id={labelId}
            type={type || 'text'}
            disabled={disabled || false}
            placeholder={placeholder || ''}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            ref={inputRef}
            {...props}
          />
      }
    </div>
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  rounded: PropTypes.bool
}
