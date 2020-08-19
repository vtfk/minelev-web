import React from "react"
import PropTypes from 'prop-types'

import iconSearch from './icon-search.svg'

import "./styles.scss"

export function TextField({ type, className, placeholder, value, disabled, ...props }) {
  return (
    <div className={ `text-field ${className ? className : ''}` } >
      <input 
        type={ type ? type : 'text' }
        placeholder={ placeholder ? placeholder : '' } 
        { ...props }
      />
    </div>
  )
}

export function SearchField({ type, className, placeholder, value, disabled, ...props }) {
  return (
    <div className="text-field search">
      <input 
        type={ type ? type : 'text' }
        value={ value ? value : '' }
        disabled={ disabled ? disabled : false }
        placeholder={ placeholder ? placeholder : '' } 
        className={ `text-field text-field-search ${className ? className : ''}` } 
        { ...props }
      />

      <div className="icon">
        <img src={ iconSearch } alt=""/>
      </div>
    </div>
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