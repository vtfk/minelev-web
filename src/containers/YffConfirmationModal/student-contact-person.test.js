import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StudentContactPerson from './student-contact-person'

describe('Tester komponenten StudenContactPerson', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<StudentContactPerson />)
    expect(container).not.toBeEmptyDOMElement()
  })
  test('komponenten fungerer som forventet', async () => {
    render(<StudentContactPerson />)
    expect(await screen.queryByText(/navn/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/telefon/i)).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText(/navn/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/telefon/i)).toBeInTheDocument()
    const navnefelt = screen.getByPlaceholderText(/navn/i)
    const telefonfelt = screen.getByPlaceholderText(/telefon/i)
    userEvent.type(navnefelt, 'her er mitt navn')
    userEvent.type(telefonfelt, 'her er mitt nummer')
    expect(screen.getByText(/navn/i)).toBeInTheDocument()
    expect(screen.getByText(/telefon/i)).toBeInTheDocument()
    expect(navnefelt.value).toBe('her er mitt navn')
    expect(telefonfelt.value).toBe('her er mitt nummer')
  })
})
