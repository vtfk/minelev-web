import React, { useEffect, useState } from 'react'
import useBrreg from '../../hooks/use-brreg'
import { SearchField } from '../../_lib-components/SearchField'

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
  const { setBrregData, fetcher, showError } = props
  const { data, setQuery } = useBrreg(fetcher)
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)

  function startBrregSok (event) {
    if (event.key === 'Enter' || event.type === 'click' || event.type === 'blur') {
      setQuery(searchValue)
    }
  }
  
  const validateValue = (value) => {
    if(!value) setError('Du må søke etter en bedrift')
    else setError(false)
  }

  const onChange = (value) => {
    setSearchValue(value)
    validateValue(value)
  }
  
  
  useEffect(() => {
    if (data) setBrregData(data)
    validateValue(searchValue)  
  }, [data])

  return (
    <div className='input-element'>
      <SearchField
        placeholder='Søk etter virksomheten hvor eleven skal på utplassering'
        value={searchValue}
        onChange={event => onChange(event.target.value)}
        onBlur={startBrregSok}
        onSearch={setQuery}
        error={!!showError && error ? error : false}
      />
      <NoneFound searchValue={searchValue} data={data} />
    </div>
  )
}

export default EntitySearch
