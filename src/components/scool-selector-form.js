import React, { useEffect, useState } from 'react'
import getSchools from 'vtfk-schools-info'
import { Select } from 'vtfk-component-library/ui/Select'

function idFromString (input) {
  input = input.toLowerCase()
  input = input.replace(/\s/g, '')
  input = input.replace(/\//g, '-')
  input = input.replace(/,/g, '-')
  input = input.replace(/\./g, '-')
  input = input.replace(/å/g, 'a')
  input = input.replace(/ø/g, 'o')
  input = input.replace(/æ/g, 'e')
  return input
}

function labelSort (a, b) {
  if (a.label < b.label) {
    return -1
  }
  if (a.label > b.label) {
    return 1
  }
  return 0
}

function SchoolSelectorForm ({ onSelect, showError }) {
  const [select, setSelect] = useState()
  const schools = getSchools()
  const items = schools.filter(school => school.yff === true).map(school => {
    return {
      value: `${school.schoolId}-${idFromString(school.name)}`,
      label: school.fullName
    }
  })
  items.sort(labelSort)

  useEffect(() => {
    if (onSelect) onSelect(select)
  }, [select])

  return (
    <div className='input-element'>
      <Select
        placeholder='Velg skole'
        items={items}
        selectedItem={select}
        onChange={(item) => { setSelect(item) }}
        isOpen
        closeOnSelect
        error={showError}
      />
    </div>
  )
}

export default SchoolSelectorForm
