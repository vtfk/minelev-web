import React, { useState } from 'react'
import { useSession } from '@vtfk/react-msal'
import useGrep from '../hooks/use-grep'
import { Select } from '../_lib-components/Select'

function UtdanningsprogrammerSelectorForm () {
  const [select, setSelect] = useState('VG1')
  const [filteredData, setFilteredData] = useState([])
  const { apiGet } = useSession()
  const { data } = useGrep(apiGet)

  return (
    <div className='input-element'>
      <Select
        placeholder='Velg klassetrinn'
        items={[
          { value: 'vg1', label: 'VG 1' },
          { value: 'vg2', label: 'VG 2' },
          { value: 'vg3', label: 'VG 3' }
        ]}
        selectedItem={select}
        onChange={(item) => { setSelect(item) }}
        closeOnSelect
      />
      {JSON.stringify(data)}
    </div>
  )
}

export default UtdanningsprogrammerSelectorForm
