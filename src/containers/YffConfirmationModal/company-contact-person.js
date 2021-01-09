import { useState } from 'react'
import { TextField } from '../../_lib-components/TextField'
import EpostFelt from '../../lib/epost-felt'

const OrganisasjonKontaktperson = () => {
  const [kontaktNavn, setKontaktNavn] = useState('')
  const [kontaktTelefon, setKontaktTelefon] = useState('')
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
      <EpostFelt name='kontaktpersonEpost' placeholder='E-post' />
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
