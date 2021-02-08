import PropTypes from 'prop-types'
import { ROUTES } from '../config/constants'

import { Heading2, Heading3, Paragraph, Link, InitialsBadge, Skeleton } from '@vtfk/components'

function prettyPrintDate (date) {
  return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric' })
}

function StudentCard ({ student, largeName, hideSchool, hideClass, hideBirthdate, hideMail, loading, ...props }) {
  if (!student) loading = true

  const { firstName, lastName, schoolName, classId, birthdate, mail } = student || {}

  const NameHeading = largeName ? Heading2 : Heading3

  return (
    <div className='person-information'>
      <div className='image'>
        {
          loading
            ? <Skeleton variant='circle'><InitialsBadge size='large' /></Skeleton>
            : <InitialsBadge firstName={firstName} lastName={lastName} size='large' />
        }
      </div>
      <div className='text-wrapper'>
        <NameHeading className='name'>
          {
            loading
              ? <Skeleton randomWidth={[50, 100]} />
              : `${firstName || ''} ${lastName}`
          }
        </NameHeading>
        <div className='other'>
          <Paragraph>
            {hideSchool ? '' : loading ? <Skeleton width='200px' /> : schoolName}
          </Paragraph>
          <Paragraph>
            {hideClass ? '' : loading ? <Skeleton width='180px' /> : <Link href={`/${ROUTES.classes}/${encodeURIComponent(classId)}`}>{classId}</Link>}
          </Paragraph>
          {!hideBirthdate &&
            <Paragraph>
              {loading ? <Skeleton width='160px' /> : prettyPrintDate(birthdate)}
            </Paragraph>}
          <Paragraph>
            {hideMail ? '' : loading ? <Skeleton width='180px' /> : mail}
          </Paragraph>
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
  loading: PropTypes.bool,
  largeName: PropTypes.bool,
  hideSchool: PropTypes.bool,
  hideClass: PropTypes.bool,
  hideBirthdate: PropTypes.bool,
  hideMail: PropTypes.bool
}

export default StudentCard
