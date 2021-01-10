import { useState } from 'react'
import { Icon } from '../../_lib-components/Icon'
import EpostFelt from '../../lib/epost-felt'

function KopiPrEpost () {
  const [isDeleted, setIsDeleted] = useState(false)

  if (isDeleted) return false

  return (
    <>
      <button className='add-more-button button-left-icon button-primary' onClick={() => setIsDeleted(true)}>
        <div className='button-left-icon-icon'>
          <Icon name='close' size='small' />
        </div>
        <div className='button-left-icon-text'>
          Slett
        </div>
      </button>
      <EpostFelt name='kopiPrEpost' placeholder='Send kopi på e-post' />
    </>
  )
}

export default KopiPrEpost
