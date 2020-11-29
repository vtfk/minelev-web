import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanySelector from './company-selector'
import brregData from '../../mocks/vtfk.json'

describe('Tester at CompanySelector oppfører seg som forventet', () => {
  test('Komponenten vises IKKE om det ikke er data fra brreg', () => {
    const { container } = render(<CompanySelector />)
    expect(container).toBeEmptyDOMElement()
  })

  test('Komponenten VISES dersom data fra brreg', () => {
    render(<CompanySelector brregData={brregData} />)
    expect(screen.getByText(/fant 15 bedrifter/i)).toBeInTheDocument()
  })

  test('komponenten sender valgt data videre', () => {
    const mockSetCompany = jest.fn()
    render(<CompanySelector brregData={brregData} setCompany={mockSetCompany} />)
    const item = screen.getByText(/vestfold og telemark fylkeskommune avd tønsberg pp-tjenesten/i)
    userEvent.click(item)
    expect(screen.getByText(/vestfold og telemark fylkeskommune avd tønsberg pp-tjenesten/i)).toBeInTheDocument()
    expect(mockSetCompany).toHaveBeenCalledTimes(1)
  })
})
