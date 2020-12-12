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
  bekreftelse.kontaktPersoner = mergeArrays({
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
  bekreftelse.parorende = mergeArrays({
    navn: arrify(bekreftelse.parorendeNavn),
    telefon: arrify(bekreftelse.parorendeTelefon)
  })
  // cleanup pårørende
  delete bekreftelse.parorendeNavn
  delete bekreftelse.parorendeTelefon

  return {
    bekreftelse,
    company
  }
}

export default repackBekreftelse
