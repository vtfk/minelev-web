import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import "./styles.scss"

export function ModalBody(props) {
  return (
    <Fragment>
      <div className="modal-body" {...props}>
        { props.children }
      </div>
    </Fragment>
  )
}

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}