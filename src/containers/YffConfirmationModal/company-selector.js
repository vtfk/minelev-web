import React, { useState, useEffect } from 'react'
import { Select } from '../../_lib-components/Select'

const CompanySelector = props => {
  const { brregData, setCompany, showError } = props
  const [select, setSelect] = useState(null)
  const [error, setError] = useState(false)
  const kanViseKomponent = brregData && brregData.count && brregData.count > 0
  const bedrifter = brregData ? brregData.data : []

  useEffect(() => validateValue(), [brregData])
  
  useEffect(() => {
    if (select) {
      setCompany(bedrifter.find(bedrift => bedrift.orgnr === select.value))
    }
  }, [select])
  
  
  const validateValue = (value) => {
    if(!value) setError('Du må velge en bedrift')
    else setError(false)
  }

  const onChange = (item) => {
    setSelect(item)
    validateValue(item)
  }

  if (!kanViseKomponent) {
    return null
  }

  const items = bedrifter.map(bedrift => Object.assign({}, { value: bedrift.orgnr, label: bedrift.navn }))
  return (
    <>
      <h2 className='subheader'>Fant {items.length} bedrifter</h2>
      <div className='input-element'>
        <Select
          placeholder='Velg bedrift for utplassering'
          items={items}
          selectedItem={select}
          onChange={onChange}
          error={!!showError && error ? error : false}
          isOpen
          closeOnSelect
        />
      </div>
    </>
  )
}

export default CompanySelector
