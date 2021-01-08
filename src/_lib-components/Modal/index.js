import React from 'react'
import PropTypes from 'prop-types'

import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { ReactComponent as CloseIcon } from './icon-close.svg'

import './styles.scss'

export function Modal ({ open, title, className, onDismiss, onFinished, ...props }) {
  return (
    open === true &&
      <>
        <ScrollLock isActive={open}>
          <div tabIndex='0' className={`modal ${className || ''}`} aria-modal='true' role='dialog' {...props}>
            <div className='modal-backdrop' />
            <div className='modal-positioner'>
              {
                title &&
                  <div className='modal-title'>
                    <button tabIndex='0' onClick={onDismiss} className='modal-close-button' aria-label='Lukk'>
                      <CloseIcon alt='' />
                    </button> {title}
                  </div>
              }
              <TouchScrollable>
                <div className='modal-content'>
                  {props.children}
                </div>
              </TouchScrollable>
            </div>
          </div>
        </ScrollLock>
      </>
  )
}

export function ModalBody (props) {
  return (
    <>
      <div className='modal-body' {...props}>
        {props.children}
      </div>
    </>
  )
}

export function ModalSideActions (props) {
  return (
    <>
      <div className='modal-side-actions' {...props}>
        <div>
          {props.children}
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  onFinished: PropTypes.func,
  className: PropTypes.string
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
