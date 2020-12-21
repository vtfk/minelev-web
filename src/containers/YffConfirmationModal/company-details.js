function repackCompany (company) {
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

  return {
    organisasjonsNummer,
    navn: bedriftsNavn,
    adresse: adresse || forretningsadresse,
    postnummer: postnummer || forretningspostnummer,
    poststed: poststed || forretningspoststed
  }
}

const CompanyDetails = props => {
  const { company } = props
  const kanViseKomponent = company
  if (!kanViseKomponent) {
    return null
  }

  const {
    organisasjonsNummer,
    navn,
    adresse,
    postnummer,
    poststed
  } = repackCompany(company)

  return (
    <div className='prefilled'>
      <div className='prefilled-label'>{navn}</div>
      <div className='prefilled-text'>
        <strong>Organisasjonsnummer:</strong> {organisasjonsNummer}<br />
        <strong>Adresse:</strong> {adresse}<br />
        <strong>Postnummer:</strong> {postnummer}<br />
        <strong>Poststed:</strong> {poststed}<br />
      </div>
    </div>
  )
}

export default CompanyDetails
