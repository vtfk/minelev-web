import { useState } from 'react'
import { SelectMultiple } from '../_lib-components/Select'
import { Icon } from '../_lib-components/Icon'

function KompetansemalVelger (props) {
  const [selectedMaal, setSelectedMaal] = useState([])
  const { kompetansemaal } = props
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
      <button className='check-button button-left-icon button-primary'>
        <div className='button-left-icon-icon'>
          <Icon name='check' size='small' />
        </div>
        <div className='button-left-icon-text'>
          Lagre kompetansemål i lokal læreplan
        </div>
      </button>
    </>
  )
}

export default KompetansemalVelger
