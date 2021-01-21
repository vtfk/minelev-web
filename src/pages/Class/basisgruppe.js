import Moment from 'react-moment'
import { Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'

import ClassCard from '../../components/class-card'
import ClassPanel from '../../components/class-panel'
import ClassTile from '../../components/class-tile'
import ClassTileGroup from '../../components/class-tile-group'

import { ROUTES } from '../../config/constants'
import repackDocumentStatus from '../../lib/repack-document-status'
import repackDocumentType from '../../lib/repack-document-type'

export function Basisgruppe ({ group, documents, conversations, notes }) {
  return (
    <div>
      <ClassCard group={group} />

      <ClassTileGroup>
        <ClassTile label='varselbrev' value={documents ? documents.length : 0} />
        <ClassTile label='dokumenterte elevsamtaler' value={conversations ? conversations.length : 0} />
        <ClassTile label='notater til elevmappa' value={notes ? notes.length : 0} />
        {/* <ClassTile label='utplasseringer' value={0} />
        <ClassTile label='lokale læreplaner arkivert' value={0} />
        <ClassTile label='tilbakemeldinger' value={0} /> */}
      </ClassTileGroup>

      <ClassPanel icon='students' title='Elever'>
        {
          group && group.students && group.students.map(function (student) {
            return (
              <tr key={student.id}>
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
          group &&group.students && group.students.length === 0 &&
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
          documents && documents.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Ingen varsler registrert for noen elever i denne klassen.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>

      <ClassPanel icon='activity' title='Samtaler'>
        {
          conversations &&
          conversations.map(function (doc) {
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
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                </td>
                <td>
                  <Paragraph>{repackDocumentStatus(doc.status, true)}</Paragraph>
                </td>
              </tr>
            )
          })
        }
        {
          conversations && conversations.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Denne klassen har ingen registrerte elevsamtaler.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>

      <ClassPanel icon='activity' title='Notater'>
        {
          notes &&
          notes.map(function (doc) {
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
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                </td>
                <td>
                  <Paragraph>{repackDocumentStatus(doc.status, true)}</Paragraph>
                </td>
              </tr>
            )
          })
        }
        {
          notes && notes.length === 0 &&
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Paragraph>Ingen av elevene i klassen har noen notater registrert på seg.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>
    </div>
  )
}
