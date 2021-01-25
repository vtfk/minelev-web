import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'

import { useSession } from '@vtfk/react-msal'
import getSkoleAar from 'get-skole-aar'

import { API } from '../../config/app'
import { DOCUMENTS } from '../../data/documents'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { PDFPreviewModal } from '../../_lib-components/PDFPreviewModal'
import { SkeletonLoader } from '../../_lib-components/SkeletonLoader'
import { Button } from '../../_lib-components/Button'

import StudentCard from '../../components/student-card'
import { successMessage, errorMessage } from '../../lib/toasts'
import { validateForm, validateField } from '../../lib/form-validation'
import repackGrepLang from '../../lib/repack-grep-lang'
import logError from '../../lib/log-error'

import './styles.scss'
import ErrorFallback from '../../components/yff-error-fallback'

export function NewDocumentModal ({ selectedStudentId, student, ...props }) {
  const { apiGet, apiPost } = useSession()

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [previewModalState, setPreviewModalState] = useState(false)
  const [typeOptions, setTypeOptions] = useState([])
  const [groupOptions, setGroupOptions] = useState([])

  const [errors, setErrors] = useState({})
  const [formState, setFormState] = useState({})

  const [submitting, setSubmitting] = useState(false)

  const [pdfPreviewBase64, setPdfPreviewBase64] = useState(null)
  const [pdfPreviewLoading, setPdfPreviewLoading] = useState(null)
  const [pdfPreviewError, setPdfPreviewError] = useState(null)

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

  const defaultFormState = (typeOpts) => ({ conversationStatus: conversationStatusesOptions[0], type: (typeOpts ? typeOpts[0] : typeOptions[0]) || undefined })

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') props.onDismiss()
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

  useEffect(() => {
    async function getStudent () {
      // Get student object from API if not passed or if its missing groups prop
      if (!student || !student.groups) {
        const { data } = await apiGet(API.URL + '/students/' + selectedStudentId)
        student = data
      }

      setSelectedStudent(student)

      // Filter documentTypes where the teacher is required to be a contact teacher
      const typeOptions = DOCUMENTS.documentTypes
        .filter(type => student.isContactTeacher || !type.requireContactTeacher)
        .map(type => repackTypeOptions(type))

      // Assign filtered types and set first element as default selection
      setTypeOptions(typeOptions)
      setFormState(defaultFormState(typeOptions))

      if (student.groups) {
        const groupsOptionsArray = student.groups
          .filter(group => group.type === 'undervisningsgruppe')
          .map((item) => ({
            value: item.id,
            label: `${item.grep.kortform.nb} (${item.name})`.trim(),
            item
          }))

        setGroupOptions(groupsOptionsArray)
      }
    }

    // Reset type options and form
    setTypeOptions([])
    resetForm()

    // Clear current student and get
    setSelectedStudent(null)
    getStudent()
  }, [selectedStudentId, student])

  const resetForm = (typeOptions) => {
    setFormState(defaultFormState(typeOptions))
    setErrors({})
    setSubmitting(false)
  }

  const handleMultiChange = (item, name) => {
    const newArray = [...(formState[name] || [])]
    const removeIndex = newArray.map(function (item) { return item.value }).indexOf(item.value)

    if (removeIndex === -1) newArray.push(item)
    else newArray.splice(removeIndex, 1)

    handleChange(newArray, name)
  }

  const handleChange = (value, name) => {
    const newState = { ...formState, [name]: value }
    setFormState(newState)

    // If the field has a validation error, rerun the validation
    if (errors && Object.keys(errors).includes(name)) {
      const invalid = validateField(name, validators, newState)
      setErrors({ ...errors, [name]: invalid ? invalid.error : undefined })
    }
  }

  const validators = {
    type: [
      {
        test: (item) => item && item.length,
        error: 'Du må velge en dokumenttype'
      }
    ],
    period: [
      {
        test: (item, { type }) => type === 'samtale' || (item && item.length),
        error: 'Du må velge en periode'
      }
    ],
    groups: [
      {
        test: (item, { type }) => type !== 'fag' || (item && item.length),
        error: 'Du må velge minst én klasse'
      }
    ],
    behaviourReasons: [
      {
        test: (item, { type }) => type !== 'atferd' || (item && item.length),
        error: 'Du må velge minst én grunn'
      }
    ],
    courseReasons: [
      {
        test: (item, { type }) => type !== 'fag' || (item && item.length),
        error: 'Du må velge minst én grunn'
      }
    ],
    orderReasons: [
      {
        test: (item, { type }) => type !== 'orden' || (item && item.length),
        error: 'Du må velge minst én grunn'
      }
    ],
    conversationStatus: [
      {
        test: (item, { type }) => type !== 'samtale' || (item && item.length),
        error: 'Du må velge om samtalen har blitt utført eller ikke'
      }
    ]
  }

  const createDocument = () => {
    const { type, period, conversationStatus, courseReasons, orderReasons, behaviourReasons, groups } = formState

    const docType = type.value.includes('samtale') ? 'samtale' : 'varsel'
    const docVariant = docType === 'samtale' ? conversationStatus.value : type.value

    const docContent = {
      year: getSkoleAar()
    }

    if (docType === 'varsel') {
      const reasons = docVariant === 'fag' ? courseReasons : docVariant === 'orden' ? orderReasons : behaviourReasons
      docContent.reasons = reasons.map(({ item }) => ({ id: item.id, ...item.value }))
      docContent.period = { id: period.item.id, ...period.item.value }
    }

    if (docVariant === 'fag') {
      docContent.classes = groups.map(({ item }) => ({ id: item.id, ...repackGrepLang(item.grep.kortform) }))
    }

    return {
      type: docType,
      variant: docVariant,
      student: {
        username: selectedStudent.username
      },
      content: docContent
    }
  }

  const validate = () => {
    const formErrors = validateForm(validators, formState)
    setErrors(formErrors)
    return !!formErrors
  }

  const send = async () => {
    if (submitting) return
    if (validate()) return

    try {
      setSubmitting(true)
      const document = createDocument()
      const response = await apiPost(API.URL + '/documents', document)
      if (!response) throw new Error('Coundn\'t POST to /documents. Response:' + response)

      if (document.variant === 'samtale') {
        successMessage('Elevsamtalen er lagret 👍', 'Dokumentet er lagt i kø, og blir lagret i elevmappa.')
      } else {
        successMessage('Dokumentet er sendt 👍', 'Dokumentet er lagt i kø, og blir sendt fortløpende.')
      }

      resetForm()
      props.onFinished()
    } catch (error) {
      logError(error)
      errorMessage('Dokumentet ble ikke sendt', 'Du kan forsøke igjen, men om problemene fortsetter kontakt systemadministrator.')
      setSubmitting(false)
    }
  }

  const dismiss = () => {
    resetForm()
    props.onDismiss()
  }

  const getPdfPreview = async () => {
    setPdfPreviewBase64(null)
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)

    const document = createDocument()
    const { data } = await apiPost(API.URL + '/documents/preview', document)

    setPdfPreviewLoading(false)
    if (data && data.base64) {
      setPdfPreviewBase64(data.base64)
    } else {
      setPdfPreviewError(true)
    }
  }

  const openPreviewModal = () => {
    if (submitting) return
    if (validate()) return

    getPdfPreview()
    setPreviewModalState(true)
  }

  return (
    <Sentry.ErrorBoundary
      fallback={ErrorFallback}
      onReset={props.onDismiss}
    >
      <PDFPreviewModal
        open={previewModalState}
        title='Lukk forhåndsvisning'
        onDismiss={() => { setPreviewModalState(false) }}
        loading={pdfPreviewLoading}
        base64={pdfPreviewBase64}
        error={pdfPreviewError}
      />

      <Modal
        {...props}
        className='new-document-modal'
        onDismiss={props.onDismiss}
        onFinished={props.onFinished}
      >
        <ModalBody>
          <StudentCard student={selectedStudent} />

          <div className='form'>
            {
              typeOptions && typeOptions.length > 0
                ? (
                  <Select
                    placeholder='Velg dokumenttype'
                    items={typeOptions}
                    selectedItem={formState.type}
                    onChange={item => handleChange(item, 'type')}
                    isOpen={typeOptions && typeOptions.length > 1 && Object.keys(formState).length <= 2}
                    closeOnSelect
                    error={errors.type}
                  />
                  )
                : <SkeletonLoader width='100%'><Select placeholder='Dokumenttype' items={[]} /></SkeletonLoader>
            }

            {
              /* --------------------
                Periode
              -------------------- */
              selectedStudent && formState.type &&
              formState.type.value !== 'samtale' &&
                <>
                  <Select
                    placeholder='Velg periode'
                    items={periodOptions}
                    selectedItem={formState.period}
                    onChange={item => handleChange(item, 'period')}
                    closeOnSelect
                    error={errors.period}
                  />
                </>
            }

            {
              /* --------------------
                Atferd
              -------------------- */
              selectedStudent && formState.type &&
              formState.type.value === 'atferd' &&
                <>
                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={behaviourReasonsOptions}
                    selectedItems={formState.behaviourReasons || []}
                    onChange={item => handleMultiChange(item, 'behaviourReasons')}
                    error={errors.behaviourReasons}
                  />
                </>
            }

            {
              /* --------------------
                Fag
              -------------------- */
              selectedStudent && formState.type &&
              formState.type.value === 'fag' &&
                <>
                  <SelectMultiple
                    placeholder='Hvilke fag gjelder varselet?'
                    items={groupOptions}
                    selectedItems={formState.groups || []}
                    onChange={item => handleMultiChange(item, 'groups')}
                    error={errors.groups}
                  />

                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={courseReasonsOptions}
                    selectedItems={formState.courseReasons || []}
                    onChange={item => handleMultiChange(item, 'courseReasons')}
                    error={errors.courseReasons}
                  />
                </>
            }

            {
              /* --------------------
                Orden
              -------------------- */
              selectedStudent && formState.type &&
              formState.type.value === 'orden' &&
                <>
                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={orderReasonsOptions}
                    selectedItems={formState.orderReasons || []}
                    onChange={item => handleMultiChange(item, 'orderReasons')}
                    error={errors.orderReasons}
                  />
                </>
            }

            {
              /* --------------------
                Samtale
              -------------------- */
              selectedStudent && formState.type &&
              formState.type.value === 'samtale' &&
                <>
                  <Select
                    placeholder='Er det gjennomført en elevsamtale?'
                    items={conversationStatusesOptions}
                    selectedItem={formState.conversationStatus}
                    onChange={item => handleChange(item, 'conversationStatus')}
                    error={errors.conversationStatus}
                  />
                </>
            }
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            {
              selectedStudent
                ? <Link onClick={() => { openPreviewModal() }}>Forhåndsvisning</Link>
                : <SkeletonLoader width='100%' />
            }
          </div>
          <div className='action'>
            {
              selectedStudent
                ? <Button onClick={() => { send() }} type='primary' spinner={submitting}>Send</Button>
                : <SkeletonLoader variant='circle' style={{ borderRadius: '24px' }}><Button type='primary'>Send</Button></SkeletonLoader>
            }
          </div>
          <div className='action'>
            <Link onClick={() => dismiss()}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </Sentry.ErrorBoundary>
  )
}

NewDocumentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  onFinished: PropTypes.func.isRequired,
  student: PropTypes.object,
  selectedStudentId: PropTypes.string,
  className: PropTypes.string
}
