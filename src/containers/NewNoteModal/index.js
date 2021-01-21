import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { store } from 'react-notifications-component'

import { API } from '../../config/app'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import { Button } from '../../_lib-components/Button'

import './styles.scss'
import StudentCard from '../../components/student-card'
import { validateField, validateForm } from '../../lib/form-validation'

export function NewNoteModal ({ selectedStudentId, student, ...props }) {
  const { apiGet, apiPost } = useSession()

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [errors, setErrors] = useState({})
  const [formState, setFormState] = useState({})

  const [loadingStudent, setLoadingStudent] = useState(true)

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') props.onDismiss()
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  useEffect(() => {
    async function getStudent () {
      // Get student object from API if not passed
      if (!student) {
        const { data } = await apiGet(API.URL + '/students/' + selectedStudentId)
        student = data
      }

      setSelectedStudent(student)
      setLoadingStudent(false)
    }

    resetForm()

    // Remove current student and get
    setSelectedStudent(null)
    getStudent()
  }, [selectedStudentId, student])

  const resetForm = () => {
    setFormState({})
    setErrors({})
  }

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)

    // If the field has a validation error, rerun the validation
    if (errors && Object.keys(errors).includes(name)) {
      const invalid = validateField(name, validators, newState)
      setErrors({ ...errors, [name]: invalid ? invalid.error : undefined })
    }
  }

  const validators = {
    note: [
      {
        test: (v) => v && v.length,
        error: 'Du må fylle inn et notat'
      },
      {
        test: (v) => v.length > 9,
        error: 'Notatet må være på minst 10 tegn'
      },
      {
        test: (v) => v.length < 2147483600,
        error: 'Notatet er for langt, prøv å forkort det litt'
      }
    ]
  }

  const send = async () => {
    setErrors(validateForm(validators, formState))
    if (errors) return

    const postNote = await apiPost(API.URL + '/students/' + selectedStudent.username + '/documents', {
      type: 'notat',
      variant: 'notat',
      content: {
        ...formState
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

      resetForm()
      props.onFinished()
    } else {
      console.log('Error', postNote)
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
              <StudentCard student={selectedStudent} loading={loadingStudent} />
          }

          <div className='form'>
            <TextField
              rows={5}
              placeholder='Skriv inn notat her'
              onChange={event => handleChange(event.target.value, 'note')}
              value={formState.note}
              error={errors.note}
            />
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Button onClick={() => { send() }} type='primary'>Send</Button>
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
