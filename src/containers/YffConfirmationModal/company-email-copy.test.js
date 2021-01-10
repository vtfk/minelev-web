import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyEmailCopy from './company-email-copy'

describe('Tester komponenten CompanyEmailCopy', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<CompanyEmailCopy />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    render(<CompanyEmailCopy />)
    expect(await screen.queryByText(/send kopi på e-post/i)).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText(/send kopi på e-post/i)).toBeInTheDocument()
    const epostfelt = screen.getByPlaceholderText(/send kopi på e-post/i)
    userEvent.type(epostfelt, 'meg')
    userEvent.tab()
    expect(screen.getByText(/e-postadressen er ikke gyldig/i)).toBeInTheDocument()
    userEvent.type(epostfelt, '@example.com')
    expect(screen.getByText(/send kopi på e-post/i)).toBeInTheDocument()
    expect(epostfelt.value).toBe('meg@example.com')
  })

  test('komponenten kan slettes', async () => {
    const { container } = render(<CompanyEmailCopy />)
    expect(container).not.toBeEmptyDOMElement()
    const sletteKnapp = screen.getByText(/slett/i)
    userEvent.click(sletteKnapp)
    await waitForElementToBeRemoved(sletteKnapp)
    expect(container).toBeEmptyDOMElement()
  })
})
