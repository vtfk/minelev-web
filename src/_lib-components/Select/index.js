import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../_lib-components/Icon'
import { RadioButton } from '../../_lib-components/RadioButton'
import { Checkbox } from '../../_lib-components/Checkbox'

import './styles.scss'
import { nanoid } from 'nanoid'

export function Select ({ placeholder, label, items, selectedItem, id, onChange, isOpen, closeOnSelect, ...props }) {
  const [open, setOpen] = useState(isOpen || false)
  const [labelId] = useState(id || nanoid())

  function toggleSelect () {
    setOpen(prevSelectState => !prevSelectState)
  }

  const handleMouseUp = (item) => {
    onChange(item)
    if (closeOnSelect) setOpen(false)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && closeOnSelect) setOpen(false)
  }

  return (
    <div className={`select select-single ${open === true ? 'is-open' : ''}`}>
      <div {...props}>
        {
          placeholder &&
          selectedItem &&
            <div>
              <label htmlFor={labelId} className='select-label'>
                {placeholder}
              </label>
              <button className='select-trigger' id={labelId} onClick={() => { toggleSelect() }} aria-haspopup='listbox' aria-expanded={open}>
                <div className='select-trigger-text'>
                  <div>{open === true ? placeholder : selectedItem.label}</div>
                </div>
                <Icon className='select-trigger-icon' name={open ? 'chevronUp' : 'chevronDown'} size='auto' alt='' />
              </button>
            </div>
        }

        {
          placeholder &&
          !selectedItem &&
            <button className='select-trigger' id={labelId} onClick={() => { toggleSelect() }} aria-haspopup='listbox' aria-expanded={open}>
              <label htmlFor={labelId} className='select-trigger-text'>
                {placeholder}
              </label>
              <Icon className='select-trigger-icon' name={open ? 'chevronUp' : 'chevronDown'} size='auto' alt='' />
            </button>
        }

        {
          open === true &&
            <fieldset className='select-items' role='listbox' id={labelId}>
              {
                items.map(function (item, index) {
                  const checked = selectedItem && selectedItem.value === item.value
                  return (
                    <div className='select-item' key={index}>
                      <RadioButton
                        onChange={() => onChange(item)}
                        onMouseUp={() => handleMouseUp(item)}
                        onKeyPress={handleKeyPress}
                        name={`select-${placeholder.replace(/\s+/g, '-').toLowerCase()}`}
                        value={item.value}
                        label={item.label}
                        checked={checked}
                        aria-selected={checked}
                        role='option'
                      />
                    </div>
                  )
                })
              }
            </fieldset>
        }
      </div>
    </div>
  )
}

export function SelectMultiple ({ placeholder, label, items, selectedItems, isOpen, id, onChange, ...props }) {
  const [open, setOpen] = useState(isOpen || false)
  const [labelId] = useState(id || nanoid())

  function toggleSelect () {
    setOpen(prevSelectState => !prevSelectState)
  }

  function isSelected (item) {
    return selectedItems.filter(function (e) { return e.value === item.value }).length > 0
  }

  const handleKeyPress = (event, item) => {
    if (event.key === 'Enter') {
      if (selectedItems.length === 0) onChange(item)
      setOpen(false)
    }
  }

  return (
    <div className={`select select-multiple ${open === true ? 'is-open' : ''}`}>
      <div {...props}>
        {
          placeholder &&
          selectedItems.length > 0 &&
            <div>
              <label htmlFor={labelId} className='select-label'>
                {placeholder}
              </label>
              <button id={labelId} className='select-trigger' onClick={() => { toggleSelect() }} aria-haspopup='listbox' aria-expanded={open}>
                <div className='select-trigger-text'>
                  {
                    open === true
                      ? placeholder
                      : selectedItems.map(function (item, index) {
                        return (
                          <div key={item.value}>{item.label}</div>
                        )
                      })
                  }
                </div>
                <Icon className='select-trigger-icon' name={open ? 'chevronUp' : 'chevronDown'} size='auto' alt='' />
              </button>
            </div>
        }
        {
          placeholder &&
          (!selectedItems || selectedItems.length === 0) &&
            <button id={labelId} className='select-trigger' onClick={() => { toggleSelect() }} aria-haspopup='listbox' aria-expanded={open}>
              <label htmlFor={labelId} className='select-trigger-text'>
                {placeholder}
              </label>
              <Icon className='select-trigger-icon' name={open ? 'chevronUp' : 'chevronDown'} size='auto' alt='' />
            </button>
        }

        {
          open === true &&
            <fieldset id={labelId} className='select-items' role='listbox'>
              {
                items.map(function (item, index) {
                  return (
                    <div className='select-item' key={index}>
                      <Checkbox
                        onChange={() => { onChange(item) }}
                        onKeyPress={(e) => handleKeyPress(e, item)}
                        name={`select-multiple-${placeholder.replace(/\s+/g, '-').toLowerCase()}`}
                        value={item.value}
                        label={item.label}
                        checked={isSelected(item)}
                        aria-selected={isSelected(item)}
                        role='option'
                      />
                    </div>
                  )
                })
              }
            </fieldset>
        }
      </div>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  closeOnSelect: PropTypes.bool
}

SelectMultiple.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
}
