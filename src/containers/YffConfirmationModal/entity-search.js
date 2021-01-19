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
  const { setBrregData, fetcher } = props
  const { data, setQuery } = useBrreg(fetcher)
  const [searchValue, setSearchValue] = useState('')

  function startBrregSok (event) {
    if (event.key === 'Enter' || event.type === 'click' || event.type === 'blur') {
      setQuery(searchValue)
    }
  }

  useEffect(() => {
    if (data) setBrregData(data)
  }, [data])

  return (
    <div className='input-element'>
      <SearchField
        placeholder='Søk etter virksomheten hvor eleven skal på utplassering'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onBlur={startBrregSok}
        onSearch={setQuery}
      />
      <NoneFound searchValue={searchValue} data={data} />
    </div>
  )
}

export default EntitySearch
