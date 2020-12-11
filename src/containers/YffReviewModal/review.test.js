import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import maal from '../../mocks/laereplan'
import Review from './review'

describe('tester komponenten Review', () => {
  test('komponenten rendrer IKKE uten at mål er satt', () => {
    const { container } = render(<Review />)
    expect(container).toBeEmptyDOMElement()
  })

  test('komponenten rendrer når mål er satt', () => {
    render(<Review maal={maal} />)
    expect(screen.getByText(/kompetansemål og arbeidsoppgaver/i)).toBeInTheDocument()
  })

  test('det man velger blir valgt', () => {
    render(<Review maal={maal} />)
    const valg = screen.queryAllByLabelText(/middels måloppnåelse/i)[0]
    expect(valg.checked).toEqual(false)
    userEvent.click(valg)
    expect(valg.checked).toEqual(true)
  })
})
