import { nanoid } from 'nanoid'
import { order } from '../../data/yff.json'

const scores = [
  {
    description: 'Under forventet',
    value: 'Under forventet'
  },
  {
    description: 'Som forventet',
    value: 'Som forventet'
  },
  {
    description: 'Over forventet',
    value: 'Over forventet'
  }
]

function Score (props) {
  const { id, value, description, key } = props
  return (
    <>
      <label for={key}>{description}</label>
      <input type='radio' name={`evaluationscore-${id}`} id={key} value={value} />
    </>
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

function Tilbakemelding (props) {
  const { id, description, value } = props
  return (
    <div>
      <input type='hidden' name={`evaluation-${id}`} value={value} />
      {description}
      <Scores id={id} />
    </div>
  )
}

function Evaluation () {
  return (
    <>
      <h2 className='subheader'>Orden og atferd</h2>
      {order.map(item => <Tilbakemelding {...item} key={nanoid()} />)}
    </>
  )
}

export default Evaluation
