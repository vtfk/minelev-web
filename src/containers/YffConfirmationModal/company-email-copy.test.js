import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyEmailCopy from './company-email-copy'

describe('Tester komponenten CompanyEmailCopy', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<CompanyEmailCopy />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    render(<CompanyEmailCopy showError />)
    // Initial load
    expect(await screen.queryByText(/du må angi en e-postadresse/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/e-postadresse/i)).toBeInTheDocument()

    // Validér e-postfelt
    const epostfelt = screen.getByPlaceholderText(/e-postadresse/i)
    userEvent.type(epostfelt, 'email')
    expect(epostfelt.value).toBe('email')
    expect(screen.getByText(/e-postadresse[\^n]/i)).toBeInTheDocument()
    expect(await screen.queryByText(/e-postadressen er ugyldig/i)).toBeInTheDocument()
    userEvent.type(epostfelt, 'email@example.com')
    expect(await screen.queryByText(/e-postadressen er ugyldig/i)).not.toBeInTheDocument()
  })

  test('komponenten kan slettes', async () => {
    const { container } = render(<CompanyEmailCopy />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByLabelText(/slett kopimottager/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
