import { render } from '@testing-library/react'
import Yff from './yff'

describe('Tester Yff komponenten', () => {
  test('Komponenten rendres ikke uten student', () => {
    const { container } = render(<Yff />)
    expect(container).toBeEmptyDOMElement()
  })
})
