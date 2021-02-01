import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'

import { DOCUMENTS } from '../../data/documents'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'

import StudentTeacherCard from '../../components/student-teacher-card'

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
          <StudentTeacherCard student={student} teacher={previewDoc.teacher} statuses={previewDoc.status} />

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
