import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyContactPerson from './company-contact-person'

describe('Tester komponenten CompanyContactPerson', () => {
  const mockShowError = jest.fn()
  const mockSetHasError = jest.fn()
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<CompanyContactPerson showError={mockShowError} setHasError={mockSetHasError} />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    render(<CompanyContactPerson showError={mockShowError} setHasError={mockSetHasError} />)
    expect(screen.getByPlaceholderText(/kontaktpersonens navn/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/telefon \(valgfritt\)/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/e-postadresse \(valgfritt\)/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/avdeling \(valgfritt\)/i)).toBeInTheDocument()
    const navnefelt = screen.getByPlaceholderText(/kontaktpersonens navn/i)
    const telefonfelt = screen.getByPlaceholderText(/telefon \(valgfritt\)/i)
    const epostfelt = screen.getByPlaceholderText(/e-postadresse \(valgfritt\)/i)
    const avdelingfelt = screen.getByPlaceholderText(/avdeling \(valgfritt\)/i)
    userEvent.type(navnefelt, 'her er mitt navn')
    userEvent.type(telefonfelt, '12345678')
    userEvent.type(epostfelt, 'email@example.com')
    userEvent.type(avdelingfelt, 'her er min avdeling')
    expect(screen.getByText(/kontaktpersonens navn/i)).toBeInTheDocument()
    expect(screen.getByText(/telefon \(valgfritt\)/i)).toBeInTheDocument()
    expect(screen.getByText(/e-postadresse \(valgfritt\)/i)).toBeInTheDocument()
    expect(screen.getByText(/avdeling \(valgfritt\)/i)).toBeInTheDocument()
    expect(navnefelt.value).toBe('her er mitt navn')
    expect(telefonfelt.value).toBe('12345678')
    expect(epostfelt.value).toBe('email@example.com')
    expect(avdelingfelt.value).toBe('her er min avdeling')
  })

  test('komponenten kan slettes', async () => {
    const { container } = render(<CompanyContactPerson showError={mockShowError} setHasError={mockSetHasError} />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByLabelText(/slett kontaktperson/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
