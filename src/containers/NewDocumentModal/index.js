import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { ROUTES } from '../../config/constants'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'

import './styles.scss'

export function NewDocumentModal ({ selectedStudent, ...props }) {
  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function send () {
    props.onDismiss()
    window.alert('Du har nå sendt inn dokumentet.')
  }

  return (
    <>
      <Modal
        {...props}
        className='new-document-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>

          <div className='person-information'>
            <div className='image'>
              <InitialsBadge firstName={selectedStudent.firstName} lastName={selectedStudent.lastName} size='large' />
            </div>
            <div className='text-wrapper'>
              <Heading3 className='name'>
                {selectedStudent.firstName} {selectedStudent.lastName}
              </Heading3>
              <div className='other'>
                <Paragraph>{selectedStudent.schoolName}</Paragraph>
                <Paragraph><Link href={`/${ROUTES.classes}/${selectedStudent.classId}`}>{selectedStudent.className}</Link></Paragraph>
                <Paragraph>26. april 2001</Paragraph>
                <Paragraph>bra26041@skole.vtfk.no</Paragraph>
              </div>
            </div>
          </div>

          <div className='form'>
            <Select
              placeholder='Velg dokumenttype'
              items={[
                { value: 0, label: 'Varsel atferd' },
                { value: 1, label: 'Varsel fag' },
                { value: 2, label: 'Varsel orden' }
              ]}
              selectedItem={{ value: 0, label: 'Varsel atferd' }}
              onChange={(item) => { window.alert('Valgt: ' + item.label) }}
            />

            <Select
              placeholder='Hva gjelder varselet?'
              items={[
                { value: 1, label: 'Halvårsvurdering 1. termin' },
                { value: 2, label: 'Halvårsvurdering 2. termin' },
                { value: 3, label: 'Standpunktkarakter' }
              ]}
              selectedItem={{ value: 3, label: 'Standpunktkarakter' }}
              onChange={(item) => { window.alert('Valgt: ' + item.label) }}
            />

            <SelectMultiple
              placeholder='Hva er årsaken til varselet?'
              items={[
                { value: 1, label: 'Varsel atferd årsak 1' },
                { value: 2, label: 'Varsel atferd årsak 2' },
                { value: 3, label: 'Varsel atferd årsak 3' }
              ]}
              selectedItems={[
                { value: 2, label: 'Varsel atferd årsak 2' },
                { value: 3, label: 'Varsel atferd årsak 3' }
              ]}
              onChange={(item) => { window.alert('Valgt: ' + item.label) }}
            />
          </div>

        </ModalBody>
        <ModalSideActions>

          <div className='action'>
            <Link onClick={() => { window.alert('Ikke implementert') }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            {/* TODO: component */}
            <button onClick={() => { send() }} className='button button-primary'>Send</button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avslutt</Link>
          </div>

        </ModalSideActions>
      </Modal>
    </>
  )
}

NewDocumentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
