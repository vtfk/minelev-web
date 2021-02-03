import { nanoid } from 'nanoid'
import { RadioButton } from 'vtfk-component-library/ui/RadioButton'
import { order } from '../../data/yff.json'
import { useEffect, useState } from 'react'
import { ErrorMessage } from 'vtfk-component-library/ui/Typography'

function validate (order, selected) {
  return !selected || !order ? false : order.length === Object.keys(selected).length
}

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

function Score ({ id, value, description, ...props }) {
  return <RadioButton name={`evaluationscore-${id}`} value={value} label={description} {...props} />
}

function Scores ({ id, onChange, selected = {}, showError }) {
  return (
    <>
      {scores.map(item => <Score id={id} {...item} key={nanoid()} onChange={() => onChange(item)} checked={item.value === selected.value} />)}
    </>
  )
}

function Tilbakemelding ({ id, description, value, onChange, selected, showError }) {
  return (
    <div>
      <input type='hidden' name={`evaluation-${id}`} value={value} />
      <p><strong>{description}:</strong></p>
      <Scores id={id} onChange={onChange} selected={selected} showError={showError} />
      {showError && !selected && <ErrorMessage>Du må velge en vurdering</ErrorMessage>}
    </div>
  )
}

function Evaluation ({ showError, onError }) {
  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (showError) {
      onError(!validate(order, selected))
    }
  }, [showError])

  useEffect(() => {
    onError(!validate(order, selected))
  }, [selected])

  const handleChange = (item, select) => {
    const newSelect = { ...selected }
    newSelect[item.id] = select
    setSelected(newSelect)
  }

  return (
    <>
      <h2 className='subheader'>Orden og atferd</h2>
      {order.map(item => <Tilbakemelding {...item} key={nanoid()} onChange={change => handleChange(item, change)} selected={selected[item.id]} showError={showError} />)}
    </>
  )
}

export default Evaluation
