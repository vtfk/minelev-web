import { useState } from 'react'
import { TextField } from '../../_lib-components/TextField'

const KopiPrEpost = () => {
  const [epost, setEpost] = useState('')

  return (
    <>
      <div className='input-element'>
        <TextField
          name='kopiPrEpost'
          placeholder='Send kopi på e-post'
          value={epost}
          onChange={event => setEpost(event.target.value)}
        />
      </div>
    </>
  )
}

export default KopiPrEpost
