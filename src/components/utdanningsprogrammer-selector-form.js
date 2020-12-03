import React, { useEffect, useState } from 'react'
import { useSession } from '@vtfk/react-msal'
import useGrep from '../hooks/use-grep'
import { Select } from '../_lib-components/Select'

function Utdanningsprogrammer ({ data }) {
  const [select, setSelect] = useState('')
  if (!data) {
    return null
  }
  const items = data.map(item => {
    const { kode, tittel } = item
    return {
      value: kode,
      label: tittel.nb
    }
  })
  return (
    <div className='input-element'>
      <Select
        placeholder='Velg klassetrinn'
        items={items}
        selectedItem={select}
        onChange={(item) => { setSelect(item) }}
        isOpen
        closeOnSelect
      />
    </div>
  )
}

function UtdanningsprogrammerSelectorForm () {
  const [select, setSelect] = useState('VG1')
  const [programomrader, setProgramomrader] = useState([])
  const { apiGet } = useSession()
  const { data, setQuery } = useGrep(apiGet)



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
      <Utdanningsprogrammer data={data} />
    </div>
  )
}

export default UtdanningsprogrammerSelectorForm
