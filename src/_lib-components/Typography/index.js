import React from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

export function Heading1({ as, className, children, ...props }) {
  const CustomTag = as ? as : 'h1'

  return (
    <CustomTag className={ `typography heading-one ${className ? className : ''}` } { ...props }>
      { children }
    </CustomTag>
  )
}

export function Heading2({ as, className, children, ...props }) {
  const CustomTag = as ? as : 'h2'

  return (
    <CustomTag className={ `typography heading-two ${className ? className : ''}` } { ...props }>
      { children }
    </CustomTag>
  )
}

export function Heading3({ as, className, children, ...props }) {
  const CustomTag = as ? as : 'h3'

  return (
    <CustomTag className={ `typography heading-three ${className ? className : ''}` } { ...props }>
      { children }
    </CustomTag>
  )
}

export function Heading4({ as, className, children, ...props }) {
  const CustomTag = as ? as : 'h4'

  return (
    <CustomTag className={ `typography heading-four ${className ? className : ''}` } { ...props }>
      { children }
    </CustomTag>
  )
}

export function Paragraph({ className, children, size, ...props }) {
  return (
    <p className={ `typography paragraph ${className ? className : ''} ${size ? size : ''}` } { ...props }>
      { children }
    </p>
  )
}

export function Link({ href, onClick, className, noStyle, leftIcon, rightIcon, children, size, ...props }) {
  return (
    <a href={href ? href : null} onClick={ onClick ? onClick : null } className={ `typography link ${className ? className : ''} ${noStyle ? 'no-style' : ''} ${size ? size : ''} ${leftIcon || rightIcon ? 'has-icon' : ''}` } { ...props }>
      {
        leftIcon &&
        <span className="link-icon left-icon">{ leftIcon }</span>
      }
      { children }
      {
        rightIcon &&
        <span className="link-icon right-icon">{ rightIcon }</span>
      }
    </a>
  )
}

Heading1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Heading2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Heading3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Heading4.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Paragraph.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired
}

Link.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  noStyle: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  size: PropTypes.string,
  children: PropTypes.node.isRequired
}