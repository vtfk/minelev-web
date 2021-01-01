import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyContactPerson from './company-contact-person'

describe('Tester komponenten CompanyContactPerson', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<CompanyContactPerson />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    render(<CompanyContactPerson />)
    expect(await screen.queryByText(/kontaktperson/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/telefon/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/e-post/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/avdeling/i)).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText(/kontaktperson/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/telefon/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/e-post/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/avdeling/i)).toBeInTheDocument()
    const navnefelt = screen.getByPlaceholderText(/kontaktperson/i)
    const telefonfelt = screen.getByPlaceholderText(/telefon/i)
    const epostfelt = screen.getByPlaceholderText(/e-post/i)
    const avdelingfelt = screen.getByPlaceholderText(/avdeling/i)
    userEvent.type(navnefelt, 'her er mitt navn')
    userEvent.type(telefonfelt, 'her er mitt nummer')
    userEvent.type(epostfelt, 'her er min mail')
    userEvent.type(avdelingfelt, 'her er min avdeling')
    expect(screen.getByText(/kontaktperson/i)).toBeInTheDocument()
    expect(screen.getByText(/telefon/i)).toBeInTheDocument()
    expect(screen.getByText(/e-post/i)).toBeInTheDocument()
    expect(screen.getByText(/avdeling/i)).toBeInTheDocument()
    expect(navnefelt.value).toBe('her er mitt navn')
    expect(telefonfelt.value).toBe('her er mitt nummer')
    expect(epostfelt.value).toBe('her er min mail')
    expect(avdelingfelt.value).toBe('her er min avdeling')
  })
})
