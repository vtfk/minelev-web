import React, { useState, useEffect } from 'react'
import { Select } from '../../_lib-components/Select'
import { Paragraph } from '../../_lib-components/Typography'

const CompanySelector = props => {
  const { brregData, setCompany, showError } = props
  const [select, setSelect] = useState(null)
  const [error, setError] = useState(false)

  const kanViseKomponent = brregData && brregData.count && brregData.count > 0
  const bedrifter = brregData ? brregData.data : []

  const validateValue = (value) => {
    if (!value) setError('Du må velge en bedrift')
    else setError(false)
  }

  useEffect(() => {
    if (select) {
      setCompany(bedrifter.find(bedrift => bedrift.orgnr === select.value))
    }
  }, [select])

  useEffect(() => {
    validateValue(select)
  }, [select])

  if (!kanViseKomponent) return null

  const items = bedrifter.map(bedrift => Object.assign({}, { value: bedrift.orgnr, label: bedrift.navn }))
  return (
    <>
      {
        !select &&
          <Paragraph className='subtitle'>{`Fant ${items.length === 0 ? 'ingen' : items.length} bedrifter...`}</Paragraph>
      }
      <div className='input-element'>
        <Select
          placeholder='Velg bedrift for utplassering'
          items={items}
          selectedItem={select}
          onChange={item => setSelect(item)}
          error={!!showError && error}
          isOpen
          closeOnSelect
        />
      </div>
    </>
  )
}

export default CompanySelector
