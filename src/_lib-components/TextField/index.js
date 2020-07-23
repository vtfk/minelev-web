import React, { useState } from "react"
import PropTypes from 'prop-types'

import iconSearch from './icon-search.svg'

import "./styles.scss"

export function TextField({ type, className, placeholder, value, disabled, rows, hasSearchIcon, ...props }) {
  const [focusState, setFocusState] = useState(false)

  return (
    <div className={`
      text-field 
      ${className ? className : ''} 
      ${type ? type : 'text'} 
      ${focusState ? 'focused' : ''}
      ${hasSearchIcon ? 'has-search-icon' : ''}
    `}>
      {
        value !== '' &&
        <div className="placeholder-label">{placeholder}</div>
      }
      
      {
        rows &&
        <textarea 
          type={ type ? type : 'text' }
          disabled={ disabled ? disabled : false }
          placeholder={ placeholder ? placeholder : '' } 
          rows={ rows }
          onFocus={ () => { setFocusState(true) } }
          onBlur={ () => { setFocusState(false) } }
          value={ value }
          { ...props }
        />
      }

      {
        !rows &&
        <input 
          type={ type ? type : 'text' }
          disabled={ disabled ? disabled : false }
          placeholder={ placeholder ? placeholder : '' } 
          value={ value }
          onFocus={ () => { setFocusState(true) } }
          onBlur={ () => { setFocusState(false) } }
          { ...props }
        />
      }

      {
        hasSearchIcon &&
        <div className="icon">
          <img src={ iconSearch } alt=""/>
        </div>
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
  disabled: PropTypes.bool,
  rows: PropTypes.number,
}