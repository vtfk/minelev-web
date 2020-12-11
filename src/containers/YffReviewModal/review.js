import { nanoid } from 'nanoid'

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
  const key = nanoid()
  return (
    <label htmlFor={key}>
      {description}
      <input type='radio' name={`kompetansemaal-${id}`} id={key} value={value} />
    </label>
  )
}

function Scores ({ id }) {
  return (
    <>
      <fieldset>
        {scores.map(item => <Score id={id} {...item} key={nanoid()} />)}
      </fieldset>
    </>
  )
}

function Maal (props) {
  const { _id, tittel, arbeidsoppgaver } = props
  return (
    <div>
      <div>{tittel.nb}</div>
      <div>{arbeidsoppgaver}</div>
      <Scores id={_id} />
    </div>
  )
}

function Review ({ maal }) {
  if (!maal) return null

  return (
    <>
      <h2 className='subheader'>Kompetansemål og arbeidsoppgaver</h2>
      {maal && maal.map(item => <Maal {...item} key={nanoid} />)}
    </>
  )
}

export default Review
