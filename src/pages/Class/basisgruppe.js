import Moment from 'react-moment'
import React, { useState } from 'react'
import { Paragraph, Link, InitialsBadge, StatisticsCard, StatisticsGroup } from '@vtfk/components'

import ClassCard from '../../components/class-card'
import ClassPanel from '../../components/class-panel'

import { ROUTES } from '../../config/constants'
import repackDocumentType from '../../lib/repack-document-type'

import { PreviewDocumentModal } from '../../containers/PreviewDocumentModal'

export function Basisgruppe ({ group, documents, conversations, notes }) {
  const [previewDocument, setPreviewDocument] = useState(false)

  function openPreviewModal (doc) {
    setPreviewDocument(doc)
  }

  return (
    <div>
      {
        !!previewDocument &&
          <PreviewDocumentModal
            open={!!previewDocument}
            previewDoc={previewDocument}
            title={repackDocumentType(previewDocument.type, previewDocument.variant)}
            onDismiss={() => { setPreviewDocument(false) }}
            onFinished={() => { setPreviewDocument(false) }}
          />
      }

      <ClassCard group={group} />

      <StatisticsGroup className='stats-group'>
        <StatisticsCard title='varselbrev' value={documents ? documents.length : 0} />
        <StatisticsCard title='dokumenterte elevsamtaler' value={conversations ? conversations.length : 0} />
        <StatisticsCard title='notater til elevmappa' value={notes ? notes.length : 0} />
      </StatisticsGroup>

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
                      {student.isContactTeacher ? <span title='Du er kontaktlærer for denne eleven'> <strong>(KL)</strong></span> : ''}
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
                  <Paragraph><Link onClick={() => openPreviewModal(doc)} aria-label='Klikk for å åpne'>{repackDocumentType(doc.type, doc.variant)}</Link></Paragraph>
                </td>
                <td>
                  <Paragraph><Link onClick={() => openPreviewModal(doc)} aria-label='Klikk for å åpne' tabIndex='-1'>{doc.content.period ? doc.content.period.nb : ''}</Link></Paragraph>
                </td>
                <td>
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
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
                  <Paragraph><Link onClick={() => openPreviewModal(doc)} aria-label='Klikk for å åpne'>{doc.variant === 'samtale' ? 'Elevsamtale gjennomført' : 'Eleven ønsket ikke samtale'}</Link></Paragraph>
                </td>
                <td>
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
                </td>
                <td />
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
                  <Paragraph>{doc.teacher.name}</Paragraph>
                </td>
                <td>
                  <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.created.timestamp}</Moment></Paragraph>
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
