import { render } from '@testing-library/react'
import Yff from './yff'

describe('Tester Yff komponenten', () => {
  test('Komponenten rendres ikke uten student', () => {
    const { container } = render(<Yff />)
    expect(container).toBeEmptyDOMElement()
  })

  test('Komponenten rendres ikke for student uten YFF', () => {
    const student = {
      programomraade: {
        type: 'studieforberedende'
      },
      utdanningsprogram: {
        type: 'Ukjent'
      }
    }
    const { container } = render(<Yff student={student} />)
    expect(container).toBeEmptyDOMElement()
  })
})
