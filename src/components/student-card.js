import Moment from 'react-moment'

import { ROUTES } from '../config/constants'

import { Heading3, Paragraph, Link } from '../_lib-components/Typography'
import { InitialsBadge } from '../_lib-components/InitialsBadge'

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
          <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{birthdate}</Moment></Paragraph>
          <Paragraph>{mail}</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
