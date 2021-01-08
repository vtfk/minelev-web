import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { API } from '../../config/app'
import { YffConfirmationModal } from '../../containers/YffConfirmationModal'
import { YffCurriculumModal } from '../../containers/YffCurriculumModal'
import { YffSendModal } from '../../containers/YffSendModal'
import { YffReviewModal } from '../../containers/YffReviewModal'
import { CardLink } from '../../_lib-components/CardLink'
import { Heading3, Paragraph } from '../../_lib-components/Typography'
import isYff from '../../lib/is-yff'

function Yff ({ student, fetcher }) {
  const [confirmationModalState, setConfirmationModalState] = useState(false)
  const [curriculumModalState, setCurriculumModalState] = useState(false)
  const [sendModalState, setSendModalState] = useState(false)
  const [reviewModalState, setReviewModalState] = useState(false)
  const [utplasseringer, setUtplasseringer] = useState([])
  const [selectedUtplassering, setSelectedUtplassering] = useState()

  async function getUtplasseringer (id) {
    const response = await fetcher(`${API.URL}/yff/${id}/utplassering`)
    if (!response || response.error) {
      console.error('Klarte ikke å hente utplasseringer', response)
      return
    }

    const utenTilbakemelding = response.data.filter(utplassering => !utplassering.tilbakemelding)
    setUtplasseringer(utenTilbakemelding)
  }

  function Utplassering ({ _id: id, bedriftsData, utplasseringData }) {
    const { navn } = bedriftsData
    const { startDato, sluttDato } = utplasseringData
    return (
      <CardLink className='action-link' onClick={() => { openReviewModal(id) }}>
        Tilbakemelding på utplassering<br />
        <Paragraph size='small'>{navn}</Paragraph>
        <Paragraph size='small'>{startDato} - {sluttDato}</Paragraph>
      </CardLink>
    )
  }

  useEffect(() => {
    if (student && student.username && isYff(student)) {
      getUtplasseringer(student.username)
    }
  }, [student])

  function openConfirmationModal () {
    setConfirmationModalState(true)
  }

  function openCurriculumModal () {
    setCurriculumModalState(true)
  }

  function openReviewModal (id) {
    setSelectedUtplassering(id)
    setReviewModalState(true)
  }

  function openSendModal () {
    setSendModalState(true)
  }

  // Dersom det ikke finnes studentobjekt, eller studenten ikke har YFF returnes null
  if (!student || (student && !isYff(student))) return null

  return (
    <>
      <YffConfirmationModal
        open={confirmationModalState}
        student={student}
        title='Bekreftelse om utplassering av elev'
        onDismiss={() => {
          setConfirmationModalState(false)
        }}
        onFinished={() => {
          setConfirmationModalState(false)
          getUtplasseringer()
        }}
      />

      <YffCurriculumModal
        open={curriculumModalState}
        student={student}
        title='Lokal læreplan'
        onDismiss={() => { setCurriculumModalState(false) }}
      />

      <YffReviewModal
        open={reviewModalState}
        student={student}
        utplasseringsId={selectedUtplassering}
        title='Tilbakemelding på utplassering'
        onDismiss={() => {
          setReviewModalState(false)
        }}
        onFinished={() => {
          setReviewModalState(false)
          getUtplasseringer()
        }}
      />

      <YffSendModal
        open={sendModalState}
        selectedStudentId={student.username}
        title='Send og arkiver lokal læreplan'
        onDismiss={() => { setSendModalState(false) }}
      />

      <div className='intro'>
        <Heading3 className='intro-title'>Om YFF og utplassering</Heading3>
        <Paragraph>
          Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested.
          <br />
          Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
        </Paragraph>
      </div>

      <div className='actions'>
        <CardLink className='action-link' onClick={() => { openConfirmationModal() }}>
          Bekreftelse om utplassering av elev
        </CardLink>
        <CardLink className='action-link' onClick={() => { openCurriculumModal() }}>
          Lokal læreplan
        </CardLink>
        {/** TODO: Fjerne denne? Kan tas fra lokal læreplan */}
        <CardLink title='Du må først opprette lokal læreplan' disabled className='action-link' onClick={() => { openSendModal() }}>
          Send og arkiver lokal læreplan
          <br />
          <Paragraph size='small'>Du må først opprette lokal læreplan</Paragraph>
        </CardLink>
        {utplasseringer && utplasseringer.map(utplassering => <Utplassering {...utplassering} key={nanoid()} />)}
      </div>
    </>
  )
}

export default Yff
