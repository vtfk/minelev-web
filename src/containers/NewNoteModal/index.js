import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { store } from 'react-notifications-component'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'

import './styles.scss'

export function NewNoteModal ({ selectedStudent, ...props }) {
  const [noteText, setNoteText] = useState('')
  const { apiPost } = useSession()

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

  async function send () {
    if (noteText !== '') {
      const postNote = await apiPost(API.URL + '/students/' + selectedStudent.username + '/documents', {
        type: 'notat',
        variant: 'notat',
        content: {
          note: noteText
        }
      })

      if (postNote) {
        store.addNotification({
          title: '👍',
          message: 'Notatet ble sendt.',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: false
          }
        })
        props.onDismiss()
        setNoteText('')
      } else {
        console.log('Error', postNote)
      }
    } else {
      store.addNotification({
        title: 'Notatet ble ikke sendt.',
        message: 'Du må fylle inn tekst i notatfeltet.',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: false
        }
      })
    }
  }

  return (
    <>
      <Modal
        {...props}
        className='new-note-modal'
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
            <TextField
              rows={5}
              placeholder='Skriv inn notat her'
              value={noteText}
              onChange={(event) => { setNoteText(event.target.value) }}
            />
          </div>

        </ModalBody>
        <ModalSideActions>

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

NewNoteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
