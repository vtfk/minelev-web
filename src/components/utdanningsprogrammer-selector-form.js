import React, { useState } from 'react'
import { useSession } from '@vtfk/react-msal'
import useGrep from '../hooks/use-grep'
import { Select } from '../_lib-components/Select'

function Utdanningsprogrammer ({ data }) {
  const [select, setSelect] = useState('')
  console.log(data)
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
        placeholder='Velg utdanningsprogram'
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
  const [select, setSelect] = useState()
  const { apiGet } = useSession()
  const { data } = useGrep(apiGet)
  return (
    <>
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
      </div>
      {data && select && <Utdanningsprogrammer data={data.data} />}
    </>
  )
}

export default UtdanningsprogrammerSelectorForm
