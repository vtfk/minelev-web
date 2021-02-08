import Moment from 'react-moment'
import { InitialsBadge, Paragraph, Link, Skeleton } from '@vtfk/components'

import ClassCard from '../../components/class-card'
import ClassTile from '../../components/class-tile'
import ClassTileGroup from '../../components/class-tile-group'
import ClassPanel from '../../components/class-panel'

import { ROUTES } from '../../config/constants'
import repackDocumentType from '../../lib/repack-document-type'
import repackDocumentStatus from '../../lib/repack-document-status'

export function Undervisningsgruppe ({ group, documents, loading }) {
  return (
    <>
      <ClassCard group={loading ? null : group} />

      <ClassTileGroup>
        {
          loading || !documents
            ? (
              <>
                <Skeleton variant='rectangle' height='126px' width='calc(100% / 3 - (32px))' style={{ marginLeft: '32px' }} />
                <Skeleton variant='rectangle' height='126px' width='calc(100% / 3 - (32px))' style={{ marginLeft: '32px' }} />
              </>
            )
            : <ClassTile label='varselbrev i faget' value={documents ? documents.length : <Skeleton width='70px' />} />
        }
      </ClassTileGroup>

      <ClassPanel icon='students' title='Elever'>
        {
          (loading || !group) &&
            Array(4).fill().map(function (i) {
              return (
                <tr key={i}>
                  <td>
                    <div className='activity-name'>
                      <Skeleton variant='circle'><InitialsBadge size='small' /></Skeleton>
                      <Skeleton className='paragraph' randomWidth={[40, 80]} />
                    </div>
                  </td>
                  <td><Skeleton width='90px' /></td>
                </tr>
              )
            })
        }
        {
          !loading && group && group.students && group.students.map(function (student) {
            return (
              <tr key={student.username}>
                <td>
                  <div className='activity-name'>
                    <InitialsBadge firstName={student.firstName} lastName={student.lastName} size='small' />
                    <Paragraph>
                      <Link href={`/${ROUTES.students}/${student.username}`}>
                        {student.fullName}
                      </Link>
                    </Paragraph>
                  </div>
                </td>
                <td>
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{student.birthdate}</Moment></Paragraph>
                </td>
              </tr>
            )
          })
        }
        {
          group && group.students && group.students.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Fant ingen elever knyttet til denne klassen.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>

      <ClassPanel icon='activity' title='Varsler'>
        {
          (loading || !documents) &&
            Array(6).fill().map(function (i) {
              return (
                <tr key={i}>
                  <td>
                    <div className='activity-name'>
                      <Skeleton variant='circle'><InitialsBadge size='small' /></Skeleton>
                      <Skeleton className='paragraph' randomWidth={[40, 80]} />
                    </div>
                  </td>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                </tr>
              )
            })
        }
        {
          !loading && documents && documents.map(function (doc) {
            return (
              <tr key={doc._id}>
                <td>
                  <div className='activity-name'>
                    <InitialsBadge firstName={doc.student.firstName} lastName={doc.student.lastName} size='small' />
                    <Paragraph>
                      <Link href={`/${ROUTES.students}/${doc.student.username}`}>
                        {doc.student.name}
                      </Link>
                    </Paragraph>
                  </div>
                </td>
                <td>
                  <Paragraph>{repackDocumentType(doc.type, doc.variant)}</Paragraph>
                </td>
                <td>
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                </td>
                <td>
                  <Paragraph>{repackDocumentStatus(doc.status)}</Paragraph>
                </td>
              </tr>
            )
          })
        }
        {
          documents && documents.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Ingen i denne klassen har fått varsel i faget.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>
    </>
  )
}
