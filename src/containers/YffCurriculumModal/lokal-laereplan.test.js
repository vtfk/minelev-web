import axios from 'axios'
import { act, cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LokalLaereplan from './lokal-laereplan'

const fetcher = async url => {
  const { data } = await axios.get(url)
  return data
}

const deleter = async url => {
  const { data } = await axios.delete(url)
  return data
}

const selectedStudentId = 'tro1407'

afterEach(cleanup)

describe('tester komponenten LokalLaereplan', () => {
  test('Komponenten rendrer som forventet', async () => {
    render(<LokalLaereplan deleter={deleter} fetcher={fetcher} selectedStudentId={selectedStudentId} />)
    await waitFor(() => screen.getByText(/utføre fundamentering/i))
    expect(screen.getByText(/bruke relevant måleutstyr/i)).toBeInTheDocument()
  })

  test('Man kan slette mål', async () => {
    render(<LokalLaereplan deleter={deleter} fetcher={fetcher} selectedStudentId={selectedStudentId} />)
    await waitFor(() => screen.getByText(/utføre fundamentering/i))
    expect(screen.getByText(/bruke relevant måleutstyr/i)).toBeInTheDocument()
    const sletteKnapp = screen.getAllByText(/fjern/i)[2]
    act(() => {
      userEvent.click(sletteKnapp)
    })
    expect(await screen.queryByText(/bruke relevant måleutstyr/i)).not.toBeInTheDocument()
  })
})
