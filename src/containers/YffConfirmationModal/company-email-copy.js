import { useEffect, useState } from 'react'
import { Icon } from '../../_lib-components/Icon'
import { TextField } from '../../_lib-components/TextField'
import { isValidEmail, validateField, validateForm } from '../../lib/form-validation'

function KopiPrEpost ({ showError, setHasError }) {
  const [isOpen, setIsOpen] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState(false)

  const validator = {
    email: [
      {
        test: (v) => v && v.length,
        error: 'Du må angi en e-postadresse'
      },
      {
        test: (v) => v && v.length && isValidEmail(v),
        error: 'E-postadressen er ugyldig'
      }
    ]
  }

  const handleChange = (value) => {
    const invalid = validateField('email', validator, { email: value })
    setEmail(value)
    if (setErrors) setErrors({ email: invalid ? invalid.error : undefined })
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
    setErrors(validateForm(validator, { email }))
  }, [])

  useEffect(() => {
    if (setHasError) setHasError(errors.email ? errors : false)
  }, [errors])

  if (isDeleted) return false

  return (
    <div className={`yff-kontaktperson kopipaepost ${isOpen ? 'open' : 'closed'} ${errors ? 'errors' : ''}`}>
      <div className='input-element'>
        <TextField
          name='kopiPrEpost'
          placeholder='E-postadresse'
          value={email}
          onChange={event => handleChange(event.target.value)}
          error={showError && errors.email}
        />
        <button className='delete-button button-left-icon button-primary' aria-label='Slett kopimottager' onClick={handleClose}>
          <div className='button-left-icon-icon'>
            <Icon name='close' size='small' />
          </div>
        </button>
      </div>
    </div>
  )
}

export default KopiPrEpost
