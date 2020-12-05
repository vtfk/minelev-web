import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import KlassetrinnSelectorForm from './klassetrinn-selector-form'

describe('tester KlassetrinnSelectorForm', () => {
  test('Komponenten rendrer som forventet', async () => {
    render(<KlassetrinnSelectorForm />)
    expect(screen.getByText(/velg klassetrinn/i)).toBeInTheDocument()
    expect(screen.getByText(/vg 1/i)).toBeInTheDocument()
    expect(screen.getByText(/vg 3/i)).toBeInTheDocument()
  })

  test('Når man velger klassetrinn lukkes selecten', async () => {
    render(<KlassetrinnSelectorForm />)

    userEvent.click(screen.getByText(/vg 3/i))
    expect(screen.getByText(/velg klassetrinn/i)).toBeInTheDocument()
    expect(screen.getByText(/vg 3/i)).toBeInTheDocument()
    expect(await screen.queryByText(/vg 1/i)).not.toBeInTheDocument()
  })

  test('Når man trykker på valgt komponent åpnes selecten igjen', async () => {
    render(<KlassetrinnSelectorForm />)

    userEvent.click(screen.getByText(/vg 3/i))
    expect(screen.getByText(/velg klassetrinn/i)).toBeInTheDocument()
    expect(screen.getByText(/vg 3/i)).toBeInTheDocument()
    expect(await screen.queryByText(/v g 1/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/vg 3/i))
    expect(screen.getByText(/vg 3/i)).toBeInTheDocument()
    expect(screen.getByText(/vg 1/i)).toBeInTheDocument()
  })
})
