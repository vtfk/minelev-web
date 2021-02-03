import { useEffect, useState } from 'react'
import { TextField } from 'vtfk-component-library/ui/TextField'
import { Icon } from 'vtfk-component-library/ui/Icon'
import { isValidMobile, validateField, validateForm } from '../../lib/form-validation'

const StudentContactPerson = ({ showError, setHasError }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const [formState, setFormState] = useState({ name: '', mobile: '' })
  const [errors, setErrors] = useState(false)

  const validators = {
    name: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi navnet til den pårørende'
      }
    ],
    mobile: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi et telefonnummer til den pårørende'
      },
      {
        test: (v) => v && isValidMobile(v),
        error: 'Du må angi et gyldig telefonnummer'
      }
    ]
  }

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)

    const invalid = validateField(name, validators, newState)
    setErrors({ ...errors, [name]: invalid ? invalid.error : undefined })
  }

  const handleClose = event => {
    if (event) event.preventDefault()

    setIsOpen(false)
    setErrors(false)
    setTimeout(() => {
      setIsDeleted(true)
    }, 500)
  }

  useEffect(() => {
    setErrors(validateForm(validators, formState))
  }, [])

  useEffect(() => {
    const errorCount = Object.keys(errors).filter(field => !!errors[field]).length
    if (setHasError) setHasError(errorCount === 0 ? false : errors)
  }, [errors])

  if (isDeleted) return null

  return (
    <div className={`yff-kontaktperson parorende ${isOpen ? 'open' : 'closed'} ${errors ? 'errors' : ''}`}>
      <div className='input-element'>
        <TextField
          name='parorendeNavn'
          placeholder='Navn'
          value={formState.name}
          onChange={event => handleChange(event.target.value, 'name')}
          error={showError && errors.name}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='parorendeTelefon'
          placeholder='Telefon'
          value={formState.mobile}
          onChange={event => handleChange(event.target.value, 'mobile')}
          error={showError && errors.mobile}
        />
      </div>
      <button className='delete-button button-left-icon button-primary' aria-label='Slett pårørende' onClick={handleClose}>
        <div className='button-left-icon-icon'>
          <Icon name='close' size='small' />
        </div>
      </button>
    </div>
  )
}

export default StudentContactPerson
