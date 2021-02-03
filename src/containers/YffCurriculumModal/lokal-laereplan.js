import { useEffect, useState } from 'react'
import { API } from '../../config/app'
import { Paragraph, Link, ErrorMessage } from '../../_lib-components/Typography'
import logError from '../../lib/log-error'

function Maal (props) {
  const { grep, arbeidsoppgaver, referanseTittel, _id, deleteMal } = props
  if (!grep) return null
  const { tittel } = grep

  return (
    <tr>
      <td>
        <Paragraph>
          <strong>Mål:</strong><br />
          {tittel.nb}<br />
          <strong>Arbeidsoppgaver:</strong><br />
          {arbeidsoppgaver}
        </Paragraph>
      </td>
      <td>
        {referanseTittel}
      </td>
      <td className='actions'>
        <Link onClick={() => deleteMal(_id)}>Fjern</Link>
      </td>
    </tr>
  )
}

function LokalLaereplan (props) {
  const [maal, setMaal] = useState([])
  const { deleter, fetcher, selectedStudentId, refreshLaereplan, setRefreshLaereplan, onMaalChange, showError } = props

  const getLaereplan = async () => {
    const response = await fetcher(`${API.URL}/yff/${selectedStudentId}/maal`)
    if (!response || !response.data) {
      logError('Kunne ikke hente læreplan', response)
      return
    }

    // filtrér vekk mål med tilbakemelding
    const filtered = response.data.filter(mal => !mal.tilbakemelding)
    setMaal(filtered)
  }

  useEffect(() => {
    if (onMaalChange) onMaalChange(maal)
  }, [maal])

  useEffect(() => {
    getLaereplan()
  }, [])

  useEffect(() => {
    if (refreshLaereplan === true) {
      getLaereplan()
      setRefreshLaereplan(false)
    }
  }, [refreshLaereplan])

  const deleteMal = async id => {
    const copyMaal = [...maal]
    const filtered = copyMaal.filter(maal => maal._id !== id)
    setMaal(filtered)
    await deleter(`${API.URL}/yff/${selectedStudentId}/maal/${id}`)
  }

  return (
    <div className='laereplan'>
      <h2 className='subheader'>Innhold i lokal læreplan</h2>
      {
        maal.length === 0 &&
          <>
            {showError ? <ErrorMessage>{showError}</ErrorMessage> : 'Elevens lokale læreplan er tom. Legg til kompetansemål i planen ved hjelp av skjemaet ovenfor.'}
          </>
      }
      {
        maal.length > 0 &&
          <table className='data-actions-table'>
            <thead>
              <tr>
                <th><Paragraph size='small'>Kompetansemål / Arbeidsoppgaver</Paragraph></th>
                <th><Paragraph size='small'>Utplasseringssted</Paragraph></th>
                <th className='actions-th'><Paragraph size='small'>Fjern</Paragraph></th>
              </tr>
            </thead>
            <tbody>
              {maal && maal.map(item => <Maal key={item._id} {...item} deleteMal={deleteMal} />)}
            </tbody>
          </table>
      }
    </div>
  )
}

export default LokalLaereplan
