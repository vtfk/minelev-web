import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export function RadioButton ({ name, value, onChange, label, ...props }) {
  return (
    <div className={`radio-button`} {...props}>
      <div className="radio-button-inner">
        <div className="radio-wrapper">
          <input id={`radio-${name}-${value}`} type="radio" name={name} value={value} onChange={(e) => { onChange(e.target.value) }} />
          <div className="radio"></div>
        </div>
        <label for={`radio-${name}-${value}`}>{label}</label>
      </div>
    </div>
  )
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
