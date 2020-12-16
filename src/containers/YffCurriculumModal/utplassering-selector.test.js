import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UtplasseringSelector from './utplassering-selector'

describe('Tester UtplasseringSelector', () => {
  test('Komponenten rendrer som default', () => {
    const mockSetUtplassering = jest.fn()
    const { container } = render(<UtplasseringSelector setUtplassering={mockSetUtplassering} />)
    expect(container).not.toBeEmptyDOMElement()
    expect(mockSetUtplassering).toHaveBeenCalledTimes(1)
  })
  test('Komponenten har skole som default valgt', () => {
    const mockSetUtplassering = jest.fn()
    render(<UtplasseringSelector setUtplassering={mockSetUtplassering} />)
    expect(mockSetUtplassering).toHaveBeenCalledTimes(1)
    expect(screen.getByText(/skole/i)).toBeInTheDocument()
  })
  test('Komponenten kan utvides for å velge UB', () => {
    const mockSetUtplassering = jest.fn()
    render(<UtplasseringSelector setUtplassering={mockSetUtplassering} />)
    expect(mockSetUtplassering).toHaveBeenCalledTimes(1)
    const skoleKnapp = screen.getByText(/skole/i)
    userEvent.click(skoleKnapp)
    expect(screen.getByText(/ungdomsbedrift/i)).toBeInTheDocument()
  })
})
