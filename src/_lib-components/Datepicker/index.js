import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import nb from 'date-fns/locale/nb';

import iconCalendar from './icon-calendar.svg'

import './styles.scss'

export function Datepicker ({ placeholder, value, ...props }) {
  registerLocale('nb', nb)

  return (
    <div className='datepicker-field'
    >
      {
        value !== '' &&
        <div className='placeholder-label'>{placeholder}</div>
      }

      <DatePicker
        placeholder={placeholder || ''}
        selected={value}
        locale='nb'
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
  value: PropTypes.instanceOf(Date).isRequired,
}
