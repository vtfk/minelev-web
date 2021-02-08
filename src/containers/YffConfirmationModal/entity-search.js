import React, { useEffect, useState } from 'react'
import useBrreg from '../../hooks/use-brreg'
import { SearchField } from '@vtfk/components'

const EntitySearch = props => {
  const { setBrregData, fetcher, showError } = props
  const { data, setQuery } = useBrreg(fetcher)
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)

  const startBrregSok = event => {
    if (event.key === 'Enter' || event.type === 'click' || event.type === 'blur') {
      if (searchValue) setQuery(searchValue)
    }
  }

  const validateValue = value => {
    if (!value && showError) setError('Du må søke etter en bedrift')
    else setError(false)
  }

  useEffect(() => {
    if (data) setBrregData(data)
    if (searchValue && data && data.count === 0) setError('Ingen funnet, vennligst forsøk andre søkefraser')
  }, [data])

  useEffect(() => {
    validateValue(searchValue)
  }, [searchValue, showError])

  return (
    <div className='input-element'>
      <SearchField
        placeholder='Søk etter virksomheten hvor eleven skal på utplassering'
        value={searchValue}
        onChange={event => setSearchValue(event.target.value.trim())}
        onBlur={startBrregSok}
        onSearch={setQuery}
        error={error}
      />
    </div>
  )
}

export default EntitySearch
