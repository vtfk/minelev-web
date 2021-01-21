import PropTypes from 'prop-types'
import { ROUTES } from '../config/constants'

import { Heading2, Heading3, Paragraph, Link } from '../_lib-components/Typography'
import { InitialsBadge } from '../_lib-components/InitialsBadge'
import { SkeletonLoader } from '../_lib-components/SkeletonLoader'

function prettyPrintDate (date) {
  return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric' })
}

function StudentCard ({ student, largeName, hideSchool, hideClass, hideBirthdate, hideMail, loading, ...props }) {
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
        <InitialsBadge firstName={loading ? '' : firstName} lastName={loading ? '' : lastName} size='large' />
      </div>
      <div className='text-wrapper'>
        <NameHeading className='name'>
          { loading ? <SkeletonLoader style={{ maxWidth: 300 } } /> : `${firstName} ${lastName}` }
        </NameHeading>
        <div className='other'>
          {hideSchool ? '' : <Paragraph>{loading ? <SkeletonLoader size="small" style={{marginTop: 3, maxWidth: 200}} /> : schoolName}</Paragraph>}
          {hideClass ? '' : <Paragraph>{loading ? <SkeletonLoader size="small" style={{marginTop: 3, maxWidth: 200}} /> : <Link href={`/${ROUTES.classes}/${classId}`}>{classId}</Link>}</Paragraph>}
          {hideBirthdate ? '' : <Paragraph>{ loading ? <SkeletonLoader size="small" style={{marginTop: 3, maxWidth: 200}} /> : prettyPrintDate(birthdate)}</Paragraph>}
          {hideMail ? '' : <Paragraph>{loading ? <SkeletonLoader size="small" style={{marginTop: 3, maxWidth: 200}} /> : mail}</Paragraph>}
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
