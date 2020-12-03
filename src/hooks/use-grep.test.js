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
  expect(result.current.utdanningsprogrammer).toBe(false)
  expect(result.current.programomrader).toBe(false)

  // Henter alle utdanningsprogrammer
  act(() => {
    result.current.setQuery('')
  })

  await waitForNextUpdate()

  expect(result.current.utdanningsprogrammer.count).toBe(17)
  expect(result.current.programomrader).toBe(false)

  // Spør på grep kode
  act(() => {
    result.current.setQuery('ba')
  })

  await waitForNextUpdate()

  expect(result.current.programomrader.count).toBe(1)
  expect(result.current.utdanningsprogrammer.count).toBe(17)
})
