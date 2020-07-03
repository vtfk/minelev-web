import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import { Heading3, Paragraph, Link } from "../../_lib-components/Typography"
import { InitialsBadge } from "../../_lib-components/InitialsBadge"
import { Modal } from "../../_lib-components/Modal"
import { ModalBody } from "../../_lib-components/ModalBody"
import { ModalSideActions } from "../../_lib-components/ModalSideActions"

import "./styles.scss"

export function NewDocumentModal({ selectedStudent, ...props}) {
  return (
    <Fragment>
      <Modal 
        { ...props }
        className="new-document-modal"
      >
        <ModalBody>

          <div className="person-information">
            <div className="image">
              <InitialsBadge firstName={selectedStudent.firstName} lastName={selectedStudent.lastName} size="large" />
            </div>
            <div className="text-wrapper">
              <Heading3 className="name">
                {selectedStudent.firstName} {selectedStudent.lastName}
              </Heading3>
              <div className="other">
                <Paragraph>Noe mer tekst her</Paragraph>
                <Paragraph>Og enda noe mer tekst her</Paragraph>
                <Paragraph>Og en e-postadresse</Paragraph>
              </div>
            </div>
          </div>

        </ModalBody>
        <ModalSideActions>

          <div className="action">
            <Link onClick={ () => { alert('Ikke implementert') } }>Forhåndsvisning</Link>
          </div>
          <div className="action">
            <button className="button button-primary">Send</button>
          </div>
          <div className="action">
            <Link onClick={ () => { alert('Ikke implementert') } }>Avslutt</Link>
          </div>
          
        </ModalSideActions>
      </Modal>
    </Fragment>
  )
}

NewDocumentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string,
}