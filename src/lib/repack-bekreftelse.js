function arrify (input) {
  return Array.isArray(input) ? input : [input]
}

function fixCopyViaEmail (input) {
  return input.split(' ').filter(line => line !== ' ').filter(line => line !== '')
}

function mergeArrays (data) {
  const keys = Object.keys(data)
  const output = []
  data[keys[0]].forEach((element, index) => {
    const item = keys.reduce((obj, current) => {
      obj[current] = data[current][index]
      return obj
    }, {})
    output.push(item)
  })
  return output
}

function repackBekreftelse (data) {
  const { bekreftelse, company } = data
  // Gjør bekreftelse via e-post til array, fjerner tomme linjer
  bekreftelse.kopiPrEpost = fixCopyViaEmail(bekreftelse.kopiPrEpost)
  // oppdaterer kontaktpersoner
  bekreftelse.kontaktpersonData = mergeArrays({
    navn: arrify(bekreftelse.kontaktpersonNavn),
    telefon: arrify(bekreftelse.kontaktpersonTelefon),
    epost: arrify(bekreftelse.kontaktpersonEpost),
    avdeling: arrify(bekreftelse.kontaktpersonAvdeling)
  })
  // cleanup kontaktpersoner
  delete bekreftelse.kontaktpersonNavn
  delete bekreftelse.kontaktpersonTelefon
  delete bekreftelse.kontaktpersonEpost
  delete bekreftelse.kontaktpersonAvdeling

  // oppdaterer pårørende
  bekreftelse.parorendeData = mergeArrays({
    navn: arrify(bekreftelse.parorendeNavn),
    telefon: arrify(bekreftelse.parorendeTelefon)
  })
  // cleanup pårørende
  delete bekreftelse.parorendeNavn
  delete bekreftelse.parorendeTelefon

  // bedriftsinformasjon
  const {
    navn: bedriftsNavn,
    orgnr: organisasjonsNummer,
    postadresse: adresse,
    ppoststed: poststed,
    ppostnr: postnummer
  } = company
  bekreftelse.bedriftsNavn = bedriftsNavn
  bekreftelse.bedriftsData = {
    organisasjonsNummer,
    navn: bedriftsNavn,
    adresse,
    postnummer,
    poststed,
    avdeling: bekreftelse.organisasjonsAvdeling
  }

  // cleanup bedrift
  delete bekreftelse.organisasjonsAvdeling

  return bekreftelse
}

export default repackBekreftelse
