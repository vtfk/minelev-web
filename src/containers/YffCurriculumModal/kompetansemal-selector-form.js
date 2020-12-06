/* eslint-env browser */
import { useState } from 'react'
import { SelectMultiple } from '../../_lib-components/Select'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import serializeForm from '../../lib/serialize-form'
import { API } from '../../config/app'

function Beskrivelse (props) {
  const [text, setText] = useState('')
  const { tittel, kode } = props
  return (
    <div className='input-element'>
      <TextField
        value={text}
        onChange={event => setText(event.target.value)}
        name={kode}
        placeholder={tittel.nb}
      />
    </div>
  )
}

function Arbeidsoppgaver (props) {
  const { maal } = props
  if (!maal) return null
  return (
    <>
      <h2 className='subheader'>Beskriv arbeidsoppgaver</h2>
      {maal.map(item => <Beskrivelse key={item.kode} {...item} />)}
    </>
  )
}

function KompetansemalVelger (props) {
  const [selectedMaal, setSelectedMaal] = useState([])
  const { kompetansemaal, apiPost, selectedStudentId } = props
  if (!kompetansemaal) {
    return null
  }
  const items = kompetansemaal.map(item => {
    return { value: item.kode, label: item.tittel.nb, ...item }
  })

  const updateMaal = item => {
    let copySelectedMaal = [...selectedMaal]
    const ids = copySelectedMaal.map(maal => maal.kode)
    if (ids.includes(item.kode)) {
      copySelectedMaal = copySelectedMaal.filter(maal => maal.kode !== item.kode)
    } else {
      copySelectedMaal.push(item)
    }
    setSelectedMaal(copySelectedMaal)
  }

  const sendForm = async () => {
    const form = document.getElementById('kompetansemaal-form')
    const data = new FormData(form)
    const json = JSON.parse(serializeForm(data))
    const keys = Object.keys(json)
    const copyOfMaal = [...kompetansemaal]
    const selectedMaal = copyOfMaal.filter(maal => keys.includes(maal.kode)).reduce((list, maal) => {
      const arbeidsoppgaver = json[maal.kode]
      list.push({ ...maal, arbeidsoppgaver })
      return list
    }, [])
    const url = `${API.URL}/yff/${selectedStudentId}/maal`
    await Promise.all(selectedMaal.map(maal => apiPost(url, maal)))
  }

  const SaveButton = () => {
    return (
      <button className='check-button button-left-icon button-primary' onClick={sendForm}>
        <div className='button-left-icon-icon'>
          <Icon name='check' size='small' />
        </div>
        <div className='button-left-icon-text'>
          Lagre kompetansemål i lokal læreplan
        </div>
      </button>
    )
  }
  return (
    <>
      <div className='input-element'>
        <SelectMultiple
          placeholder='Velg kompetansemål'
          items={items}
          selectedItems={selectedMaal}
          onChange={(item) => updateMaal(item)}
        />
      </div>
      <form id='kompetansemaal-form'>
        {selectedMaal.length > 0 && <Arbeidsoppgaver maal={selectedMaal} />}
      </form>
      {selectedMaal.length > 0 && <SaveButton />}
    </>
  )
}

export default KompetansemalVelger
