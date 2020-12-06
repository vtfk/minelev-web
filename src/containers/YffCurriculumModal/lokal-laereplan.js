import { useEffect, useState } from 'react'
import { API } from '../../config/app'
import { Paragraph, Link } from '../../_lib-components/Typography'

function Maal (props) {
  const { tittel, arbeidsoppgaver, utplasseringssted, _id, deleteMal } = props
  if (!tittel) return null
  return (
    <tr>
      <td>
        <Paragraph>
          {tittel.nb} / {arbeidsoppgaver}
        </Paragraph>
      </td>
      <td>
        {utplasseringssted}
      </td>
      <td className='actions'>
        <Link onClick={() => deleteMal(_id)}>Fjern</Link>
      </td>
    </tr>
  )
}

function LokalLaereplan (props) {
  const [maal, setMaal] = useState([])
  const { fetcher, selectedStudentId } = props
  useEffect(() => {
    const getLaereplan = async () => {
      const data = await fetcher(`${API.URL}/yff/${selectedStudentId}/laereplan`)
      setMaal(data[0].default)
    }
    getLaereplan()
  }, [])

  const deleteMal = async id => {
    const copyMaal = [...maal]
    const filtered = copyMaal.filter(maal => maal._id !== id)
    setMaal(filtered)
    // await deleter(`${API.URL}/yff/${selectedStudentId}/maal/${id}`)
  }

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
          {maal.length > 0 && maal.map(item => <Maal key={item._id} {...item} deleteMal={deleteMal} />)}
        </tbody>
      </table>
    </>
  )
}

export default LokalLaereplan
