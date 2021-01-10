import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { Icon } from '../../_lib-components/Icon'
import EpostFelt from '../../lib/epost-felt'

function KopiPrEpost () {
  const [isOpen, setIsOpen] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleClose = event => {
    event.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      setIsDeleted(true)
    }, 500)
  }

  if (isDeleted) return false

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
      <EpostFelt name='kopiPrEpost' placeholder='Send kopi på e-post' />
    </Collapse>
  )
}

export default KopiPrEpost
