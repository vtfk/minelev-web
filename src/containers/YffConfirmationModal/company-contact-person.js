import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import EpostFelt from '../../lib/epost-felt'

const OrganisasjonKontaktperson = () => {
  const [kontaktNavn, setKontaktNavn] = useState('')
  const [kontaktTelefon, setKontaktTelefon] = useState('')
  const [kontaktAvdeling, setKontaktAvdeling] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleClose = event => {
    event.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      setIsDeleted(true)
    }, 750)
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
    </Collapse>
  )
}

export default OrganisasjonKontaktperson
