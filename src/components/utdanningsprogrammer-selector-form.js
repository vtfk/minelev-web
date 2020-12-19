import React, { useEffect, useState } from 'react'
import useGrep from '../hooks/use-grep'
import { Select } from '../_lib-components/Select'
import KlassetrinnSelectorForm from './klassetrinn-selector-form'

function Programomrader ({ data, trinn, setKompetansemaal }) {
  const [selectedOmrade, setSelectedOmrade] = useState()
  const [filteredData, setFilteredData] = useState(false)

  useEffect(() => {
    if (trinn && data) {
      const trinnData = data.trinn.find(item => item.kode === trinn.value)
      if (trinnData) {
        setFilteredData(trinnData.programomraader)
      }
    }
  }, [trinn, data])

  useEffect(() => {
    if (selectedOmrade && typeof setKompetansemaal === 'function') {
      const program = filteredData.find(item => item.kode === selectedOmrade.value)
      setKompetansemaal(program.maal)
    }
  }, [selectedOmrade, filteredData])

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
        selectedItem={selectedOmrade}
        onChange={(item) => { setSelectedOmrade(item) }}
        isOpen
        closeOnSelect
      />
    </div>
  )
}

function Utdanningsprogrammer ({ data, setQuery }) {
  const [selectedProgram, setSelectedProgram] = useState()

  useEffect(() => {
    if (selectedProgram) {
      setQuery(selectedProgram.value)
    }
  }, [selectedProgram])
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
        selectedItem={selectedProgram}
        onChange={(item) => { setSelectedProgram(item) }}
        isOpen
        closeOnSelect
      />
    </div>
  )
}

function UtdanningsprogrammerSelectorForm (props) {
  const [selectedKlassetrinn, setSelectedKlassetrinn] = useState()
  const { fetcher, setKompetansemaal } = props
  const {
    utdanningsprogrammer,
    programomrader,
    setQuery
  } = useGrep(fetcher)

  useEffect(() => {
    setQuery('')
  }, [])

  return (
    <>
      <KlassetrinnSelectorForm setSelected={setSelectedKlassetrinn} title='Hent kompetansemål fra' />
      {utdanningsprogrammer && selectedKlassetrinn && <Utdanningsprogrammer data={utdanningsprogrammer.data} setQuery={setQuery} />}
      {programomrader && selectedKlassetrinn && <Programomrader data={programomrader.data} trinn={selectedKlassetrinn} setKompetansemaal={setKompetansemaal} />}
    </>
  )
}

export default UtdanningsprogrammerSelectorForm
