import React, { useState, useEffect } from 'react'
import { Select } from '../../_lib-components/Select'

function UtplasseringSelector (props) {
  const [items, setItems] = useState([])
  const [item, setItem] = useState({ value: 'skole', label: 'Skole' })
  const { utplasseringer, setUtplassering } = props

  useEffect(() => {
    const defaultItems = [
      { value: 'skole', label: 'Skole' },
      { value: 'ubedrift', label: 'Ungdomsbedrift (entreprenørskap)' }
    ]
    if (utplasseringer && utplasseringer.length > 0) {
      const bedrifter = utplasseringer.map(bedrift => { return { value: bedrift._id, label: bedrift.bedriftsNavn } })
      setItems([...defaultItems, ...bedrifter])
    } else {
      setItems(defaultItems)
    }
  }, [utplasseringer])

  useEffect(() => {
    setUtplassering(item)
  }, [item])

  return (
    <div className='input-element'>
      <Select
        placeholder='Velg utplasseringssted'
        items={items}
        selectedItem={item}
        onChange={(item) => { setItem(item) }}
      />
    </div>
  )
}

export default UtplasseringSelector
