import { screen, render } from '@testing-library/react'
import CompanyDetails from './company-details'
import data from '../../mocks/vtfk.json'
const company = data.data[12]

describe('Tester komponenten CompanyDetails', () => {
  test('Rendrer IKKE om den ikke har data', () => {
    const { container } = render(<CompanyDetails />)
    expect(container).toBeEmptyDOMElement()
  })

  test('Komponenten VISES om den har data', () => {
    const { container } = render(<CompanyDetails company={company} />)
    expect(container).not.toBeEmptyDOMElement()
    expect(screen.getByText(/vestfold og telemark fylkeskommune avd tønsberg pp-tjenesten/i)).toBeInTheDocument()
  })
})
