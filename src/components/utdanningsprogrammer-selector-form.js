import React, { useEffect, useState } from 'react'
import useGrep from '../hooks/use-grep'
import { Select } from '@vtfk/components'
import KlassetrinnSelectorForm from './klassetrinn-selector-form'

function Programomrader ({ data, trinn, setKompetansemaal, setProgramomraade, showError }) {
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
      const { maal, ...program } = filteredData.find(item => item.kode === selectedOmrade.value)
      setProgramomraade(program)
      setKompetansemaal(maal)
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
        error={showError}
      />
    </div>
  )
}

function Utdanningsprogrammer ({ data, setQuery, setUtdanningsprogram, showError }) {
  const [selectedProgram, setSelectedProgram] = useState()

  useEffect(() => {
    if (selectedProgram) {
      setUtdanningsprogram(selectedProgram)
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
        error={showError}
      />
    </div>
  )
}

function UtdanningsprogrammerSelectorForm ({ fetcher, setKompetansemaal, setKlassetrinn, setUtdanningsprogram, setProgramomraade, showError, startOpen }) {
  const [selectedKlassetrinn, setSelectedKlassetrinn] = useState()
  const {
    utdanningsprogrammer,
    programomrader,
    setQuery
  } = useGrep(fetcher)

  useEffect(() => {
    setKlassetrinn(selectedKlassetrinn)
  }, [selectedKlassetrinn])

  useEffect(() => {
    setQuery('')
  }, [])

  const getError = (type) => `Du må velge ${type} du vil hente kompetansemål fra`

  return (
    <>
      <KlassetrinnSelectorForm setSelected={setSelectedKlassetrinn} title='Hent kompetansemål fra' startOpen={startOpen} showError={!selectedKlassetrinn && showError && getError('trinnet')} />
      {utdanningsprogrammer && selectedKlassetrinn && <Utdanningsprogrammer data={utdanningsprogrammer.data} setQuery={setQuery} setUtdanningsprogram={setUtdanningsprogram} showError={!programomrader && showError && getError('utdanningsprogrammet')} />}
      {programomrader && selectedKlassetrinn && <Programomrader data={programomrader.data} trinn={selectedKlassetrinn} setKompetansemaal={setKompetansemaal} setProgramomraade={setProgramomraade} showError={showError && getError('programområdet')} />}
    </>
  )
}

export default UtdanningsprogrammerSelectorForm
