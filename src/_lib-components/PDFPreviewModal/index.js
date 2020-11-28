import React from 'react'
import PropTypes from 'prop-types'

import iconClose from './icon-close.svg'

import './styles.scss'

export function PDFPreviewModal ({ open, title, className, onDismiss, loading, base64, error, ...props }) {
  let pdf = false

  if (base64) {
    pdf = React.createElement(
      'object', {
        type: 'application/pdf',
        data: 'data:application/pdf;base64,' + base64,
        width: '100%',
        height: '100%'
      }
    )
  }

  return (
    open === true &&
      <>
        <div tabIndex='0' className={`preview-modal ${className || ''}`} {...props}>
          <div className='preview-modal-backdrop' />
          <div className='preview-modal-positioner'>
            {
              title &&
                <div className='preview-modal-title'>
                  <button tabIndex='0' onClick={onDismiss} className='preview-modal-close-button'>
                    <img src={iconClose} alt='' /> {title}
                  </button>
                </div>
            }
            <div className='preview-modal-content'>
              <div className='preview-modal-body'>
                {base64 && pdf ? pdf : ''}
                {loading && !base64 && !error ? <div className='preview-modal-loading'><span>.</span><span>.</span><span>.</span></div> : ''}
                {error ? <div className='preview-modal-error'>Det har skjedd en feil, vennligst prøv igjen.</div> : ''}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

PDFPreviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string,
  base64: PropTypes.string
}
