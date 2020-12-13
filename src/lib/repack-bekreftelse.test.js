import repackBekreftelse from './repack-bekreftelse'
import bekreftelse from '../mocks/bekreftelse-raw-data-form.json'
const company = {
  forradrland: 'Norge',
  ppostland: 'Norge',
  forradrpostnr: '3111',
  hovedenhet: '821227062',
  ansatte_antall: '15',
  forretningsadr: 'Nordbyen 40',
  postadresse: 'Postboks 2844',
  nkode3: '',
  ppoststed: 'SKIEN',
  forradrpoststed: 'TØNSBERG',
  nkode1: '85.601',
  nkode2: '',
  ansatte_dato: '11.11.2020',
  forradrkommnavn: 'TØNSBERG',
  organisasjonsform: 'BEDR',
  navn: 'VESTFOLD OG TELEMARK FYLKESKOMMUNE AVD TØNSBERG PP-TJENESTEN',
  orgnr: '973754807',
  forradrkommnr: '3803',
  regiaa: 'J',
  ppostnr: '3702'
}

const expectedBedriftsData = {
  organisasjonsNummer: '973754807',
  navn: 'VESTFOLD OG TELEMARK FYLKESKOMMUNE AVD TØNSBERG PP-TJENESTEN',
  adresse: 'Postboks 2844',
  postnummer: '3702',
  poststed: 'SKIEN',
  avdeling: 'Frivillighet og omdømme'
}

describe('tester repack-bekreftelse', () => {
  test('den pakker kopiPrEpost som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { kopiPrEpost } = repacked
    expect(Array.isArray(kopiPrEpost)).toBeTruthy()
    expect(kopiPrEpost.length).toBe(3)
  })

  test('den pakker kontaktpersoner som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { kontaktpersonData } = repacked
    expect(Array.isArray(kontaktpersonData)).toBeTruthy()
    expect(kontaktpersonData.length).toBe(3)
  })

  test('den pakker pårørende som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { parorendeData } = repacked
    expect(Array.isArray(parorendeData)).toBeTruthy()
    expect(parorendeData.length).toBe(2)
  })

  test('den pakker bedrift som forventet', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...company } })
    const { bedriftsNavn, bedriftsData } = repacked
    expect(bedriftsNavn).toBe('VESTFOLD OG TELEMARK FYLKESKOMMUNE AVD TØNSBERG PP-TJENESTEN')
    expect(bedriftsData).toStrictEqual(expectedBedriftsData)
  })
})
