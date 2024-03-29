import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading4, Link, Paragraph, Icon } from '@vtfk/components'

import './styles.scss'
import { Undervisningsgruppe } from './undervisningsgruppe'
import { Basisgruppe } from './basisgruppe'
import ClassCard from '../../components/class-card'

export function Class () {
  const { id } = useParams()
  const [schoolClass, setSchoolClass] = useState(null)
  const [error, setError] = useState(null)
  const [documents, setDocuments] = useState(null)
  const [conversations, setConversations] = useState([])
  const [notes, setNotes] = useState([])
  const { apiGet } = useSession()

  async function getClass () {
    const group = await apiGet(API.URL + '/classes/' + encodeURIComponent(encodeURIComponent(id)))
    if (!group || group.error) setError(true)
    if (group.data) setSchoolClass(group.data)
  }

  async function getDocuments () {
    const docs = await apiGet(API.URL + '/classes/' + encodeURIComponent(encodeURIComponent(id)) + '/documents')

    if (docs && docs.data) {
      const docsOrderedByModified = docs.data.sort((a, b) => (a.modified[0].timestamp < b.modified[0].timestamp) ? 1 : -1)
      const docsVarsler = docsOrderedByModified.filter((item) => item.type === 'varsel')
      const docsConversations = docsOrderedByModified.filter((item) => item.type === 'samtale')
      const docsNotes = docsOrderedByModified.filter((item) => item.type === 'notat')

      setDocuments(docsVarsler)
      setConversations(docsConversations)
      setNotes(docsNotes)
    }
  }

  useEffect(() => {
    getClass()
    getDocuments()
  }, [])

  return (
    <DefaultLayout>
      <div className='class'>

        <Link className='back-link' href={`/${ROUTES.classes}`} noStyle leftIcon={<Icon name='arrowLeft' size='xsmall' />}>Til klasseoversikten</Link>

        {
          // Undervisningsgrupper
          (!error && (!schoolClass || (schoolClass && schoolClass.type === 'undervisningsgruppe')) &&
            <Undervisningsgruppe group={schoolClass} documents={documents} />) ||

          // Basisgrupper
          (!error && schoolClass && schoolClass.type === 'basisgruppe' &&
            <Basisgruppe group={schoolClass} documents={documents} conversations={conversations} notes={notes} />) ||

          // Ukjent gruppetype
          (schoolClass && schoolClass.type &&
            <>😟 Klarte ikke å vise gruppa.. Kontakt systemansvarlig!</>) ||

          // HTTP error / ingen tilgang
          (error &&
            <>
              <ClassCard group={{ name: decodeURIComponent(id) }} />
              <Paragraph className='error-message'>
                Du har ikke tilgang til klasseoversikten for denne klassen!<br />
                Dersom du mener dette er feil, ta kontakt med Visma InSchool ansvarlig på skolen din.
              </Paragraph>

              <Heading4 as='h2'>Er du faglærer for denne klassen?</Heading4>
              <Paragraph>
                For å se siden til undervisningsgruppa, gå til <Link href={`/${ROUTES.classes}`}>klasseoversikten</Link> og finn gruppa der.
              </Paragraph>
            </>)

          // TODO: Add loading/skeleton view?
        }
      </div>
    </DefaultLayout>
  )
}
