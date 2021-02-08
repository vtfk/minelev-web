import React from 'react'
import {
  screen,
  render
} from '@testing-library/react'
import { InitialsBadge } from './index'

describe('tester InitialBadge komponenten', () => {
  test('It renders correct initials', () => {
    render(<InitialsBadge firstName='Bobben' lastName='Plancke' />)
    expect(screen.getByText(/B/)).toBeTruthy()
    expect(screen.getByText(/P/)).toBeTruthy()
  })
})
