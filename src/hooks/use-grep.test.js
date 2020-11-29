import { renderHook, act } from '@testing-library/react-hooks'
import axios from 'axios'

import useGrep from './use-grep'

const fetcher = async url => {
  const { data } = await axios.get(url)
  return data
}

test('Sjekker grunnleggende funksjonalitet', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useGrep(fetcher))
  // Tester initial state
  expect(result.current.data).toBe(false)

  // Henter alle utdanningsprogrammer
  act(() => {
    result.current.setQuery('')
  })

  await waitForNextUpdate()

  expect(result.current.data.count).toBe(17)

  // Spør på grep kode
  act(() => {
    result.current.setQuery('ba')
  })

  await waitForNextUpdate()

  expect(result.current.data.count).toBe(1)
})
