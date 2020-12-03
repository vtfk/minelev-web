import * as React from 'react'
import { API } from '../config/app'

/**
 * @typedef {Object} Hook
 * @property {Array} data - resultatet fra grep
 * @property {string} query - spørringen mot grep
 * @property {Function} setQuery - setter ny query i state
 */

/**
 * Send inn kode, få utdanningsprogram fra grep api
 * @param {Function} fetcher funksjon for å hente data fra url
 * @returns {Hook} data og setQuery
 */
function useGrep (fetcher) {
  const [data, setData] = React.useState(false)
  const [query, setQuery] = React.useState('')

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
    query,
    setQuery
  }
}

export default useGrep
