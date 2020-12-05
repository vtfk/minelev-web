import { TextField } from '../../_lib-components/TextField'

const OrganisasjonKontaktperson = () => {
  return (
    <>
      <div className='input-element'>
        <TextField
          name='kontaktpersonNavn'
          placeholder='Kontaktperson'
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonTelefon'
          placeholder='Telefon'
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonEpost'
          placeholder='E-post'
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonAvdeling'
          placeholder='Avdeling'
        />
      </div>
    </>
  )
}

export default OrganisasjonKontaktperson
