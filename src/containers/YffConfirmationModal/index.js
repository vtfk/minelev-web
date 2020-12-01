import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '@vtfk/react-msal'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import { Icon } from '../../_lib-components/Icon'
import CompanySelector from './company-selector'
import EntitySearch from './entity-search'
import CompanyDetails from './company-details'

import './styles.scss'

const OrganisasjonKontaktperson = ({ refName }) => {
  return (
    <>
      <div className='input-element'>
        <TextField
          name='kontaktpersonNavn'
          placeholder='Kontaktperson'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonTelefon'
          placeholder='Telefon'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonEpost'
          placeholder='E-post'
          ref={refName}
        />
      </div>
      <div className='input-element'>
        <TextField
          name='kontaktpersonAvdeling'
          placeholder='Avdeling'
          ref={refName}
        />
      </div>
    </>
  )
}

export function YffConfirmationModal ({ selectedStudentId, ...props }) {
  const [brregData, setBrregData] = useState(null)
  const [company, setCompany] = useState()
  const [selectedStudent, setSelectedStudent] = useState(null)
  const { register, handleSubmit } = useForm()
  const { apiGet } = useSession()
  const [kontaktpersonOrg, setKontaktpersonOrg] = useState([<OrganisasjonKontaktperson refName={register} key={nanoid()} />])
  const onSubmit = data => console.log(data)

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

  function addOrgKontaktperson () {
    const copykontaktpersonOrg = [...kontaktpersonOrg]
    copykontaktpersonOrg.push(<OrganisasjonKontaktperson refName={register} key={nanoid()} />)
    setKontaktpersonOrg(copykontaktpersonOrg)
  }

  function handleKeyPress (event) {
    if (event.key === 'Escape') {
      props.onDismiss()
    }
  }

  function send () {
    props.onDismiss()
    window.alert('Bekreftelse om utplassering av elev er sendt.')
  }

  return (
    <>
      <Modal
        {...props}
        className='yff-confirmation-modal'
        onDismiss={props.onDismiss}
      >
        <ModalBody>
          {
            selectedStudent &&
            selectedStudent.firstName &&
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
                    <Paragraph><Link href={`/${ROUTES.classes}/${selectedStudent.classId}`}>{selectedStudent.className}</Link></Paragraph>
                    <Paragraph>26. april 2001</Paragraph>
                    <Paragraph>bra26041@skole.vtfk.no</Paragraph>
                  </div>
                </div>
              </div>
          }

          <p className='intro'>
            Her oppretter du bekreftelse om utplassering av eleven. Du må ha navnet eller organisasjonsnummeret til virksomheten hvor eleven skal utplasseres, avdelingen hvor eleven skal arbeide, og oppmøtested. Du må også fylle ut kontaktinformasjon til kontaktperson(er) hos virksomheten, i tillegg til elevens pårørende.
            <br />
            <br />
            Ved søk på virksomhet kan du bruke virksomhetens navn eller organisasjonsnummer.
          </p>

          <div className='form'>
            <EntitySearch setBrregData={setBrregData} fetcher={apiGet} />
            <CompanySelector brregData={brregData} setCompany={setCompany} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <CompanyDetails company={company} />
              <div className='input-element'>
                <TextField
                  name='organisasjonsAvdeling'
                  placeholder='Avdeling'
                  ref={register}
                />
              </div>
              <h2 className='subheader'>Kontaktpersoner</h2>
              {kontaktpersonOrg.map(person => person)}
              <button className='add-more-button button-left-icon button-primary' onClick={() => addOrgKontaktperson()}>
                <div className='button-left-icon-icon'>
                  <Icon name='add' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Legg til kontaktperson
                </div>
              </button>
              <div className='input-element'>
                <TextField
                  name='kopiPrEpost'
                  placeholder='Legg inn en eller flere e-postadresser som skal få tilsendt kopi av bekreftelsen. Bruk mellomrom som skilletegn ved flere adresser'
                  ref={register}
                />
              </div>
              <h2 className='subheader'>Tidsrom</h2>
              startdato(datovelger) - sluttdato(datovelger)
              <div className='input-element'>
                <TextField
                  name='daysPerWeek'
                  placeholder='Antall dager i uken'
                  ref={register}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='startTid'
                  placeholder='Fra kl'
                  value='08:00'
                  ref={register}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='sluttTid'
                  placeholder='Til kl'
                  value='16:00'
                  ref={register}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='oppmotested'
                  placeholder='Oppmøtested'
                  ref={register}
                />
              </div>
              <h2 className='subheader'>Elevinformasjon</h2>
              klassetrinn
              programområdevelger
              <h2 className='subheader'>Pårørende</h2>
              <div className='input-element'>
                <TextField
                  name='parorendeNavn'
                  placeholder='Navn'
                  ref={register}
                />
              </div>
              <div className='input-element'>
                <TextField
                  name='parorendeTelefon'
                  placeholder='Telefon'
                  ref={register}
                />
              </div>
              <button className='add-more-button button-left-icon button-primary'>
                <div className='button-left-icon-icon'>
                  <Icon name='add' size='small' />
                </div>
                <div className='button-left-icon-text'>
                  Legg til pårørende
                </div>
              </button>
            </form>
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

YffConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string
}
