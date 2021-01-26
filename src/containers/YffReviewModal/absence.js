import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { RadioButton } from '../../_lib-components/RadioButton'
import { TextField } from '../../_lib-components/TextField'
import { ErrorMessage } from '../../_lib-components/Typography'

const scores = [
  {
    value: 'ja',
    label: 'Ja'
  },
  {
    value: 'nei',
    label: 'Nei'
  },
  {
    value: 'av og til',
    label: 'Av og til'
  },
  {
    value: '0',
    label: 'Ikke aktuelt'
  }
]

function Score ({ id, value, label, ...props }) {
  return <RadioButton name={id} value={value} label={label} {...props} />
}

function Scores ({ id, showError, onChange, selected }) {
  return (
    <>
      {scores.map(item => <Score id={id} {...item} key={nanoid()} onChange={() => onChange(item)} checked={item.value === selected.value} error={showError} />)}
    </>
  )
}

function Absence ({ showError, onError }) {
  const [dager, setDager] = useState('')
  const [timer, setTimer] = useState('')
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (onError) onError(!dager || !timer || !selected)
  }, [dager, timer, selected])

  return (
    <>
      <h2 className='subheader'>Fravær under utplasseringen</h2>
      <div className='input-elements'>
        <TextField
          name='fravarDager'
          placeholder='Antall hele dager fravær'
          value={dager}
          onChange={event => setDager(event.target.value)}
          inputMode='numeric' pattern='[0-9]*'
          error={showError && !dager && 'Du må angi antall dager fravær.'}
        />
        <TextField
          name='fravarTimer'
          placeholder='Antall timer fravær'
          value={timer}
          onChange={event => setTimer(event.target.value)}
          inputMode='decimal' pattern='[0-9,]*'
          error={showError && !timer && 'Du må angi antall timer fravær.'}
        />
      </div>
      <div className='input-element'>
        <p className='fravar-title'>Varslet eleven selv om fraværet?</p>
        <Scores id='varsletFravar' onChange={setSelected} selected={selected} showError={showError} />
        {showError && !selected && <ErrorMessage>Du må velge en verdi</ErrorMessage>}
      </div>
    </>
  )
}

export default Absence
