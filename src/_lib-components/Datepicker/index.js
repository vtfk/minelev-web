import React from 'react'
import PropTypes from 'prop-types'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import nb from 'date-fns/locale/nb'

import iconCalendar from './icon-calendar.svg'

import './styles.scss'

export function Datepicker ({ placeholder, selected, ...props }) {
  registerLocale('nb', nb)

  return (
    <div className='datepicker-field'>
      {
        selected &&
          <div className='placeholder-label'>{placeholder}</div>
      }

      <DatePicker
        placeholder={placeholder || ''}
        selected={selected}
        locale='nb'
        dateFormat='dd.MM.yyyy'
        {...props}
      />

      <div className='icon'>
        <img src={iconCalendar} alt='' />
      </div>
    </div>
  )
}

Datepicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date).isRequired
}
