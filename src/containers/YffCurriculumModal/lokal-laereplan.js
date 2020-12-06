import { Paragraph, Link } from '../../_lib-components/Typography'

function LokalLaereplan () {
  return (
    <>
      <h2 className='subheader'>Innhold i lokal læreplan</h2>
      <table className='data-actions-table'>
        <thead>
          <tr>
            <th><Paragraph size='small'>Kompetansemål / Arbeidsoppgaver</Paragraph></th>
            <th><Paragraph size='small'>Utplasseringssted</Paragraph></th>
            <th className='actions-th'><Paragraph size='small'>Ny handling</Paragraph></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Paragraph>
                Utarbeide framdriftsplanar for arbeidet og bestille materiale i samsvar med teikningar og beskrivingar
              </Paragraph>
            </td>
            <td>
              Vest-Telemark vidaregåande skule, avdeling Seljord
            </td>
            <td className='actions'>
              <Link onClick={() => { window.alert('Ikke implementert') }}>Fjern</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Paragraph>
                Bruke digitale måleverktøy
              </Paragraph>
            </td>
            <td>
              Vest-Telemark vidaregåande skule, avdeling Seljord
            </td>
            <td className='actions'>
              <Link onClick={() => { window.alert('Ikke implementert') }}>Fjern</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Paragraph>
                Bruke nivellerings- og oppmålingsutstyr til stikking av anleggstekniske arbeid
              </Paragraph>
            </td>
            <td>
              Vest-Telemark vidaregåande skule, avdeling Seljord
            </td>
            <td className='actions'>
              <Link onClick={() => { window.alert('Ikke implementert') }}>Fjern</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default LokalLaereplan
