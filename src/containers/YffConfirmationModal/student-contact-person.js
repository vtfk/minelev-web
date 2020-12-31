import { useState } from 'react'
import { TextField } from '../../_lib-components/TextField'

const StudentContactPerson = () => {
  const [navn, setNavn] = useState('')
  const [telefon, setTelefon] = useState('')

  return (
    <>
      <div className='input-element'>
        <TextField
          name='parorendeNavn'
          placeholder='Navn'
          value={navn}
          onChange={event => setNavn(event.target.value)}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='parorendeTelefon'
          placeholder='Telefon'
          value={telefon}
          onChange={event => setTelefon(event.target.value)}
        />
      </div>
    </>
  )
}

export default StudentContactPerson
