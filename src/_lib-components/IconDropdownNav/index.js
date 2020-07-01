import React, { useRef, useState, useEffect } from "react"
import PropTypes from 'prop-types'

import icon from './icon-dropdown-nav-icon.svg'

import "./styles.scss"

export function IconDropdownNav(props) {
  const [dropdownState, setDropdownState] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setDropdownState(prevDropdownState => !prevDropdownState)
  }
  
  function handleClickOutside(event) {
    if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (event.target.className !== 'icon-dropdown-nav-trigger') {
        toggleDropdown()
      }
    }
  }

  return (
    <div className={ `icon-dropdown-nav` } { ...props }>
      <div className="icon-dropdown-nav-trigger" onClick={ () => { toggleDropdown() } }>
        <img src={ icon } alt="Åpne dropdown meny"/>
      </div>
      
      {
        dropdownState === true &&
        <div className="icon-dropdown-nav-dropdown" ref={dropdownRef}>
          <ul>
            {
              props.children
            }
          </ul>
        </div>
      }
    </div>
  )
}

IconDropdownNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}