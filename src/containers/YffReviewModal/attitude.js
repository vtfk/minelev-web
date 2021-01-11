import { nanoid } from 'nanoid'
import { RadioButton } from '../../_lib-components/RadioButton'
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
  const { id, value, description } = props
  return <RadioButton name={`evaluationscore-${id}`} value={value} label={description} />
}

function Scores ({ id }) {
  return (
    <>
      {scores.map(item => <Score id={id} {...item} key={nanoid()} />)}
    </>
  )
}

function Tilbakemelding (props) {
  const { id, description, value } = props
  return (
    <div>
      <input type='hidden' name={`evaluation-${id}`} value={value} />
      <p>{description}</p>
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
