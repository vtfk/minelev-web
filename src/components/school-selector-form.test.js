import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SchoolSelectorForm from './scool-selector-form'

describe('tester SchoolSelectorForm', () => {
  test('Komponenten rendrer som forventet', async () => {
    render(<SchoolSelectorForm />)
    expect(screen.getByText(/velg skole/i)).toBeInTheDocument()
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(screen.getByText(/porsgrunn videregående skole/i)).toBeInTheDocument()
  })

  test('Når man velger skole lukkes selecten', async () => {
    render(<SchoolSelectorForm />)
    expect(screen.getByText(/velg skole/i)).toBeInTheDocument()
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(screen.getByText(/porsgrunn videregående skole/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/rjukan videregående skole/i))
    expect(screen.getByText(/velg skole/i)).toBeInTheDocument()
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(await screen.queryByText(/porsgrunn videregående skole/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/rjukan videregående skole/i))
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(screen.getByText(/porsgrunn videregående skole/i)).toBeInTheDocument()
  })

  test('Når man trykker på valgt komponent åpnes selecten igjen', async () => {
    render(<SchoolSelectorForm />)
    expect(screen.getByText(/velg skole/i)).toBeInTheDocument()
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(screen.getByText(/porsgrunn videregående skole/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/rjukan videregående skole/i))
    expect(screen.getByText(/velg skole/i)).toBeInTheDocument()
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(await screen.queryByText(/porsgrunn videregående skole/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/rjukan videregående skole/i))
    expect(screen.getByText(/rjukan videregående skole/i)).toBeInTheDocument()
    expect(screen.getByText(/porsgrunn videregående skole/i)).toBeInTheDocument()
  })
})
