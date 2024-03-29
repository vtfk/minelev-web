import Moment from 'react-moment'
import React, { useState } from 'react'
// import { InitialsBadge, Paragraph, Link, Skeleton, StatisticsCard, StatisticsGroup } from '@vtfk/components'
import { InitialsBadge, Paragraph, Link, Skeleton} from '@vtfk/components'

import ClassCard from '../../components/class-card'
import ClassPanel from '../../components/class-panel'

import { ROUTES } from '../../config/constants'
import repackDocumentType from '../../lib/repack-document-type'

import { PreviewDocumentModal } from '../../containers/PreviewDocumentModal'

export function Undervisningsgruppe ({ group, documents, loading }) {
  const [previewDocument, setPreviewDocument] = useState(false)

  /*
  function openPreviewModal (doc) {
    setPreviewDocument(doc)
  }
  */

  return (
    <>
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

      <ClassCard group={loading ? null : group} />

      {/*
      <StatisticsGroup className='stats-group'>
        <StatisticsCard title='varselbrev i faget' value={documents ? documents.length : 0} />
      </StatisticsGroup>
      */}

      <ClassPanel icon='students' title='Elever'>
        {
          (loading || !group) &&
            Array(4).fill().map(function (i) {
              return (
                <tr key={i}>
                  <td>
                    <div className='activity-name'>
                      <Skeleton variant='circle'><InitialsBadge firstName='' lastName='' size='small' /></Skeleton>
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
      {/*
      <ClassPanel icon='activity' title='Varsler'>
        {
          (loading || !documents) &&
            Array(6).fill().map(function (i) {
              return (
                <tr key={i}>
                  <td>
                    <div className='activity-name'>
                      <Skeleton variant='circle'><InitialsBadge firstName='' lastName='' size='small' /></Skeleton>
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
                <Paragraph>Ingen i denne klassen har fått varsel i faget.</Paragraph>
              </td>
            </tr>
        }
      </ClassPanel>
      */}
    </>
  )
}
