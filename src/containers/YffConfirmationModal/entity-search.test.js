import { act, fireEvent, render, screen } from '@testing-library/react'
import EntitySearch from './entity-search'

describe('Tester EntitySearch komponenten', () => {
  test('komponenten rendres som forventet', () => {
    render(<EntitySearch />)
    expect(screen.getByPlaceholderText(/søk etter virksomheten hvor eleven skal på utplassering/i)).toBeInTheDocument()
  })

  test('komponenten oppdaterer data ved søk', async () => {
    const mockFetcher = jest.fn(async () => 'data')
    const mockSetBrregData = jest.fn(data => data)
    render(<EntitySearch fetcher={mockFetcher} setBrregData={mockSetBrregData} />)
    const input = screen.getByPlaceholderText(/søk etter virksomheten hvor eleven skal på utplassering/i)
    act(() => {
      fireEvent.change(input, { target: { value: 'vtfk' } })
    })
    expect(input.value).toBe('vtfk')
    act(() => {
      fireEvent.keyDown(input, { key: 'Enter' })
    })
    expect(mockFetcher).toBeCalledTimes(1)
  })
})
