import React from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

export function TextField({ type, className, placeholder, value, disabled, ...props }) {
  return (
    <input 
      type={ type ? type : 'text' }
      placeholder={ placeholder ? placeholder : '' } 
      className={ `text-field ${className ? className : ''}` } 
      { ...props }
    />
  )
}

export function SearchField({ type, className, placeholder, value, disabled, ...props }) {
  return (
    <input 
      type={ type ? type : 'text' }
      disabled={ disabled ? disabled : false }
      placeholder={ placeholder ? placeholder : '' } 
      className={ `text-field search ${className ? className : ''}` } 
      { ...props }
    />
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
}

SearchField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
}