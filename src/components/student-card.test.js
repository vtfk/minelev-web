import { render, screen } from '@testing-library/react'
import StudentCard from './student-card'
import { STUDENTS } from '../mocks/mock-data'

describe('tester StudentCard komponenten', () => {
  test('Komponenten rendrer skeleton uten student data', () => {
    render(<StudentCard />)
    expect(screen.getAllByTitle('Laster inn...')).toBeTruthy()
  })

  test('Komponenten rendrer skeleton når loading er satt til true', () => {
    const student = STUDENTS[0]
    render(<StudentCard student={student} loading />)
    expect(screen.getAllByTitle('Laster inn...')).toBeTruthy()
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
  test('komponenten skjuler skole om det er angitt', async () => {
    const student = STUDENTS[0]
    render(<StudentCard student={student} hideSchool />)
    expect(screen.queryByText(/testen videregående skole/i)).not.toBeInTheDocument()
  })
  test('komponenten skjuler klasse om det er angitt', async () => {
    const student = STUDENTS[0]
    render(<StudentCard student={student} hideClass />)
    expect(screen.queryByText(/TESVS:2STB/i)).not.toBeInTheDocument()
  })
  test('komponenten skjuler bursdag om det er angitt', async () => {
    const student = STUDENTS[0]
    render(<StudentCard student={student} hideBirthdate />)
    expect(await screen.queryByText(/17. juni 2004/i) || await screen.queryByText(/June 17, 2004/i)).not.toBeInTheDocument()
  })
  test('komponenten skjuler e-post om det er angitt', async () => {
    const student = STUDENTS[0]
    render(<StudentCard student={student} hideMail />)
    expect(screen.queryByText(/alv1706@skole.vtfk.no/i)).not.toBeInTheDocument()
  })
})
