import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EpostFelt from './epost-felt'

describe('Tester komponenten EpostFelt', () => {
  test('Komponenten rendrer som den skal', () => {
    const { container } = render(<EpostFelt name='epost' placeholder='placeholder' />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('komponenten fungerer som forventet', async () => {
    render(<EpostFelt name='epost' placeholder='Send kopi på e-post' />)
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
})
