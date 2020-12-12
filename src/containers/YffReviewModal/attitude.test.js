import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Attitude from './attitude'

describe('tester komponenten Attitude', () => {
  test('komponenten rendrer', () => {
    render(<Attitude />)
    expect(screen.getByText(/orden og atferd/i)).toBeInTheDocument()
  })
  test('det man velger blir valgt', () => {
    render(<Attitude />)
    const valg = screen.queryAllByLabelText(/som forventet/i)[0]
    expect(valg.checked).toEqual(false)
    userEvent.click(valg)
    expect(valg.checked).toEqual(true)
  })
})
