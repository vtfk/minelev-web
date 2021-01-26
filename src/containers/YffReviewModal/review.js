import { nanoid } from 'nanoid'
import { RadioButton } from '../../_lib-components/RadioButton'

const scores = [
  {
    description: 'Lav måloppnåelse',
    value: 'Lav måloppnåelse'
  },
  {
    description: 'Middels måloppnåelse',
    value: 'Middels måloppnåelse'
  },
  {
    description: 'Høy måloppnåelse',
    value: 'Høy måloppnåelse'
  }
]

function Score (props) {
  const { id, value, description } = props
  return <RadioButton name={`kompetansemaal-${id}`} value={value} label={description} />
}

function Scores ({ id }) {
  return (
    <div className='scores'>
      {scores.map(item => <Score id={id} {...item} key={nanoid()} />)}
    </div>
  )
}

function Maal (props) {
  const { _id, grep, arbeidsoppgaver } = props
  const { tittel } = grep
  return (
    <div>
      <div className='maal-maal'>
        <strong>Mål:</strong> {tittel.nb}
      </div>
      {
        arbeidsoppgaver &&
          <div className='maal-oppgaver'>
            <strong>Arbeidsoppgaver:</strong> {arbeidsoppgaver}
          </div>
      }
      <Scores id={_id} />
    </div>
  )
}

function Review ({ maal }) {
  if (!maal) return null

  return (
    <>
      <h2 className='subheader'>Kompetansemål og arbeidsoppgaver</h2>
      {maal && maal.map(item => <Maal {...item} key={nanoid()} />)}
    </>
  )
}

export default Review
