import repackBekreftelse from './repack-bekreftelse'
import bekreftelse from '../mocks/bekreftelse-raw-data-form.json'
const company = {}

describe('tester repack-bekreftelse', () => {
  test('den pakker kopiPrEpost som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { kopiPrEpost } = repacked.bekreftelse
    expect(Array.isArray(kopiPrEpost)).toBeTruthy()
    expect(kopiPrEpost.length).toBe(3)
  })

  test('den pakker kontaktpersoner som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { kontaktPersoner } = repacked.bekreftelse
    expect(Array.isArray(kontaktPersoner)).toBeTruthy()
    expect(kontaktPersoner.length).toBe(3)
  })

  test('den pakker pårørende som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { parorende } = repacked.bekreftelse
    expect(Array.isArray(parorende)).toBeTruthy()
    expect(parorende.length).toBe(2)
  })
})
