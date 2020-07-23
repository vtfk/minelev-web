import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import iconClose from './icon-close.svg'

import "./styles.scss"

export function Modal({ open, title, className, onDismiss, ...props}) {
  return (
    open === true &&
    <Fragment>
      <div tabIndex="0" className={ `modal ${className ? className : ''}` } {...props}>
        <div className="modal-backdrop"></div>
        <div className="modal-positioner">
          {
            title &&
            <div className="modal-title">
              <button tabIndex="0" onClick={ onDismiss } className="modal-close-button">
                <img src={ iconClose } alt=""/>
              </button> { title }
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

export function ModalBody(props) {
  return (
    <Fragment>
      <div className="modal-body" {...props}>
        { props.children }
      </div>
    </Fragment>
  )
}

export function ModalSideActions(props) {
  return (
    <Fragment>
      <div className="modal-side-actions" {...props}>
        <div>
          { props.children }
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

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

ModalSideActions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}