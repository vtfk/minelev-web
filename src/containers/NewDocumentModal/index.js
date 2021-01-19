import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { store } from 'react-notifications-component'

import { API } from '../../config/app'
import { DOCUMENTS } from '../../data/documents'

import { Link } from '../../_lib-components/Typography'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { PDFPreviewModal } from '../../_lib-components/PDFPreviewModal'
import { Button } from '../../_lib-components/Button'

import getSkoleAar from 'get-skole-aar'
import repackGrepLang from '../../lib/repack-grep-lang'

import './styles.scss'
import StudentCard from '../../components/student-card'
import { validateForm } from '../../lib/form-validation'

export function NewDocumentModal ({ selectedStudentId, student, ...props }) {
  const { apiGet, apiPost } = useSession()

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [previewModalState, setPreviewModalState] = useState(false)
  const [typeOptions, setTypeOptions] = useState([])
  const [groupOptions, setGroupOptions] = useState([])

  const [errors, setErrors] = useState({})
  const [formState, setFormState] = useState({})

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
      setFormState({ ...formState, type: typeOptions[0] })

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

    // Reset type options
    setTypeOptions([])
    resetForm()

    // Clear current student and get
    setSelectedStudent(null)
    getStudent()
  }, [selectedStudentId, student])

  const resetForm = () => {
    setFormState({ conversationStatus: conversationStatusesOptions[0] })
    setErrors({})
  }

  const changedMultiSelect = (item, property = '') => {
    const newArray = [...(formState[property] || [])]
    const removeIndex = newArray.map(function (item) { return item.value }).indexOf(item.value)

    if (removeIndex === -1) {
      newArray.push(item)
    } else {
      newArray.splice(removeIndex, 1)
    }

    const newFormState = { ...formState }
    newFormState[property] = newArray

    setFormState(newFormState)
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

  const send = async () => {
    const formErrors = validateForm(validators, formState)
    setErrors(formErrors)
    if (formErrors) return

    const document = createDocument()
    const postDocument = await apiPost(API.URL + '/documents', document)

    if (postDocument) {
      store.addNotification({
        title: '👍',
        message: 'Dokumentet ble sendt.',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: false
        }
      })

      resetForm()
      props.onFinished()
    } else {
      console.log('Error', postDocument)
    }
  }

  const getPdfPreview = async () => {
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)

    const document = createDocument()
    const { data } = await apiPost(API.URL + '/documents/preview', document)

    if (data && data.base64) {
      setPdfPreviewBase64(data.base64)
      setPdfPreviewError(null)
      setPdfPreviewLoading(false)
    } else {
      setPdfPreviewBase64(null)
      setPdfPreviewError(true)
      setPdfPreviewLoading(false)
    }
  }

  const openPreviewModal = () => {
    setPdfPreviewBase64(null)
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)
    setPreviewModalState(true)
    getPdfPreview()
  }

  return (
    <>
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

          {
            selectedStudent &&
              <StudentCard student={selectedStudent} />
          }

          <div className='form'>
            {
              typeOptions && typeOptions.length &&
                <Select
                  placeholder='Velg dokumenttype'
                  items={typeOptions}
                  selectedItem={formState.type}
                  onChange={item => setFormState({ ...formState, type: item })}
                  isOpen={typeOptions && typeOptions.length > 1}
                  closeOnSelect
                  error={errors.type}
                />
            }

            {
              /* --------------------
                Periode
              -------------------- */
              formState.type &&
              formState.type.value !== 'samtale' &&
                <>
                  <Select
                    placeholder='Velg periode'
                    items={periodOptions}
                    selectedItem={formState.period}
                    onChange={item => setFormState({ ...formState, period: item })}
                    closeOnSelect
                    error={errors.period}
                  />
                </>
            }

            {
              /* --------------------
                Atferd
              -------------------- */
              formState.type &&
              formState.type.value === 'atferd' &&
                <>
                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={behaviourReasonsOptions}
                    selectedItems={formState.behaviourReasons || []}
                    onChange={item => changedMultiSelect(item, 'behaviourReasons')}
                    error={errors.behaviourReasons}
                  />
                </>
            }

            {
              /* --------------------
                Fag
              -------------------- */
              formState.type &&
              formState.type.value === 'fag' &&
                <>
                  <SelectMultiple
                    placeholder='Hvilke fag gjelder varselet?'
                    items={groupOptions}
                    selectedItems={formState.groups || []}
                    onChange={item => changedMultiSelect(item, 'groups')}
                    error={errors.groups}
                  />

                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={courseReasonsOptions}
                    selectedItems={formState.courseReasons || []}
                    onChange={item => changedMultiSelect(item, 'courseReasons')}
                    error={errors.courseReasons}
                  />
                </>
            }

            {
              /* --------------------
                Orden
              -------------------- */
              formState.type &&
              formState.type.value === 'orden' &&
                <>
                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={orderReasonsOptions}
                    selectedItems={formState.orderReasons || []}
                    onChange={item => changedMultiSelect(item, 'orderReasons')}
                    error={errors.orderReasons}
                  />
                </>
            }

            {
              /* --------------------
                Samtale
              -------------------- */
              formState.type &&
              formState.type.value === 'samtale' &&
                <>
                  <Select
                    placeholder='Er det gjennomført en elevsamtale?'
                    items={conversationStatusesOptions}
                    selectedItem={formState.conversationStatus}
                    onChange={item => setFormState({ ...formState, conversationStatus: item })}
                    error={errors.conversationStatus}
                  />
                </>
            }
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => { openPreviewModal() }}>Forhåndsvisning</Link>
          </div>
          <div className='action'>
            <Button onClick={() => { send() }} type='primary'>Send</Button>
          </div>
          <div className='action'>
            <Link onClick={props.onDismiss}>Avslutt</Link>
          </div>
        </ModalSideActions>
      </Modal>
    </>
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
