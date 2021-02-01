import PropTypes from 'prop-types'
import { ROUTES } from '../config/constants'

import { Heading2, Heading3, Paragraph, Link } from '../_lib-components/Typography'
import { InitialsBadge } from '../_lib-components/InitialsBadge'
import { SkeletonLoader } from '../_lib-components/SkeletonLoader'

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
            ? <SkeletonLoader variant='circle'><InitialsBadge size='large' /></SkeletonLoader>
            : <InitialsBadge firstName={firstName} lastName={lastName} size='large' />
        }
      </div>
      <div className='text-wrapper'>
        <NameHeading className='name'>
          {
            loading
              ? <SkeletonLoader randomWidth={[50, 100]} />
              : `${firstName || ''} ${lastName}`
          }
        </NameHeading>
        <div className='other'>
          <Paragraph>
            {hideSchool ? '' : loading ? <SkeletonLoader width='200px' /> : schoolName}
          </Paragraph>
          <Paragraph>
            {hideClass ? '' : loading ? <SkeletonLoader width='180px' /> : <Link href={`/${ROUTES.classes}/${encodeURIComponent(classId)}`}>{classId}</Link>}
          </Paragraph>
          <Paragraph>
            {hideBirthdate ? '' : loading ? <SkeletonLoader width='160px' /> : prettyPrintDate(birthdate)}
          </Paragraph>
          <Paragraph>
            {hideMail ? '' : loading ? <SkeletonLoader width='180px' /> : mail}
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
