import { render, screen } from '@testing-library/react'
import BedriftVelger from './bedrift-velger'
import brregData from '../../mocks/vtfk.json'

describe('Tester at BedriftVelger oppfører seg som forventet', () => {
  test('Komponenten vises IKKE om det ikke er data fra brreg', () => {
    const { container } = render(<BedriftVelger />)
    expect(container).toBeEmptyDOMElement()
  })

  test('Komponenten VISES dersom data fra brreg', () => {
    render(<BedriftVelger brregData={brregData} />)
    expect(screen.getByText(/fant 15 bedrifter/i)).toBeInTheDocument()
  })
})
