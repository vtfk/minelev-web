import * as React from 'react'
import { useSession } from '@vtfk/react-msal'
import { API } from '../config/app'

/**
 * Send inn firmanavn, få svar fra Brreg
 * @param {}
 * @returns {Array<Function, Array>} setQuery og resultData
 */
function useBrreg () {
  const [data, setData] = React.useState(false)
  const [query, setQuery] = React.useState(false)
  const { apiGet } = useSession()

  React.useEffect(() => {
    async function queryBrreg (query) {
      const url = `${API.URL}/brreg/${query}`
      const data = await apiGet(url)
      setData(data)
    }
    if (query) {
      console.log('got query')
      queryBrreg(query)
    }
  }, [query, apiGet])

  return [data, setQuery]
}

export default useBrreg
