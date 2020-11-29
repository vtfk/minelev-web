import React, { useState } from 'react'
import { Select } from '../../_lib-components/Select'

const BedriftVelger = props => {
  const { brregData } = props
  const [select, setSelect] = useState(null)
  const kanViseKomponent = brregData && brregData.count && brregData.count > 0
  if (!kanViseKomponent) {
    return null
  }
  const bedrifter = brregData.data || []
  const items = bedrifter.map(bedrift => Object.assign({}, { value: bedrift.orgnr, label: bedrift.navn }))
  return (
    <>
      <h2 className='subheader'>Fant {items.length} bedrifter</h2>
      <div className='input-element'>
        <Select
          placeholder='Velg bedrift for utplassering'
          items={items}
          selectedItem={select}
          onChange={(item) => { setSelect(item) }}
        />
      </div>
    </>
  )
}

export default BedriftVelger
