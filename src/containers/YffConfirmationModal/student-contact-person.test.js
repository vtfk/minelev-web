import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StudentContactPerson from './student-contact-person'

describe('Tester komponenten StudenContactPerson', () => {
  test('Komponenten rendrer som den skal', () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    const { container } = render(<StudentContactPerson showError={mockShowError} setHasError={mockSetHasError} />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    render(<StudentContactPerson showError={mockShowError} setHasError={mockSetHasError} />)
    expect(screen.getByPlaceholderText(/navn/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/telefon/i)).toBeInTheDocument()
    const navnefelt = screen.getByPlaceholderText(/navn/i)
    const telefonfelt = screen.getByPlaceholderText(/telefon/i)
    userEvent.type(navnefelt, 'her er mitt navn')
    userEvent.type(telefonfelt, '12345678')
    expect(screen.getByText(/navn/i)).toBeInTheDocument()
    expect(screen.getByText(/telefon/i)).toBeInTheDocument()
    expect(navnefelt.value).toBe('her er mitt navn')
    expect(telefonfelt.value).toBe('12345678')
  })

  test('komponenten kan slettes', async () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    const { container } = render(<StudentContactPerson showError={mockShowError} setHasError={mockSetHasError} />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByLabelText(/slett pårørende/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
