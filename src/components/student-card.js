import { ROUTES } from '../config/constants'

import { Heading3, Paragraph, Link } from '../_lib-components/Typography'
import { InitialsBadge } from '../_lib-components/InitialsBadge'

function prettyPrintDate (date) {
  return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric' })
}

function StudentCard (props) {
  const { student } = props

  if (!student) return null

  const {
    firstName,
    lastName,
    schoolName,
    classId,
    birthdate,
    mail
  } = student

  return (
    <div className='person-information'>
      <div className='image'>
        <InitialsBadge firstName={firstName} lastName={lastName} size='large' />
      </div>
      <div className='text-wrapper'>
        <Heading3 className='name'>
          {firstName} {lastName}
        </Heading3>
        <div className='other'>
          <Paragraph>{schoolName}</Paragraph>
          <Paragraph><Link href={`/${ROUTES.classes}/${classId}`}>{classId}</Link></Paragraph>
          <Paragraph>{prettyPrintDate(birthdate)}</Paragraph>
          <Paragraph>{mail}</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default StudentCard