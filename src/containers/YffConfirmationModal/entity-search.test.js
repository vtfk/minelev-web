import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    userEvent.type(input, 'vtfk')
    expect(input.value).toBe('vtfk')

    await act(() => userEvent.type(input, 'vtfk{enter}'))
    expect(mockFetcher).toBeCalledTimes(1)
    expect(mockSetBrregData).toBeCalledTimes(1)
  })
})
