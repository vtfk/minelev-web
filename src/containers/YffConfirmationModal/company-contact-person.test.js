import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyContactPerson from './company-contact-person'

describe('Tester komponenten CompanyContactPerson', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<CompanyContactPerson />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    render(<CompanyContactPerson showError />)

    // Initial load
    expect(await screen.queryByText(/kontaktpersonens navn/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/telefon/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/e-post/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/avdeling/i)).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText(/kontaktpersonens navn/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/telefon/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/e-post/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/avdeling/i)).toBeInTheDocument()

    // Validér navnefelt
    expect(await screen.queryByText(/du må angi navnet til kontaktpersonen/i)).toBeInTheDocument()
    const navnefelt = screen.getByPlaceholderText(/kontaktpersonens navn/i)
    userEvent.type(navnefelt, 'navn navnesen')
    expect(navnefelt.value).toBe('navn navnesen')
    expect(screen.getByText(/kontaktpersonens navn/i)).toBeInTheDocument()
    expect(await screen.queryByText(/du må angi navnet til kontaktpersonen/i)).not.toBeInTheDocument()

    // Validér telefonfelt
    const telefonfelt = screen.getByPlaceholderText(/telefon \(valgfritt\)/i)
    userEvent.type(telefonfelt, 'her er mitt nummer')
    expect(telefonfelt.value).toBe('her er mitt nummer')
    expect(screen.getByText(/telefon \(valgfritt\)/i)).toBeInTheDocument()
    expect(await screen.queryByText(/du må angi et gyldig telefonnummer/i)).toBeInTheDocument()
    userEvent.type(telefonfelt, '81549300')
    expect(await screen.queryByText(/du må angi et gyldig telefonnummer/i)).not.toBeInTheDocument()

    // Validér e-postfelt
    const epostfelt = screen.getByPlaceholderText(/e-postadresse \(valgfritt\)/i)
    userEvent.type(epostfelt, 'email')
    expect(epostfelt.value).toBe('email')
    expect(screen.getByText(/e-postadresse \(valgfritt\)/i)).toBeInTheDocument()
    expect(await screen.queryByText(/du må angi en gyldig e-postadresse/i)).toBeInTheDocument()
    userEvent.type(epostfelt, 'email@example.com')
    expect(await screen.queryByText(/du må angi en gyldig e-postadresse/i)).not.toBeInTheDocument()

    // Validér avdeling
    const avdelingfelt = screen.getByPlaceholderText(/avdeling/i)
    userEvent.type(avdelingfelt, 'her er min avdeling')
    expect(avdelingfelt.value).toBe('her er min avdeling')
    expect(screen.getByText(/avdeling/i)).toBeInTheDocument()
  })

  test('komponenten kan slettes', async () => {
    const { container } = render(<CompanyContactPerson />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByLabelText(/slett kontaktperson/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
