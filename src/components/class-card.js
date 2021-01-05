import { Heading3, Paragraph } from '../_lib-components/Typography'

function ClassCard ({ group, ...props }) {
  if (!group) return null

  const {
    name,
    schoolName,
    grep
  } = group

  return (
    <div className='class-information'>
      <div className='class-shortname'>
        [X]
      </div>
      <div className='text-wrapper'>
        <Heading3 className='name'>
          {grep && grep.kortform ? grep.kortform.nb : name}
        </Heading3>
        <div className='other'>
          {grep && grep.kortform ? <Paragraph>{name}</Paragraph> : ''}
          <Paragraph>{schoolName}</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
