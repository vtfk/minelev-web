import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { store } from 'react-notifications-component'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'
import { DOCUMENTS } from '../../data/documents'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'
import { PDFPreviewModal } from '../../_lib-components/PDFPreviewModal'

import './styles.scss'

export function NewDocumentModal ({ selectedStudentId, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [previewModalState, setPreviewModalState] = useState(false)
  const [type, setType] = useState(null)
  const [behaviourReasons, setBehaviourReasons] = useState([])
  const [courseReasons, setCourseReasons] = useState([])
  const [orderReasons, setOrderReasons] = useState([])
  const [conversationStatus, setConversationStatus] = useState([])
  const [group, setGroup] = useState(null)
  const [groupOptions, setGroupOptions] = useState([])
  const [pdfPreviewBase64, setPdfPreviewBase64] = useState(null)
  const [pdfPreviewLoading, setPdfPreviewLoading] = useState(null)
  const [pdfPreviewError, setPdfPreviewError] = useState(null)
  const { apiGet, apiPost } = useSession()

  let typeOptions = []
  let behaviourReasonsOptions = []
  let courseReasonsOptions = []
  let orderReasonsOptions = []
  let conversationStatusesOptions = []

  typeOptions = DOCUMENTS.documentTypes.map(
    (item) => ({
      value: item.id,
      label: item.description.nb,
      item
    })
  )

  behaviourReasonsOptions = DOCUMENTS.behaviourReasons.map(
    (item) => ({
      value: item.id,
      label: item.description.nb,
      item
    })
  )

  courseReasonsOptions = DOCUMENTS.courseReasons.map(
    (item) => ({
      value: item.id,
      label: item.description.nb,
      item
    })
  )

  orderReasonsOptions = DOCUMENTS.orderReasons.map(
    (item) => ({
      value: item.id,
      label: item.description.nb,
      item
    })
  )

  conversationStatusesOptions = DOCUMENTS.conversationStatuses.map(
    (item) => ({
      value: item.id,
      label: item.value.nb,
      item
    })
  )

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    async function getStudent () {
      const student = await apiGet(API.URL + '/students/' + selectedStudentId)
      setSelectedStudent(student.data)

      if (student.data.groups) {
        const groupsOptionsArray = student.data.groups.map(
          (item) => ({
            value: item.id,
            label: item.name,
            item
          }))

        setGroupOptions(groupsOptionsArray)
      }
    }
    getStudent()

    function setDefaults () {
      setType(typeOptions[0])
      setConversationStatus(conversationStatusesOptions[0])
    }
    setDefaults()
  }, [selectedStudentId])

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

  async function send () {
    if (type && true) { // properly validate form
      const postDocument = await apiPost(API.URL + '/documents', {
        type: type,
        content: {
          // TODO
        }
      })

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

        props.onDismiss()
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

    const pdf = await apiPost(API.URL + '/preview/nb')

    if (pdf.base64) {
      setPdfPreviewBase64(pdf.base64)
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
      >
        <ModalBody>

          {
            selectedStudent &&
              <div className='person-information'>
                <div className='image'>
                  <InitialsBadge firstName={selectedStudent.firstName} lastName={selectedStudent.lastName} size='large' />
                </div>
                <div className='text-wrapper'>
                  <Heading3 className='name'>
                    {selectedStudent.firstName} {selectedStudent.lastName}
                  </Heading3>
                  <div className='other'>
                    <Paragraph>{selectedStudent.schoolName}</Paragraph>
                    <Paragraph><Link href={`/${ROUTES.classes}/${selectedStudent.classId}`}>{selectedStudent.classId}</Link></Paragraph>
                    <Paragraph>26. april 2001</Paragraph>
                    <Paragraph>bra26041@skole.vtfk.no</Paragraph>
                  </div>
                </div>
              </div>
          }

          <div className='form'>
            <Select
              placeholder='Velg dokumenttype'
              items={typeOptions}
              selectedItem={type}
              onChange={(item) => { setType(item) }}
            />

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
                  <Select
                    placeholder='Velg fag'
                    items={groupOptions}
                    selectedItem={group}
                    onChange={(item) => { setGroup(item) }}
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
            {/* TODO: component */}
            <button onClick={() => { send() }} className='button button-primary'>Send</button>
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
  className: PropTypes.string
}
