import repackBekreftelse from './repack-yff-bekreftelse'
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

const companyAlternative = {
  forradrpostnr: '3715',
  ansatte_antall: '',
  postadresse: '',
  nkode3: '',
  ppoststed: '',
  organisasjonsform: 'FLI',
  navn: 'FAGFORBUNDET VESTFOLD OG TELEMARK FYLKESKOMMUNE AVD. 095',
  forretningsadr: 'c/o Fylkeshuset Fylkesbakken 10',
  forradrpoststed: 'SKIEN',
  tlf: '35 58 43 48',
  nkode1: '94.200',
  nkode2: '',
  forradrkommnavn: 'SKIEN',
  regdato: '09.05.1996',
  orgnr: '975658015',
  regiaa: 'N',
  ppostnr: ''
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

  test('den bruker forretningsadresse om postadresse er tom', () => {
    const repacked = repackBekreftelse({ bekreftelse: { ...bekreftelse }, company: { ...companyAlternative } })
    const { bedriftsData } = repacked
    const { adresse, postnummer, poststed } = bedriftsData
    expect(adresse).toBe('c/o Fylkeshuset Fylkesbakken 10')
    expect(postnummer).toBe('3715')
    expect(poststed).toBe('SKIEN')
  })
})
