import * as React from 'react'
import { API } from '../config/app'

/**
 * Send inn kode, få utdanningsprogram fra grep api
 * @param {<Promise>} fetcher funksjon for å hente data fra url
 * @returns {object} data og setQuery
 */
function useGrep (fetcher) {
  const [data, setData] = React.useState(false)
  const [query, setQuery] = React.useState(false)

  React.useEffect(() => {
    async function queryGrep (query) {
      const url = `${API.URL}/utdanningsprogrammer/${query}`
      const data = await fetcher(url)
      setData(data)
    }
    queryGrep(query)
  }, [query, fetcher])

  return {
    data,
    setQuery
  }
}

export default useGrep
