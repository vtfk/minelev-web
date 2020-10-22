import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import icon from './icon-dropdown-nav-icon.svg'

import './styles.scss'

export function IconDropdownNav (props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  function toggleDropdown () {
    setDropdownOpen(prevDropdownOpen => !prevDropdownOpen)
  }

  function handleClickOutside (event) {
    if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (event.target.className !== 'icon-dropdown-nav-trigger') {
        toggleDropdown()
      }
    }
  }

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      setDropdownOpen(false)
    }
  }

  return (
    <div className='icon-dropdown-nav' {...props}>
      <button className='icon-dropdown-nav-trigger' onClick={() => { toggleDropdown() }}>
        <img src={icon} alt='Åpne dropdown meny' />
      </button>

      {
        dropdownOpen === true &&
          <div className='icon-dropdown-nav-dropdown' ref={dropdownRef}>
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

export function IconDropdownNavItem ({ href, onClick, title, ...props }) {
  return (
    <li className='icon-dropdown-nav-item' {...props}>
      {
        href &&
          <a href={href}>
            {title}
          </a>
      }

      {
        onClick &&
          <button onClick={onClick}>
            {title}
          </button>
      }
    </li>
  )
}

IconDropdownNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

IconDropdownNavItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
}
