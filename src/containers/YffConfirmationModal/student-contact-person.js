import { TextField } from '../../_lib-components/TextField'

const StudentContactPerson = () => {
  return (
    <>
      <div className='input-element'>
        <TextField
          name='parorendeNavn'
          placeholder='Navn'
        />
      </div>
      <div className='input-element'>
        <TextField
          name='parorendeTelefon'
          placeholder='Telefon'
        />
      </div>
    </>
  )
}

export default StudentContactPerson
