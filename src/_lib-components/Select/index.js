import React, { useState } from 'react'
import PropTypes from 'prop-types'

import iconDown from './icon-chevron-down.svg'
import iconUp from './icon-chevron-up.svg'
import iconCheck from './icon-check.svg'

import './styles.scss'

export function Select ({ placeholder, label, items, selectedItem, onChange, isOpen, ...props }) {
  const [selectState, setSelectState] = useState(isOpen || false)

  function toggleSelect () {
    setSelectState(prevSelectState => !prevSelectState)
  }

  function clickItem (item) {
    onChange(item)
    // setSelectState(prevSelectState => false)
  }

  return (
    <div className={`select select-single ${selectState === true ? 'is-open' : ''}`}>
      <div
        {...props}
      >

        {
          placeholder &&
          selectedItem &&
            <div>
              <div className='select-label'>
                {placeholder}
              </div>
              <div className='select-trigger' onClick={() => { toggleSelect() }}>
                <div className='select-trigger-text'>
                  <div>{selectState === true ? placeholder : selectedItem.label}</div>
                </div>
                <img className='select-trigger-icon' src={selectState === true ? iconUp : iconDown} alt='' />
              </div>
            </div>
        }

        {
          placeholder &&
          !selectedItem &&
            <div className='select-trigger' onClick={() => { toggleSelect() }}>
              <div className='select-trigger-text'>
                <div>
                  {placeholder}
                </div>
              </div>
              <img className='select-trigger-icon' src={selectState === true ? iconUp : iconDown} alt='' />
            </div>
        }

        {
          selectState === true &&
            <div className='select-items'>
              {
                items.map(function (item, index) {
                  return (
                    <div
                      className={`select-item ${selectedItem && selectedItem.value === item.value ? 'selected' : ''}`}
                      onClick={() => { clickItem(item) }}
                      key={item.value}
                    >
                      <div className='select-item-icon' />
                      <div className='select-item-text'>{item.label}</div>
                    </div>
                  )
                })
              }
            </div>
        }
      </div>
    </div>
  )
}

export function SelectMultiple ({ placeholder, label, items, selectedItems, onChange, ...props }) {
  const [selectState, setSelectState] = useState(false)

  function toggleSelect () {
    setSelectState(prevSelectState => !prevSelectState)
  }

  function clickItem (item) {
    onChange(item)
    // setSelectState(prevSelectState => false)
  }

  function isSelected (item) {
    return selectedItems.filter(function (e) { return e.value === item.value }).length > 0
  }

  return (
    <div className={`select select-multiple ${selectState === true ? 'is-open' : ''}`}>
      <div
        {...props}
      >
        {
          placeholder &&
          selectedItems.length > 0 &&
            <div>
              <div className='select-label'>
                {placeholder}
              </div>
              <div className='select-trigger' onClick={() => { toggleSelect() }}>
                <div className='select-trigger-text'>
                  {
                    selectState === true
                      ? placeholder
                      : selectedItems.map(function (item, index) {
                        return (
                          <div key={item.value}>{item.label}</div>
                        )
                      })
                  }
                </div>
                <img className='select-trigger-icon' src={selectState === true ? iconUp : iconDown} alt='' />
              </div>
            </div>
        }
        {
          placeholder &&
          (!selectedItems || selectedItems.length === 0) &&
            <div className='select-trigger' onClick={() => { toggleSelect() }}>
              <div className='select-trigger-text'>
                {placeholder}
              </div>
              <img className='select-trigger-icon' src={selectState === true ? iconUp : iconDown} alt='' />
            </div>
        }

        {
          selectState === true &&
            <div className='select-items'>
              {
                items.map(function (item, index) {
                  return (
                    <div
                      className={`select-item ${isSelected(item) ? 'selected' : ''}`}
                      onClick={() => { clickItem(item) }}
                      key={item.value}
                    >
                      <div className='select-item-icon'>
                        {
                          isSelected(item) &&
                            <img src={iconCheck} alt='' />
                        }
                      </div>
                      <div className='select-item-text'>{item.label}</div>
                    </div>
                  )
                })
              }
            </div>
        }
      </div>
    </div>
  )
}

Select.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
}

SelectMultiple.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array,
  onChange: PropTypes.func.isRequired
}
