import PropTypes from 'prop-types'
import { ROUTES } from '../config/constants'

import { Heading2, Heading3, Paragraph, Link } from '../_lib-components/Typography'
import { InitialsBadge } from '../_lib-components/InitialsBadge'

function prettyPrintDate (date) {
  return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric' })
}

function StudentCard ({ student, largeName, hideSchool, hideClass, hideBirthdate, hideMail, ...props }) {
  if (!student) return null

  const {
    firstName,
    lastName,
    schoolName,
    classId,
    birthdate,
    mail
  } = student

  const NameHeading = largeName ? Heading2 : Heading3

  return (
    <div className='person-information'>
      <div className='image'>
        <InitialsBadge firstName={firstName} lastName={lastName} size='large' />
      </div>
      <div className='text-wrapper'>
        <NameHeading className='name'>
          {firstName} {lastName}
        </NameHeading>
        <div className='other'>
          {hideSchool ? '' : <Paragraph>{schoolName}</Paragraph>}
          {hideClass ? '' : <Paragraph><Link href={`/${ROUTES.classes}/${classId}`}>{classId}</Link></Paragraph>}
          {hideBirthdate ? '' : <Paragraph>{prettyPrintDate(birthdate)}</Paragraph>}
          {hideMail ? '' : <Paragraph>{mail}</Paragraph>}
        </div>
      </div>
      {props.children}
    </div>
  )
}

StudentCard.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    schoolName: PropTypes.string,
    classId: PropTypes.string,
    birthdate: PropTypes.string,
    mail: PropTypes.string
  }),
  largeName: PropTypes.bool,
  hideSchool: PropTypes.bool,
  hideClass: PropTypes.bool,
  hideBirthdate: PropTypes.bool,
  hideMail: PropTypes.bool
}

export default StudentCard
