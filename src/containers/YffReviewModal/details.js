import { nanoid } from 'nanoid'
import { Heading3, Paragraph } from '../../_lib-components/Typography'

function Kontaktperson (props) {
  const { navn, telefon, epost, avdeling } = props
  return (
    <Paragraph>{navn}, {telefon}, {epost} {avdeling}</Paragraph>
  )
}

function Details ({ utplassering }) {
  if (!utplassering) return null
  const { bedriftsData, utplasseringData, kontaktpersonData } = utplassering
  return (
    <div className='text-wrapper'>
      <Heading3 className='name'>
        {bedriftsData.navn}
      </Heading3>
      <div className='other'>
        <Paragraph>{utplasseringData.startDato} - {utplasseringData.sluttDato}</Paragraph>
        <Paragraph>{utplasseringData.daysPerWeek} dager i uken</Paragraph>
        {kontaktpersonData.map(kontaktperson => <Kontaktperson {...kontaktperson} key={nanoid()} />)}
      </div>
    </div>
  )
}

export default Details
