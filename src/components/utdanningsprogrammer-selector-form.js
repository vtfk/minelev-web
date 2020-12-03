import React, { useEffect, useState } from 'react'
import { useSession } from '@vtfk/react-msal'
import useGrep from '../hooks/use-grep'
import { Select } from '../_lib-components/Select'

function Programomrader ({ data, trinn }) {
  const [select, setSelect] = useState('')
  const [filteredData, setFilteredData] = useState(false)

  useEffect(() => {
    if (trinn && data) {
      const omrade = data[0].data
      const trinnData = omrade.trinn.find(item => item.kode === trinn.value)
      if (trinnData) {
        setFilteredData(trinnData.programomraader)
      }
    }
  }, [trinn, data])

  if (!filteredData) {
    return null
  }
  const items = filteredData.map(item => {
    const { kode, tittel } = item
    return {
      value: kode,
      label: tittel.nb
    }
  })
  return (
    <div className='input-element'>
      <Select
        placeholder='Velg programområde'
        items={items}
        selectedItem={select}
        onChange={(item) => { setSelect(item) }}
        isOpen
        closeOnSelect
      />
    </div>
  )
}

function Utdanningsprogrammer ({ data, setQuery }) {
  const [select, setSelect] = useState('')

  useEffect(() => {
    if (select !== '') {
      setQuery(select.value)
    }
  }, [select])
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
  const {
    utdanningsprogrammer,
    programomrader,
    setQuery
  } = useGrep(apiGet)

  useEffect(() => {
    setQuery('')
  }, [])

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
          isOpen
        />
      </div>
      {utdanningsprogrammer && select && <Utdanningsprogrammer data={utdanningsprogrammer.data} setQuery={setQuery} />}
      {programomrader && select && <Programomrader data={programomrader.data} trinn={select} />}
    </>
  )
}

export default UtdanningsprogrammerSelectorForm
