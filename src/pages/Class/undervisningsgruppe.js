import Moment from 'react-moment'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Paragraph, Link } from '../../_lib-components/Typography'

import ClassCard from '../../components/class-card'
import ClassTile from '../../components/class-tile'
import ClassTileGroup from '../../components/class-tile-group'
import ClassPanel from '../../components/class-panel'

import { ROUTES } from '../../config/constants'
import repackDocumentType from '../../lib/repack-document-type'
import repackDocumentStatus from '../../lib/repack-document-status'

export function Undervisningsgruppe ({ group, documents }) {
  return (
    <>
      <ClassCard group={group} />

      <ClassTileGroup>
        <ClassTile label='varselbrev i faget' value={documents.length} />
      </ClassTileGroup>

      <ClassPanel icon='students' title='Elever'>
        {
          group.students && group.students.map(function (student) {
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
          group.students && group.students.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Fant ingen elever knyttet til denne klassen.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>

      <ClassPanel icon='activity' title='Varsler'>
        {
          documents && documents.map(function (doc) {
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
          documents.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Denne klassen har ingen varsler.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>
    </>
  )
}
