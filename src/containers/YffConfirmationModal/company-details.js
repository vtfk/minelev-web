const CompanyDetails = props => {
  const { company } = props
  const kanViseKomponent = company

  if (!kanViseKomponent) {
    return null
  }

  return (
    <div className='prefilled'>
      <div className='prefilled-label'>{company.navn}</div>
      <div className='prefilled-text'>Hentet info her</div>
    </div>
  )
}

export default CompanyDetails
