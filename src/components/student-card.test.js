import { render, screen } from '@testing-library/react'
import StudentCard from './student-card'
import { STUDENTS } from '../mocks/mock-data'

describe('tester StudentCard komponenten', () => {
  test('Komponenten rendrer ikke uten student data', () => {
    const { container } = render(<StudentCard />)
    expect(container).toBeEmptyDOMElement()
  })
  test('komponenten rendres som forventet', async () => {
    const student = STUDENTS[0]
    render(<StudentCard student={student} />)
    expect(screen.getByText(/alvorlig/i)).toBeInTheDocument()
    expect(screen.getByText(/lykke/i)).toBeInTheDocument()
    expect(screen.getByText(/testen videregående skole/i)).toBeInTheDocument()
    expect(screen.getByText(/TESVS:2STB/i)).toBeInTheDocument()
    expect(await screen.queryByText(/17. juni 2004/i) || await screen.queryByText(/June 17, 2004/i)).toBeInTheDocument()
    expect(screen.getByText(/alv1706@skole.vtfk.no/i)).toBeInTheDocument()
  })
})
