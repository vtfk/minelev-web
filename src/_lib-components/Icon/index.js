import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Home } from './icon-home.svg'
import { ReactComponent as Activity } from './icon-activity.svg'
import { ReactComponent as Classes } from './icon-classes.svg'
import { ReactComponent as Students } from './icon-students.svg'
import { ReactComponent as Statistics } from './icon-statistics.svg'
import { ReactComponent as Help } from './icon-help.svg'
import { ReactComponent as ArrowRight } from './icon-arrow-right.svg'
import { ReactComponent as ArrowLeft } from './icon-arrow-left.svg'
import { ReactComponent as Add } from './icon-add.svg'
import { ReactComponent as Check } from './icon-check.svg'
import { ReactComponent as Close } from './icon-close.svg'
import { ReactComponent as Menu } from './icon-menu.svg'
import { ReactComponent as Search } from './icon-search.svg'

import './styles.scss'

export function Icon ({ name, size }) {
  const iconNameMapping = {
    home: <Home />,
    activity: <Activity />,
    classes: <Classes />,
    students: <Students />,
    statistics: <Statistics />,
    help: <Help />,
    arrowRight: <ArrowRight />,
    arrowLeft: <ArrowLeft />,
    add: <Add />,
    check: <Check />,
    close: <Close />,
    menu: <Menu />,
    search: <Search />
  }

  return (
    <span className={`icon ${size}`}>
      {iconNameMapping[name]}
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string
}
