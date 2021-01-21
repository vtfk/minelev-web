import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import nb from 'date-fns/locale/nb'

import iconCalendar from './icon-calendar.svg'

import './styles.scss'
import { nanoid } from 'nanoid'

export function Datepicker ({ placeholder, label, selected, id, isOpen, error, ...props }) {
  const [open, setOpen] = useState(isOpen || false)
  const [labelId] = useState(id || nanoid())
  registerLocale('nb', nb)

  return (
    <div className={`datepicker-field ${error ? 'error' : ''}`}>
      {
        selected &&
          <label htmlFor={labelId} className='placeholder-label'>
            {label || placeholder}
          </label>
      }
      <div className='picker'>
        <DatePicker
          id={labelId}
          placeholderText={placeholder || ''}
          selected={selected}
          locale='nb'
          dateFormat='dd.MM.yyyy'
          aria-invalid={!!error}
          onFocus={() => setOpen(true)}
          onClickOutside={() => setOpen(false)}
          open={open}
          {...props}
        />

        <div className='icon' onClick={() => setOpen(!open)}>
          <img src={iconCalendar} alt='' />
        </div>
      </div>

      {
        error &&
          <label htmlFor={labelId} role='alert' aria-live='assertive' className='error-message'>
            {error.message || error}
          </label>
      }
    </div>
  )
}

Datepicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date).isRequired
}
