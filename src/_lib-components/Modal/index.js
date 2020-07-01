import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

export function Modal({ open, title, className, ...props}) {
  return (
    open === true &&
    <Fragment>
      <div className={ `modal ${className ? className : ''}` } {...props}>
        <div className="modal-backdrop"></div>
        <div className="modal-positioner">
          {
            title &&
            <div className="modal-title">
              <button onClick={ props.onDismiss } className="modal-close-button">x</button> { title }
            </div>
          }
          <div className="modal-content">
            { props.children }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string,
}