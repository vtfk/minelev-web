import PropTypes from 'prop-types'
import { ROUTES } from '../config/constants'
import Moment from 'react-moment'

import { DOCUMENTS } from '../data/documents'

import { Heading2, Heading4, Paragraph, Link } from '../_lib-components/Typography'
import { InitialsBadge } from '../_lib-components/InitialsBadge'
import { SkeletonLoader } from '../_lib-components/SkeletonLoader'

function prettyPrintDate (date) {
  return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric' })
}

function StudentTeacherCard ({ student, teacher, statuses, largeName, hideSchool, hideClass, hideBirthdate, hideMail, loading, ...props }) {
  if (!student || !teacher || !statuses) loading = true

  const { firstName, lastName, schoolName, classId, birthdate, mail } = student || {}
  const { firstName: teacherFirstName, lastName: teacherLastName, name: teacherName } = teacher || {}

  const NameHeading = largeName ? Heading2 : Heading4

  const generateStatuses = () => {
    const sent = statuses.find(status => status.status === 'sent')
    const archived = statuses.find(status => status.status === 'archived')

    return (
      <>
        <Paragraph>{loading ? <SkeletonLoader width='160px' /> : DOCUMENTS.documentStatuses.find(status => status.id === 'sent').short.nb}: { sent ? <Moment locale='nb' format='DD. MMM YYYY - HH:mm'>{sent.timestamp}</Moment> : DOCUMENTS.documentStatuses.find(status => status.id === 'queued').short.nb }</Paragraph>
        <Paragraph>{loading ? <SkeletonLoader width='180px' /> : DOCUMENTS.documentStatuses.find(status => status.id === 'archived').short.nb}: { archived ? <Moment locale='nb' format='DD. MMM YYYY - HH:mm'>{archived.timestamp}</Moment> : DOCUMENTS.documentStatuses.find(status => status.id === 'queued').short.nb }</Paragraph>
      </>
    )
  }

  return (
    <>
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
      </div>
      <div className='person-information-teacher'>
        {
          loading
            ? <SkeletonLoader variant='circle'><InitialsBadge size='large' /></SkeletonLoader>
            : <InitialsBadge firstName={teacherFirstName} lastName={teacherLastName} size='large' />
        }
        <div className='text-wrapper'>
          <NameHeading className='name'>
            {
              loading
                ? <SkeletonLoader randomWidth={[50, 100]} />
                : `${teacherName || ''}`
            }
          </NameHeading>
          <div className='other'>
            {generateStatuses()}
          </div>
        </div>
        {props.children}
      </div>
    </>
  )
}

StudentTeacherCard.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    schoolName: PropTypes.string,
    classId: PropTypes.string,
    birthdate: PropTypes.string,
    mail: PropTypes.string
  }),
  teacher: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  statuses: PropTypes.shape([
    {
      status: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired
    }
  ]),
  loading: PropTypes.bool,
  largeName: PropTypes.bool,
  hideSchool: PropTypes.bool,
  hideClass: PropTypes.bool,
  hideBirthdate: PropTypes.bool,
  hideMail: PropTypes.bool
}

export default StudentTeacherCard
