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

export function NewDocumentModal ({ selectedStudentId, student, ...props }) {
  const { apiGet, apiPost } = useSession()

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [previewModalState, setPreviewModalState] = useState(false)
  const [type, setType] = useState(null)
  const [typeOptions, setTypeOptions] = useState([])
  const [period, setPeriod] = useState(null)
  const [behaviourReasons, setBehaviourReasons] = useState([])
  const [courseReasons, setCourseReasons] = useState([])
  const [orderReasons, setOrderReasons] = useState([])
  const [conversationStatus, setConversationStatus] = useState(null)
  const [groups, setGroups] = useState([])
  const [groupOptions, setGroupOptions] = useState([])

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
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
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
      setType(typeOptions[0])

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

    // Reset form
    setSelectedStudent(null)
    setPeriod(null)
    setBehaviourReasons([])
    setCourseReasons([])
    setOrderReasons([])
    setGroups([])
    setConversationStatus(conversationStatusesOptions[0])

    // Get student or assign given
    getStudent()
  }, [selectedStudentId, student])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function changedMultiSelect (item, array, setFunction) {
    const newArray = [...array]
    const removeIndex = newArray.map(function (item) { return item.value }).indexOf(item.value)

    if (removeIndex === -1) {
      newArray.push(item)
    } else {
      newArray.splice(removeIndex, 1)
    }

    setFunction(newArray)
  }

  function createDocment () {
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

  async function send () {
    if (type && true) { // properly validate form
      const document = createDocment()
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

        props.onFinished()
        setType(null)
        setBehaviourReasons([])
        setCourseReasons([])
      } else {
        console.log('Error', postDocument)
      }
    } else {
      store.addNotification({
        title: 'Dokumentet ble ikke sendt.',
        message: 'Du må fylle alle felter.',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: false
        }
      })
    }
  }

  async function getPdfPreview () {
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)

    const document = createDocment()
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

  function openPreviewModal () {
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
            <Select
              placeholder='Velg dokumenttype'
              items={typeOptions}
              selectedItem={type}
              onChange={(item) => { setType(item) }}
              closeOnSelect
            />

            {
              /* --------------------
                Periode
              -------------------- */
              type &&
              type.value !== 'samtale' &&
                <>
                  <Select
                    placeholder='Velg periode'
                    items={periodOptions}
                    selectedItem={period}
                    onChange={(item) => { setPeriod(item) }}
                    closeOnSelect
                    error='Du må velge en periode'
                  />
                </>
            }

            {
              /* --------------------
                Atferd
              -------------------- */
              type &&
              type.value === 'atferd' &&
                <>
                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={behaviourReasonsOptions}
                    selectedItems={behaviourReasons}
                    onChange={(item) => { changedMultiSelect(item, behaviourReasons, setBehaviourReasons) }}
                  />
                </>
            }

            {
              /* --------------------
                Fag
              -------------------- */
              type &&
              type.value === 'fag' &&
                <>
                  <SelectMultiple
                    placeholder='Hvilke fag gjelder varselet?'
                    items={groupOptions}
                    selectedItems={groups}
                    onChange={(item) => { changedMultiSelect(item, groups, setGroups) }}
                  />

                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={courseReasonsOptions}
                    selectedItems={courseReasons}
                    onChange={(item) => { changedMultiSelect(item, courseReasons, setCourseReasons) }}
                  />
                </>
            }

            {
              /* --------------------
                Orden
              -------------------- */
              type &&
              type.value === 'orden' &&
                <>
                  <SelectMultiple
                    placeholder='Hva er årsaken til varselet?'
                    items={orderReasonsOptions}
                    selectedItems={orderReasons}
                    onChange={(item) => { changedMultiSelect(item, orderReasons, setOrderReasons) }}
                  />
                </>
            }

            {
              /* --------------------
                Samtale
              -------------------- */
              type &&
              type.value === 'samtale' &&
                <>
                  <Select
                    placeholder='Er det gjennomført en elevsamtale?'
                    items={conversationStatusesOptions}
                    selectedItem={conversationStatus}
                    onChange={(item) => { setConversationStatus(item) }}
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
