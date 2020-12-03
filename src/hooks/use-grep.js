import * as React from 'react'
import { API } from '../config/app'

/**
 * @typedef {Object} Hook
 * @property {Array} utdanningsprogrammer - utdanningsprogrammer fra grep
 * @property {Array} programomrader - programområder fra grep
 * @property {Function} setQuery - setter ny query i state
 */

/**
 * Send inn kode, få utdanningsprogram fra grep api
 * @param {Function} fetcher funksjon for å hente data fra url
 * @returns {Hook} data og setQuery
 */
function useGrep (fetcher) {
  const [utdanningsprogrammer, setUtdanningsprogrammer] = React.useState(false)
  const [programomrader, setProgramomrader] = React.useState(false)
  const [query, setQuery] = React.useState(false)

  React.useEffect(() => {
    async function queryGrep (query) {
      const url = `${API.URL}/utdanningsprogrammer/${query}`
      const data = await fetcher(url)
      if (data && query === '') {
        setUtdanningsprogrammer(data)
      } else if (data && query !== '' && query !== false) {
        setProgramomrader(data)
      }
    }
    queryGrep(query)
  }, [query, fetcher])

  return {
    utdanningsprogrammer,
    programomrader,
    setQuery
  }
}

export default useGrep
