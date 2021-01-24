import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyEmailCopy from './company-email-copy'

describe('Tester komponenten CompanyEmailCopy', () => {
  test('Komponenten rendrer som den skal', () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    const { container } = render(<CompanyEmailCopy showError={mockShowError} setHasError={mockSetHasError} />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    render(<CompanyEmailCopy showError={mockShowError} setHasError={mockSetHasError} />)
    expect(screen.getByPlaceholderText(/e-postadresse/i)).toBeInTheDocument()
    const epostfelt = screen.getByPlaceholderText(/e-postadresse/i)
    userEvent.type(epostfelt, 'meg@example.com')
    expect(screen.getByText(/e-postadresse/i)).toBeInTheDocument()
    expect(epostfelt.value).toBe('meg@example.com')
  })

  test('komponenten kan slettes', async () => {
    const mockShowError = jest.fn()
    const mockSetHasError = jest.fn()
    const { container } = render(<CompanyEmailCopy showError={mockShowError} setHasError={mockSetHasError} />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByLabelText(/slett kopimottager/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
