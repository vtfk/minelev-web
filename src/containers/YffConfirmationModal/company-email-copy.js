import { useState } from 'react'
import { TextField } from '../../_lib-components/TextField'

function ErrorMessage () {
  return (
    <div>
      <p>Epostadressen er ikke gyldig</p>
    </div>
  )
}

const KopiPrEpost = () => {
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
          name='kopiPrEpost'
          placeholder='Send kopi på e-post'
          value={epost}
          onChange={event => setEpost(event.target.value)}
          onBlur={event => isValid(event)}
        />
        {invalid && <ErrorMessage />}
      </div>
    </>
  )
}

export default KopiPrEpost
