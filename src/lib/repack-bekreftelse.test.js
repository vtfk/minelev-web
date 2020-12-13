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
    const { kontaktpersonData } = repacked.bekreftelse
    expect(Array.isArray(kontaktpersonData)).toBeTruthy()
    expect(kontaktpersonData.length).toBe(3)
  })

  test('den pakker pårørende som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { parorendeData } = repacked.bekreftelse
    expect(Array.isArray(parorendeData)).toBeTruthy()
    expect(parorendeData.length).toBe(2)
  })
})
