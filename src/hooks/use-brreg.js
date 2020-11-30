/** @module useBrreg */
import * as React from 'react'
import { API } from '../config/app'

/**
 * @typedef {Object} Hook
 * @property {Array} data - resultatet fra brreg
 * @property {string} query - spørringen mot brreg
 * @property {Function} setQuery - setter ny query i state
 */

/**
 * Send inn firmanavn, få svar fra Brreg
 * @param {Function} fetcher funksjon for å hente data fra url
 * @return {Hook} data, query, setQuery
 */

function useBrreg (fetcher) {
  const [data, setData] = React.useState(false)
  const [query, setQuery] = React.useState('')

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
    query,
    setQuery
  }
}

export default useBrreg
