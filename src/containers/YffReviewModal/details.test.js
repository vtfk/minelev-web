import { render, screen } from '@testing-library/react'
import Details from './details'
import { utplassering } from '../../mocks/yff'

describe('Tester komponenten Details', () => {
  test('Komponenten vises IKKE uten data', () => {
    const { container } = render(<Details />)
    expect(container).toBeEmptyDOMElement()
  })

  test('Komponenten VISES med data fra utplasseringen', () => {
    const { container } = render(<Details utplassering={utplassering} />)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('Innholdet med data fra utplasseringen vises som forventet', () => {
    render(<Details utplassering={utplassering} />)
    expect(screen.getByText(/fornavn etternavn, 98765432, fornavn.etternavn@notodden.kommune.no/i)).toBeInTheDocument()
    expect(screen.getByText(/3 dager i uken/i)).toBeInTheDocument()
    expect(screen.getByText(/NOTODDEN KOMMUNE BY\/HEDDAL HJEMMETJENESTE/i)).toBeInTheDocument()
    expect(screen.getByText(/19. august 2019 - 20. oktober 2019/i)).toBeInTheDocument()
  })
})
