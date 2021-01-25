import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StudentContactPerson from './student-contact-person'

describe('Tester komponenten StudenContactPerson', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<StudentContactPerson />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    render(<StudentContactPerson showError />)

    // Validér navnefelt
    expect(await screen.queryByText(/du må angi navnet til den pårørende/i)).toBeInTheDocument()
    const navnefelt = screen.getByPlaceholderText(/navn/i)
    userEvent.type(navnefelt, 'navn navnesen')
    expect(navnefelt.value).toBe('navn navnesen')
    expect(await screen.queryByText(/du må angi navnet til den pårørende/i)).not.toBeInTheDocument()

    // Validér telefonfelt
    expect(await screen.queryByText(/du må angi et telefonnummer til den pårørende/i)).toBeInTheDocument()
    const telefonfelt = screen.getByPlaceholderText(/telefon/i)
    userEvent.type(telefonfelt, 'her er mitt nummer')
    expect(telefonfelt.value).toBe('her er mitt nummer')
    expect(await screen.queryByText(/du må angi et gyldig telefonnummer/i)).toBeInTheDocument()
    userEvent.type(telefonfelt, '81549300')
    expect(await screen.queryByText(/du må angi et gyldig telefonnummer/i)).not.toBeInTheDocument()
    expect(await screen.queryByText(/du må angi et telefonnummer til den pårørende/i)).not.toBeInTheDocument()
  })

  test('komponenten kan slettes', async () => {
    const { container } = render(<StudentContactPerson />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByLabelText(/slett pårørende/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
