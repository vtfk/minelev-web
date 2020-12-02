import { TextField } from '../../_lib-components/TextField'

const StudentContactPerson = ({ refName }) => {
  return (
    <>
      <div className='input-element'>
        <TextField
          name='parorendeNavn'
          placeholder='Navn'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='parorendeTelefon'
          placeholder='Telefon'
          ref={refName}
        />
      </div>
    </>
  )
}

export default StudentContactPerson
