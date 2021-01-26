import { useEffect, useState } from 'react'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import { isValidEmail, isValidMobile, validateField, validateForm } from '../../lib/form-validation'

const OrganisasjonKontaktperson = ({ showError, setHasError }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const [formState, setFormState] = useState({ name: '', mobile: '', email: '', department: '' })
  const [errors, setErrors] = useState(false)

  const validators = {
    name: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi navnet til kontaktpersonen'
      }
    ],
    mobile: [
      {
        test: (v) => !v || v.length === 0 || isValidMobile(v),
        error: 'Du må angi et gyldig telefonnummer'
      }
    ],
    email: [
      {
        test: (v) => !v || v.length === 0 || isValidEmail(v),
        error: 'Du må angi en gyldig e-postadresse'
      }
    ],
    department: [
      {
        test: (v) => true,
        error: 'Avdeling er ikke påkrevd'
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
    <div className={`yff-kontaktperson bedrift ${isOpen ? 'open' : 'closed'} ${errors ? 'errors' : ''}`}>
      <div className='input-element'>
        <TextField
          name='kontaktpersonNavn'
          placeholder='Kontaktpersonens navn'
          value={formState.name}
          onChange={event => handleChange(event.target.value, 'name')}
          error={showError && errors.name}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonTelefon'
          placeholder='Telefon (valgfritt)'
          value={formState.mobile}
          onChange={event => handleChange(event.target.value, 'mobile')}
          error={showError && errors.mobile}
          inputMode='numeric' pattern='[0-9]*'
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonEpost'
          placeholder='E-postadresse (valgfritt)'
          value={formState.email}
          onChange={event => handleChange(event.target.value, 'email')}
          error={showError && errors.email}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonAvdeling'
          placeholder='Avdeling (valgfritt)'
          value={formState.department}
          onChange={event => handleChange(event.target.value, 'department')}
          error={showError && errors.department}
        />
      </div>
      <button className='delete-button button-left-icon button-primary' aria-label='Slett kontaktperson' onClick={handleClose}>
        <div className='button-left-icon-icon'>
          <Icon name='close' size='small' />
        </div>
      </button>
    </div>
  )
}

export default OrganisasjonKontaktperson
