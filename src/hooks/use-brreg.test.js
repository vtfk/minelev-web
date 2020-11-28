import { renderHook, act } from '@testing-library/react-hooks'
import axios from 'axios'

import useBrreg from './use-brreg'

const fetcher = async url => {
  const { data } = await axios.get(url)
  return data
}

test('Sjekker grunnleggende funksjonalitet', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useBrreg(fetcher))
  // Tester initial state
  expect(result.current.data).toBe(false)

  act(() => {
    result.current.setQuery('')
  })

  expect(result.current.data).toBe(false)

  // Spør på bedriftsnavn
  act(() => {
    result.current.setQuery('dumdidam')
  })

  await waitForNextUpdate()

  expect(result.current.data.count).toBe(15)
})
