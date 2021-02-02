function arrify (input) {
  return Array.isArray(input) ? input : [input]
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
  // Sikrer at kopi pr epost er et array, og at det har verdier
  bekreftelse.kopiPrEpost = arrify(bekreftelse.kopiPrEpost).filter(epost => !!epost)
  // oppdaterer kontaktpersoner
  bekreftelse.kontaktpersonData = mergeArrays({
    navn: arrify(bekreftelse.kontaktpersonNavn),
    telefon: arrify(bekreftelse.kontaktpersonTelefon),
    epost: arrify(bekreftelse.kontaktpersonEpost),
    avdeling: arrify(bekreftelse.kontaktpersonAvdeling)
  }).filter(kontakt => kontakt && (Object.keys(kontakt).length !== 0 && kontakt.navn))

  // cleanup kontaktpersoner
  delete bekreftelse.kontaktpersonNavn
  delete bekreftelse.kontaktpersonTelefon
  delete bekreftelse.kontaktpersonEpost
  delete bekreftelse.kontaktpersonAvdeling

  // oppdaterer pårørende
  bekreftelse.parorendeData = mergeArrays({
    navn: arrify(bekreftelse.parorendeNavn),
    telefon: arrify(bekreftelse.parorendeTelefon)
  }).filter(kontakt => kontakt && (Object.keys(kontakt).length !== 0 && kontakt.navn))

  // cleanup pårørende
  delete bekreftelse.parorendeNavn
  delete bekreftelse.parorendeTelefon

  // bedriftsinformasjon
  const {
    navn: bedriftsNavn,
    orgnr: organisasjonsNummer,
    postadresse: adresse,
    ppoststed: poststed,
    ppostnr: postnummer,
    forretningsadr: forretningsadresse,
    forradrpostnr: forretningspostnummer,
    forradrpoststed: forretningspoststed
  } = company
  bekreftelse.bedriftsNavn = bedriftsNavn
  bekreftelse.bedriftsData = {
    organisasjonsNummer,
    navn: bedriftsNavn,
    adresse: adresse || forretningsadresse,
    postnummer: postnummer || forretningspostnummer,
    poststed: poststed || forretningspoststed,
    avdeling: bekreftelse.organisasjonsAvdeling
  }

  // cleanup bedrift
  delete bekreftelse.organisasjonsAvdeling

  return bekreftelse
}

export default repackBekreftelse
