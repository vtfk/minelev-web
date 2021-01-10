import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'

const StudentContactPerson = () => {
  const [navn, setNavn] = useState('')
  const [telefon, setTelefon] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleClose = event => {
    event.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      setIsDeleted(true)
    }, 500)
  }

  if (isDeleted) return null

  return (
    <Collapse isOpened={isOpen}>
      <button className='add-more-button button-left-icon button-primary' onClick={handleClose}>
        <div className='button-left-icon-icon'>
          <Icon name='close' size='small' />
        </div>
        <div className='button-left-icon-text'>
          Slett
        </div>
      </button>
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
    </Collapse>
  )
}

export default StudentContactPerson
