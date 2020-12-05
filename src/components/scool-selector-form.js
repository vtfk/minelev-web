import React, { useState } from 'react'
import { getSchools } from '@vtfk/company-info'
import { Select } from '../_lib-components/Select'

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

function SchoolSelectorForm () {
  const [select, setSelect] = useState()
  const schools = getSchools()
  const items = schools.filter(school => school.minelev.yff === true).map(school => {
    return {
      value: `${school.organizationNumber}-${idFromString(school.name.display)}`,
      label: school.name.display
    }
  })
  return (
    <div className='input-element'>
      <Select
        placeholder='Velg skole'
        items={items}
        selectedItem={select}
        onChange={(item) => { setSelect(item) }}
        isOpen
        closeOnSelect
      />
    </div>
  )
}

export default SchoolSelectorForm
