import { Heading1, Heading3 } from '../_lib-components/Typography'

function ClassTile ({ label, value = 0, ...props }) {
  return (
    <div className='numbers-item'>
      <Heading1 as='h2' className='numbers-item-title'>{value}</Heading1>
      <Heading3 as='p' className='numbers-item-text'>{label}</Heading3>
    </div>
  )
}

export default ClassTile
