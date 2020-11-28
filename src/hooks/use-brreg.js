import * as React from 'react'
import { API } from '../config/app'

/**
 * Send inn firmanavn, få svar fra Brreg
 * @param {fetcher} funksjon for å hente data fra url
 * @returns {object} data og setQuery
 */
function useBrreg (fetcher) {
  const [data, setData] = React.useState(false)
  const [query, setQuery] = React.useState(false)

  React.useEffect(() => {
    async function queryBrreg (query) {
      const url = `${API.URL}/brreg/${query}`
      const data = await fetcher(url)
      setData(data)
    }
    if (query) {
      queryBrreg(query)
    }
  }, [query, fetcher])

  return {
    data,
    setQuery
  }
}

export default useBrreg
