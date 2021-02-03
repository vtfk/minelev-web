import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { RadioButton } from 'vtfk-component-library/ui/RadioButton'
import { ErrorMessage } from 'vtfk-component-library/ui/Typography'

function validate (maal, selected) {
  return !selected || !maal ? false : maal.length === Object.keys(selected).length
}

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

function Score ({ id, value, description, ...props }) {
  return <RadioButton name={`kompetansemaal-${id}`} value={value} label={description} {...props} />
}

function Scores ({ id, onChange, selected = {}, showError }) {
  return (
    <div className='scores'>
      {scores.map(item => <Score id={id} {...item} key={nanoid()} onChange={() => onChange(item)} checked={item.value === selected.value} />)}
    </div>
  )
}

function Maal ({ _id, grep, arbeidsoppgaver, onChange, selected, showError }) {
  const { tittel } = grep
  return (
    <div>
      <div className='maal'>
        <strong>Mål:</strong> {tittel.nb}
      </div>
      {
        arbeidsoppgaver &&
          <div className='oppgaver'>
            <strong>Arbeidsoppgaver:</strong> {arbeidsoppgaver}
          </div>
      }
      <Scores id={_id} onChange={onChange} selected={selected} showError={showError} />
      {showError && !selected && <ErrorMessage>Du må velge en målvurdering</ErrorMessage>}
    </div>
  )
}

function Review ({ maal, showError, onError }) {
  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (showError) {
      onError(!validate(maal, selected))
    }
  }, [showError])

  useEffect(() => {
    onError(!validate(maal, selected))
  }, [selected])

  const handleChange = (item, select) => {
    const newSelect = { ...selected }
    newSelect[item._id] = select
    setSelected(newSelect)
  }

  if (!maal) return null
  return (
    <>
      <h2 className='subheader'>Kompetansemål og arbeidsoppgaver</h2>
      {maal && maal.map(item => <Maal {...item} key={nanoid()} onChange={change => handleChange(item, change)} selected={selected[item._id]} showError={showError} />)}
    </>
  )
}

export default Review
