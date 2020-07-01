import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

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

ModalSideActions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}