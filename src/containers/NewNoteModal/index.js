import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { store } from 'react-notifications-component'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'

import './styles.scss'
import StudentCard from '../../components/student-card'

export function NewNoteModal ({ selectedStudentId, student, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [noteText, setNoteText] = useState('')
  const { apiGet, apiPost } = useSession()

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    async function getStudent () {
      // Get student object from API if not passed
      if (!student) {
        const { data } = await apiGet(API.URL + '/students/' + selectedStudentId)
        student = data
      }

      setSelectedStudent(student)
    }
    getStudent()
  }, [selectedStudentId, student])

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

        props.onFinished()
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
        onFinished={props.onFinished}
      >
        <ModalBody>
          {
            selectedStudent &&
              <StudentCard student={selectedStudent} />
          }

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
  onFinished: PropTypes.func.isRequired,
  student: PropTypes.object,
  selectedStudentId: PropTypes.string,
  className: PropTypes.string
}
