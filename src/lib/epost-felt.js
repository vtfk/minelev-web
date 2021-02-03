import { useState } from 'react'
import { TextField } from 'vtfk-component-library/ui/TextField'

function ErrorMessage () {
  return (
    <div>
      <p>E-postadressen er ikke gyldig</p>
    </div>
  )
}

const EpostFelt = ({ name, placeholder }) => {
  const [epost, setEpost] = useState('')
  const [invalid, setInvalid] = useState(false)

  function isValid (event) {
    if (event.target.value !== '') {
      const { typeMismatch } = event.target.validity
      setInvalid(typeMismatch)
      if (typeMismatch) {
        event.target.focus()
      }
    }
  }

  return (
    <>
      <div className='input-element'>
        <TextField
          type='email'
          name={name}
          placeholder={placeholder}
          value={epost}
          onChange={event => setEpost(event.target.value)}
          onBlur={event => isValid(event)}
        />
        {invalid && <ErrorMessage />}
      </div>
    </>
  )
}

export default EpostFelt
