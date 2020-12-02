import { TextField } from '../../_lib-components/TextField'

const OrganisasjonKontaktperson = ({ refName }) => {
  return (
    <>
      <div className='input-element'>
        <TextField
          name='kontaktpersonNavn'
          placeholder='Kontaktperson'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonTelefon'
          placeholder='Telefon'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonEpost'
          placeholder='E-post'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonAvdeling'
          placeholder='Avdeling'
          ref={refName}
        />
      </div>
    </>
  )
}

export default OrganisasjonKontaktperson
