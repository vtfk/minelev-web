import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import { TextField } from '../TextField'
import { Icon } from '../Icon'

export function SearchField ({ placeholder, value, rounded, onSearch, onChange, className, ...props }) {
  const [searchValue, setSearchValue] = useState(value || '')

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    if (onChange && typeof onChange === 'function') onChange(event)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') search()
  }

  const search = () => {
    if (onSearch && typeof onSearch === 'function') onSearch(searchValue)
  }

  return (
    <div className={`search-field ${rounded ? 'rounded' : ''}`}>
      <TextField
        value={searchValue}
        className={`${className || ''}`}
        rounded={rounded}
        placeholder={placeholder || 'Søk...'}
        label={rounded ? null : placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        {...props}
      />

      <div className='icon' onClick={search}>
        <Icon name='search' alt='' />
      </div>
    </div>
  )
}

SearchField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.bool
}
