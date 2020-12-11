import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Evaluation from './evaluation'

describe('tester komponenten Evaluation', () => {
  test('komponenten rendrer', () => {
    render(<Evaluation />)
    expect(screen.getByText(/virksomhetens inntrykk av eleven/i)).toBeInTheDocument()
  })
  test('det man velger blir valgt', () => {
    render(<Evaluation />)
    const valg = screen.queryAllByLabelText(/som forventet/i)[0]
    expect(valg.checked).toEqual(false)
    userEvent.click(valg)
    expect(valg.checked).toEqual(true)
  })
})
