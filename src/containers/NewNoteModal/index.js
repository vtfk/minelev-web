import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'

import { useSession } from '@vtfk/react-msal'

import { API } from '../../config/app'

import { Link } from 'vtfk-component-library/ui/Typography'
import { Modal, ModalBody, ModalSideActions } from 'vtfk-component-library/ui/Modal'
import { TextField } from 'vtfk-component-library/ui/TextField'
import { Button } from 'vtfk-component-library/ui/Button'

import './styles.scss'
import StudentCard from '../../components/student-card'
import { validateField, validateForm } from '../../lib/form-validation'
import { SkeletonLoader } from 'vtfk-component-library/ui/SkeletonLoader'
import { errorMessage, successMessage } from '../../lib/toasts'
import ErrorFallback from '../../components/yff-error-fallback'
import logError from '../../lib/log-error'

export function NewNoteModal ({ selectedStudentId, student, ...props }) {
  const { apiGet, apiPost } = useSession()

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [errors, setErrors] = useState({})
  const [formState, setFormState] = useState({})

  const [submitting, setSubmitting] = useState(false)

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
    }

    resetForm()

    // Remove current student and get
    setSelectedStudent(null)
    getStudent()
  }, [selectedStudentId, student])

  const resetForm = () => {
    setSubmitting(false)
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

  const validate = () => {
    const formErrors = validateForm(validators, formState)
    setErrors(formErrors)
    return !!formErrors
  }

  const send = async () => {
    if (submitting) return
    if (validate()) return

    try {
      setSubmitting(true)
      const response = await apiPost(API.URL + '/students/' + selectedStudent.username + '/documents', {
        type: 'notat',
        variant: 'notat',
        content: {
          ...formState
        }
      })
      if (!response) throw new Error('Coundn\'t POST note to /student/:id/documents. Response:' + response)

      successMessage('Notatet er lagret 👍', 'Notatet er lagt i kø, og blir lagret i elevmappa.')
      resetForm()
      props.onFinished()
    } catch (error) {
      logError(error)
      errorMessage('Notatet er ikke lagret!', 'Du kan forsøke igjen, men om problemene fortsetter kontakt systemadministrator.')
      setSubmitting(false)
    }
  }

  return (
    <Sentry.ErrorBoundary
      fallback={ErrorFallback}
      onReset={props.onDismiss}
    >
      <Modal
        {...props}
        className='new-note-modal'
        onDismiss={props.onDismiss}
        onFinished={props.onFinished}
      >
        <ModalBody>
          <StudentCard student={selectedStudent} />
          <p className='notat-intro'>
            Notatet blir arkivert i elevens mappe i Public 360. Notatet finner du igjen i <Link href='https://elevmappa.no' target='_blank' rel='noreferrer'>Elevmappa</Link>.
          </p>

          <div className='form'>
            {
              selectedStudent
                ? (
                  <TextField
                    rows={5}
                    placeholder='Skriv inn notat her'
                    onChange={event => handleChange(event.target.value, 'note')}
                    value={formState.note}
                    error={errors.note}
                  />
                  )
                : <SkeletonLoader height='150px' />
            }
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            {
              selectedStudent
                ? <Button onClick={() => { send() }} type='primary' spinner={submitting}>Send</Button>
                : <SkeletonLoader variant='circle' style={{ borderRadius: '24px' }}><Button type='primary'>Send</Button></SkeletonLoader>
            }
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </Sentry.ErrorBoundary>
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
