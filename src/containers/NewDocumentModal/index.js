import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { store } from 'react-notifications-component'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { Select, SelectMultiple } from '../../_lib-components/Select'

import './styles.scss'

export function NewDocumentModal ({ selectedStudentId, ...props }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [type, setType] = useState(null)
  const [variant, setVariant] = useState(null)
  const [reasons, setReasons] = useState([])
  const { apiGet, apiPost } = useSession()

  /* ----------------------------------------
    TODO: Change structure
  ----------------------------------------- */
  const typeOptions = [
    { value: 0, label: 'Varsel atferd' },
    { value: 1, label: 'Varsel fag' },
    { value: 2, label: 'Varsel orden' }
  ]

  const variantOptions = [
    { value: 1, label: 'Halvårsvurdering 1. termin' },
    { value: 2, label: 'Halvårsvurdering 2. termin' },
    { value: 3, label: 'Standpunktkarakter' }
  ]

  const reasonOptions = [
    { value: 1, label: 'Varsel atferd årsak 1' },
    { value: 2, label: 'Varsel atferd årsak 2' },
    { value: 3, label: 'Varsel atferd årsak 3' }
  ]
  /* ----------------------------------------
    END: TODO
  ----------------------------------------- */

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
    }
    getStudent()
  }, [selectedStudentId])

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function clickedReason (reason) {
    const newReasons = [...reasons]
    const removeIndex = newReasons.map(function(item) { return item.value }).indexOf(reason.value)

    if (removeIndex === -1) {
      newReasons.push(reason)
    } else {
      newReasons.splice(removeIndex, 1)
    }

    setReasons(newReasons)
  }

  async function send () {
    if (type && variant && reasons.length > 0) {
      const postDocument = await apiPost(API.URL + '/documents', {
        type: type,
        variant: variant,
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
        setVariant(null)
        setReasons([])
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

  return (
    <>
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

            <Select
              placeholder='Hva gjelder varselet?'
              items={variantOptions}
              selectedItem={variant}
              onChange={(item) => { setVariant(item) }}
            />

            <SelectMultiple
              placeholder='Hva er årsaken til varselet?'
              items={reasonOptions}
              selectedItems={reasons}
              onChange={(item) => { clickedReason(item) }}
            />
          </div>
        </ModalBody>

        <ModalSideActions>
          <div className='action'>
            <Link onClick={() => { window.alert('Ikke implementert') }}>Forhåndsvisning</Link>
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
