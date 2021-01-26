import { nanoid } from 'nanoid'
import { Heading3, Heading4, Paragraph } from '../../_lib-components/Typography'

function Kontaktperson (props) {
  const { navn, telefon, epost, avdeling } = props
  return (
    <Paragraph>{navn}{avdeling ? ` (${avdeling})` : ''}, {telefon}, {epost}</Paragraph>
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
        <Paragraph>{utplasseringData.startDato} - {utplasseringData.sluttDato}{utplasseringData.daysPerWeek ? ` (${utplasseringData.daysPerWeek} dager i uken)` : ''}</Paragraph>

        {kontaktpersonData.length > 0 &&
          <>
            <br />
            <Heading4>Kontaktperson{kontaktpersonData.length !== 1 ? 'er' : ''}:</Heading4>
            {kontaktpersonData.map(kontaktperson =>
              <Kontaktperson {...kontaktperson} key={nanoid()} />
            )}
          </>}
      </div>
    </div>
  )
}

export default Details
