import React from "react"
import PropTypes from 'prop-types'

import home from './icon-home.svg'
import activity from './icon-activity.svg'
import classes from './icon-classes.svg'
import students from './icon-students.svg'
import statistics from './icon-statistics.svg'
import help from './icon-help.svg'
import arrowRight from './icon-arrow-right.svg'
import arrowLeft from './icon-arrow-left.svg'

import "./styles.scss"

export function Icon({ name, size }) {
  const iconNameMapping = {
    'home': home,
    'activity': activity,
    'classes': classes,
    'students': students,
    'statistics': statistics,
    'help': help,
    'arrowRight': arrowRight,
    'arrowLeft': arrowLeft,
  }

  return (
    <span className={ `icon ${size}` }><img src={ iconNameMapping[name] } alt=""/></span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}