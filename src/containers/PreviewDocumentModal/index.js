import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'
import Moment from 'react-moment'

import { DOCUMENTS } from '../../data/documents'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Paragraph } from '../../_lib-components/Typography'

import StudentCard from '../../components/student-card'

import './styles.scss'
import ErrorFallback from '../../components/yff-error-fallback'

export function PreviewDocumentModal ({ previewDoc, student, ...props }) {
  const repackTypeOptions = (item, labelProp = 'description') => ({
    value: item.id,
    label: item[labelProp].nb,
    item
  })

  const periodOptions = DOCUMENTS.periods.map(item => repackTypeOptions(item, 'value'))
  const conversationStatusesOptions = DOCUMENTS.conversationStatuses.map(item => repackTypeOptions(item, 'value'))
  const behaviourReasonsOptions = DOCUMENTS.behaviourReasons.map(item => repackTypeOptions(item))
  const courseReasonsOptions = DOCUMENTS.courseReasons.map(item => repackTypeOptions(item))
  const orderReasonsOptions = DOCUMENTS.orderReasons.map(item => repackTypeOptions(item))
  const typeOptions = DOCUMENTS.documentTypes.map(type => repackTypeOptions(type))

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') props.onDismiss()
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  const handleChange = () => {
    console.log('Preview only')
  }

  const generateStatuses = () => {
    const sent = previewDoc.status.find(status => status.status === 'sent')
    const archived = previewDoc.status.find(status => status.status === 'archived')

    return (
      <>
        <Paragraph>{DOCUMENTS.documentStatuses.find(status => status.id === 'sent').short.nb}: { sent ? <Moment locale='nb' format='DD. MMM YYYY - HH:mm'>{sent.timestamp}</Moment> : DOCUMENTS.documentStatuses.find(status => status.id === 'queued').short.nb }</Paragraph>
        <Paragraph>{DOCUMENTS.documentStatuses.find(status => status.id === 'archived').short.nb}: { archived ? <Moment locale='nb' format='DD. MMM YYYY - HH:mm'>{archived.timestamp}</Moment> : DOCUMENTS.documentStatuses.find(status => status.id === 'queued').short.nb }</Paragraph>
      </>
    )
  }

  return (
    <Sentry.ErrorBoundary
      fallback={ErrorFallback}
      onReset={props.onDismiss}
    >

      <Modal
        {...props}
        className='preview-document-modal'
        onDismiss={props.onDismiss}
        onFinished={props.onFinished}
      >
        <ModalBody>
          <StudentCard student={student} />

          <div className='form'>
            {
              typeOptions && typeOptions.length > 0
                ? (
                  <Select
                    placeholder='Valgt dokumenttype'
                    items={typeOptions}
                    selectedItem={repackTypeOptions(DOCUMENTS.documentTypes.find(type => type.id === (previewDoc.variant === 'ikke-samtale' ? previewDoc.type : previewDoc.variant)))}
                    onChange={item => handleChange(item)}
                    isOpen={false}
                    closeOnSelect
                  />
                  )
                : <SkeletonLoader width='100%'><Select placeholder='Dokumenttype' items={[]} /></SkeletonLoader>
            }

            {
              /* --------------------
                Periode
              -------------------- */
              student && previewDoc.type &&
              previewDoc.type !== 'samtale' &&
                <>
                  <Select
                    placeholder='Valgt periode'
                    items={periodOptions}
                    selectedItem={repackTypeOptions(DOCUMENTS.periods.find(type => type.id === previewDoc.content.period.id), 'value')}
                    onChange={item => handleChange(item)}
                    closeOnSelect
                  />
                </>
            }

            {
              /* --------------------
                Atferd
              -------------------- */
              student && previewDoc.type &&
              previewDoc.variant === 'atferd' &&
                <>
                  <SelectMultiple
                    placeholder='Valgt årsak til varselet'
                    items={behaviourReasonsOptions}
                    selectedItems={previewDoc.content.reasons.map(reason => repackTypeOptions(DOCUMENTS.behaviourReasons.find(type => type.id === reason.id))) || []}
                    onChange={item => handleChange(item)}
                  />
                </>
            }

            {
              /* --------------------
                Fag
              -------------------- */
              student && previewDoc.type &&
              previewDoc.variant === 'fag' &&
                <>
                  <SelectMultiple
                    placeholder='Valgt(e) fag for varselet'
                    items={(previewDoc.content.classes && previewDoc.content.classes.map(item => ({ value: item.id, label: item.nb, item }))) || []}
                    selectedItems={(previewDoc.content.classes && previewDoc.content.classes.map(item => ({ value: item.id, label: item.nb, item }))) || []}
                    onChange={item => handleChange(item)}
                  />

                  <SelectMultiple
                    placeholder='Valgt årsak for varselet'
                    items={courseReasonsOptions}
                    selectedItems={previewDoc.content.reasons.map(reason => repackTypeOptions(DOCUMENTS.courseReasons.find(type => type.id === reason.id))) || []}
                    onChange={item => handleChange(item)}
                  />
                </>
            }

            {
              /* --------------------
                Orden
              -------------------- */
              student && previewDoc.type &&
              previewDoc.variant === 'orden' &&
                <>
                  <SelectMultiple
                    placeholder='Valgt årsak for varselet'
                    items={orderReasonsOptions}
                    selectedItems={previewDoc.content.reasons.map(reason => repackTypeOptions(DOCUMENTS.orderReasons.find(type => type.id === reason.id))) || []}
                    onChange={item => handleChange(item)}
                  />
                </>
            }

            {
              /* --------------------
                Samtale
              -------------------- */
              student && previewDoc.type &&
              previewDoc.type === 'samtale' &&
                <>
                  <Select
                    placeholder='Er det gjennomført en elevsamtale?'
                    items={conversationStatusesOptions}
                    selectedItem={repackTypeOptions(DOCUMENTS.conversationStatuses.find(type => type.id === previewDoc.variant), 'value')}
                    onChange={item => handleChange(item)}
                  />
                </>
            }

            {
              student && previewDoc.type &&
                <>
                  <div className='user'>
                    <InitialsBadge className='user-image' firstName={previewDoc.teacher.firstName} lastName={previewDoc.teacher.lastName} />
                    <div className='user-name'>
                      <Paragraph>{previewDoc.teacher.name}</Paragraph>
                    </div>
                  </div>
                  <div className='user-status'>
                    {generateStatuses()}
                  </div>
                </>
            }
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => props.onDismiss()}>Lukk</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </Sentry.ErrorBoundary>
  )
}

PreviewDocumentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  onFinished: PropTypes.func.isRequired,
  previewDoc: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  className: PropTypes.string
}
