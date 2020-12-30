import { useState } from 'react'
import { TextField } from '../../_lib-components/TextField'

const OrganisasjonKontaktperson = () => {
  const [kontaktNavn, setKontaktNavn] = useState('')
  const [kontaktTelefon, setKontaktTelefon] = useState('')
  const [kontaktEpost, setKontaktEpost] = useState('')
  const [kontaktAvdeling, setKontaktAvdeling] = useState('')

  return (
    <>
      <div className='input-element'>
        <TextField
          name='kontaktpersonNavn'
          placeholder='Kontaktperson'
          value={kontaktNavn}
          onChange={event => setKontaktNavn(event.target.value)}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonTelefon'
          placeholder='Telefon'
          value={kontaktTelefon}
          onChange={event => setKontaktTelefon(event.target.value)}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonEpost'
          placeholder='E-post'
          value={kontaktEpost}
          onChange={event => setKontaktEpost(event.target.value)}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonAvdeling'
          placeholder='Avdeling'
          value={kontaktAvdeling}
          onChange={event => setKontaktAvdeling(event.target.value)}
        />
      </div>
    </>
  )
}

export default OrganisasjonKontaktperson
