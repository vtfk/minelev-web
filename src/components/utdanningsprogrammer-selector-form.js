import React, { useState } from 'react'
// import useGrep from '../hooks/use-grep'
import { Select } from '../../_lib-components/Select'

function UtdanningsprogrammerSelectorForm () {
  const [select, setSelect] = useState('VG1')
  return (
    <div className='input-element'>
      <Select
        placeholder='Velg klassetrinn'
        items={[
          { value: 'VG1', label: 'VG 1' },
          { value: 'VG2', label: 'VG 2' },
          { value: 'VG2', label: 'VG 3' }
        ]}
        selectedItem={select}
        onChange={(item) => { setSelect(item) }}
      />
    </div>
  )
}

export default UtdanningsprogrammerSelectorForm
