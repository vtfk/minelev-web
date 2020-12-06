import axios from 'axios'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UtdanningsprogrammerSelectorForm from './utdanningsprogrammer-selector-form'

const fetcher = async url => {
  const { data } = await axios.get(url)
  return data
}

describe('tester utdanningsprogrammer-selector-form', () => {
  test('Komponenten rendrer som forventet', async () => {
    render(<UtdanningsprogrammerSelectorForm fetcher={fetcher} />)

    userEvent.click(screen.getByText(/vg 3/i))
    await waitFor(() => expect(screen.getByText(/velg utdanningsprogram/i)).toBeInTheDocument())
    expect(screen.getByText(/bygg- og anleggsteknikk/i)).toBeInTheDocument()
    expect(await screen.queryByText(/vg 2/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/bygg- og anleggsteknikk/i))
    await waitFor(() => expect(screen.getByText(/velg programområde/i)).toBeInTheDocument())
    expect(screen.getByText(/anleggsmaskinførerfaget/i)).toBeInTheDocument()
    expect(await screen.queryByText(/design og håndverk/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/betongfaget/i))
    expect(await screen.queryByText(/glassfaget/i)).not.toBeInTheDocument()
  })

  test('Komponenten sender kompetansemål videre i treet', async () => {
    const mockSetKompetansemaal = jest.fn()
    render(<UtdanningsprogrammerSelectorForm fetcher={fetcher} setKompetansemaal={mockSetKompetansemaal} />)

    userEvent.click(screen.getByText(/vg 3/i))
    await waitFor(() => expect(screen.getByText(/velg utdanningsprogram/i)).toBeInTheDocument())

    userEvent.click(screen.getByText(/bygg- og anleggsteknikk/i))
    await waitFor(() => expect(screen.getByText(/velg programområde/i)).toBeInTheDocument())

    userEvent.click(screen.getByText(/betongfaget/i))
    expect(await screen.queryByText(/glassfaget/i)).not.toBeInTheDocument()
    expect(mockSetKompetansemaal).toHaveBeenCalledTimes(1)
  })
})
