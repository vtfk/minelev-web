import React, { useEffect, useState } from 'react'
import useBrreg from '../../hooks/use-brreg'
import { TextField } from '../../_lib-components/TextField'

const NoneFound = props => {
  const { searchValue, data } = props
  const kanViseKomponent = searchValue && (data && data.data && data.data.length === 0)
  if (!kanViseKomponent) {
    return null
  }
  return (
    <div>
      Ingen funnet, vennligst forsøk andre søkefraser
    </div>
  )
}

const EntitySearch = props => {
  const { setBrregData, fetcher } = props
  const [searchValue, setSearchValue] = useState('')
  const {
    data,
    setQuery
  } = useBrreg(fetcher)

  function startBrregSok (event) {
    if (event.key === 'Enter' || event.type === 'click' || event.type === 'blur') {
      setQuery(searchValue)
    }
  }

  useEffect(() => {
    if (data) {
      setBrregData(data)
    }
  }, [data])

  return (
    <div className='input-element'>
      <TextField
        hasSearchIcon
        value={searchValue}
        placeholder='Søk etter virksomheten hvor eleven skal på utplassering'
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={startBrregSok}
        onBlur={startBrregSok}
        searchAction={startBrregSok}
      />
      <NoneFound searchValue={searchValue} data={data} />
    </div>
  )
}

export default EntitySearch
