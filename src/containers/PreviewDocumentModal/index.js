import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'

import { DOCUMENTS } from '../../data/documents'
import { scores } from '../YffReviewModal/absence'

import { Modal, ModalBody, ModalSideActions } from '../../_lib-components/Modal'
import { TextField } from '../../_lib-components/TextField'
import { Heading3, Link, Paragraph } from '../../_lib-components/Typography'

import StudentCard from '../../components/student-card'

import './styles.scss'
import ErrorFallback from '../../components/yff-error-fallback'

export function PreviewDocumentModal ({ previewDoc, ...props }) {
  const prettyPrintDate = (date, includeTime) => {
    if (includeTime) return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    else return new Date(date).toLocaleDateString('nb-NO', { day: '2-digit', month: 'long', year: 'numeric' })
  }

  const generateStatus = () => {
    return previewDoc.status.map(status => {
      return `${prettyPrintDate(status.timestamp, true)} - ${DOCUMENTS.documentStatuses.find(docStatus => docStatus.id === status.status).short.nb}`
    }).join('\n')
  }

  // varsel
  const documentPeriod = previewDoc.content.period && DOCUMENTS.periods.find(type => type.id === previewDoc.content.period.id)?.value.nb
  const documentAtferd = previewDoc.variant === 'atferd' && previewDoc.content.reasons.map(reason => DOCUMENTS.behaviourReasons.find(type => type.id === reason.id))?.map(item => item.value.nb).join('\n')
  const documentFag = previewDoc.content.classes && previewDoc.content.classes.map(item => item.nb)?.join('\n')
  const documentFagReasons = previewDoc.variant === 'fag' && previewDoc.content.reasons.map(reason => DOCUMENTS.courseReasons.find(type => type.id === reason.id))?.map(item => item.value.nb).join('\n')
  const documentOrden = previewDoc.variant === 'orden' && previewDoc.content.reasons.map(reason => DOCUMENTS.orderReasons.find(type => type.id === reason.id))?.map(item => item.value.nb).join('\n')

  // samtale
  const documentSamtale = previewDoc.type === 'samtale' && DOCUMENTS.conversationStatuses.find(type => type.id === previewDoc.variant)?.value.nb

  // yff bekreftelse
  const documentYffBekreftelseBedrift = previewDoc.variant === 'bekreftelse' && `${previewDoc.content.bekreftelse.bedriftsData.navn}\n${previewDoc.content.bekreftelse.bedriftsData.adresse}\n${previewDoc.content.bekreftelse.bedriftsData.postnummer} ${previewDoc.content.bekreftelse.bedriftsData.poststed}`
  const documentYffBekreftelseTidsrom = previewDoc.variant === 'bekreftelse' && `${previewDoc.content.bekreftelse.fraDato} - ${previewDoc.content.bekreftelse.tilDato}`
  const documentYffBekreftelseArbeidsdag = previewDoc.variant === 'bekreftelse' && `${previewDoc.content.bekreftelse.startTid} - ${previewDoc.content.bekreftelse.sluttTid}`
  const documentYffBekreftelseParorende = previewDoc.variant === 'bekreftelse' && previewDoc.content.bekreftelse.parorendeData.map(person => `${person.navn} (${person.telefon})`).join('\n')
  const documentYffBekreftelseKontaktPerson = previewDoc.variant === 'bekreftelse' && previewDoc.content.bekreftelse.kontaktpersonData.map(person => `${person.navn} (${person.avdeling})\nTelefon: ${person.telefon} / E-post: ${person.epost}`).join('\n')
  
  // yff tilbakemelding
  const documentYffTilbakemeldingBedrift = previewDoc.variant === 'tilbakemelding' && `${previewDoc.content.utplassering.bedriftsData.navn}\n${previewDoc.content.utplassering.bedriftsData.adresse}\n${previewDoc.content.utplassering.bedriftsData.postnummer} ${previewDoc.content.utplassering.bedriftsData.poststed}`
  const documentYffTilbakemeldingTidsrom = previewDoc.variant === 'tilbakemelding' && `${previewDoc.content.utplassering.fraDato} - ${previewDoc.content.utplassering.tilDato}`
  
  // default
  //const documentYear = previewDoc && previewDoc.content.year
  const documentTeacher = previewDoc.teacher && previewDoc.teacher.name
  const documentDate = previewDoc && prettyPrintDate(previewDoc.created.timestamp)
  const documentStatus = previewDoc.status && generateStatus()

  useEffect(() => {
    // Close modal on escape
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') props.onDismiss()
    }

    document.addEventListener('keyup', handleKeyPress)
    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [])

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
          <StudentCard student={{ ...previewDoc.student, schoolName: previewDoc.school.name }} hideBirthdate={true} />

          <div className='form'>
            {/*
              //--------------------
              //  Year
              //--------------------
              previewDoc &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder='Skoleår'
                value={documentYear || 'Auda 🤭'} />
            */}

            {
              /* --------------------
                Periode
              -------------------- */
              previewDoc.content.period &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder='Periode'
                value={documentPeriod || 'Auda 🤭'} />
            }

            {
              /* --------------------
                Atferd
              -------------------- */
              previewDoc.variant && previewDoc.variant === 'atferd' &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder={`${documentAtferd.split('\n').length > 1 ? 'Valgte årsaker' : 'Valgt årsak'} for varselet`}
                rows={documentAtferd.split('\n').length || 1}
                value={documentAtferd || 'Auda 🤭'} />
            }

            {
              /* --------------------
                Fag
              -------------------- */
              previewDoc.variant && previewDoc.variant === 'fag' &&
              <>
                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder={`${documentFag.split('\n').length > 1 ? 'Valgte' : 'Valgt'} fag for varselet`}
                  rows={documentFag.split('\n')?.length || 1}
                  value={documentFag || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder={`${documentFagReasons.split('\n').length > 1 ? 'Valgte årsaker' : 'Valgt årsak'} for varselet`}
                  rows={documentFagReasons.split('\n')?.length || 1}
                  value={documentFagReasons || 'Auda 🤭'} />
              </>
            }

            {
              /* --------------------
                Orden
              -------------------- */
              previewDoc.variant && previewDoc.variant === 'orden' &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder={`${documentOrden.split('\n').length > 1 ? 'Valgte årsaker' : 'Valgt årsak'} for varselet`}
                rows={documentOrden.split('\n').length || 1}
                value={documentOrden || 'Auda 🤭'} />
            }

            {
              /* --------------------
                Samtale
              -------------------- */
              previewDoc.type && previewDoc.type === 'samtale' &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder='Er det gjennomført en elevsamtale?'
                value={documentSamtale || 'Auda 🤭'} />
            }

            {
              /* --------------------
                Notat
              -------------------- */
              previewDoc.type && previewDoc.type === 'notat' &&
              <Paragraph>Notatets innhold finner du igjen i <Link href='https://elevmappa.no' target='_blank' rel='noreferrer'>Elevmappa</Link></Paragraph>
            }

            {
              /* --------------------
                YFF bekreftelse
              -------------------- */
              previewDoc.variant && previewDoc.variant === 'bekreftelse' &&
              <>
                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Bedrift'
                  rows={documentYffBekreftelseBedrift.split('\n').length || 1}
                  value={documentYffBekreftelseBedrift || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Tidsrom'
                  value={documentYffBekreftelseTidsrom || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Arbeidsdag'
                  value={documentYffBekreftelseArbeidsdag || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Dager i uken'
                  value={previewDoc.content.bekreftelse.daysPerWeek || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Oppmøtested'
                  value={previewDoc.content.bekreftelse.oppmotested || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Pårørende'
                  rows={documentYffBekreftelseParorende.split('\n').length || 1}
                  value={documentYffBekreftelseParorende || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Kontaktperson på bedriften'
                  rows={documentYffBekreftelseKontaktPerson.split('\n').length || 1}
                  value={documentYffBekreftelseKontaktPerson || 'Auda 🤭'} />
              </>
            }

            {
              /* --------------------
                YFF laereplan
              -------------------- */
              previewDoc.variant && previewDoc.variant === 'laereplan' &&
              previewDoc.content.utplasseringer.map(utplassering => {
                return (
                  <>
                    <Heading3>
                      <div className='heading-text'>
                        {utplassering.name}
                      </div>
                    </Heading3>
                    
                    {
                      utplassering.maal.map(maal => {
                        return (
                          <>
                            <ul>
                              <li>
                                <div className='kompetansemaal-text'>Kompetansemål:</div>
                                <div className='kompetansemaal-desc'>{maal.grep.tittel.nb}</div>
                                <div className='kompetansemaal-text'>Arbeidsoppgaver:</div>
                                <div className='kompetansemaal-desc'>{maal.arbeidsoppgaver}</div>
                              </li>
                            </ul>
                          </>
                        )
                      })
                    }
                    <br />
                  </>
                )
              })
            }

            {
              /* --------------------
                YFF tilbakemelding
              -------------------- */
              previewDoc.variant && previewDoc.variant === 'tilbakemelding' &&
              <>
                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Bedrift'
                  rows={documentYffTilbakemeldingBedrift.split('\n').length || 1}
                  value={documentYffTilbakemeldingBedrift || 'Auda 🤭'} />

                <TextField
                  disabled={true}
                  noBorder={true}
                  placeholder='Tidsrom'
                  value={documentYffTilbakemeldingTidsrom || 'Auda 🤭'} />

                <Heading3>Kompetansemål og arbeidsoppgaver</Heading3>

                {
                  previewDoc.content.kompetansemal.map(kompetanse => {
                    return (
                      <>
                        <ul>
                          <li>
                            <div className='kompetansemaal-desc'>{kompetanse.grep.tittel.nb}</div>
                            <div className='kompetansemaal-text'>Arbeidsoppgaver:</div>
                            <div className='kompetansemaal-desc'>{kompetanse.arbeidsoppgaver}</div>
                            <div className='kompetansemaal-text'>Måloppnåelse:</div>
                            <div className='kompetansemaal-desc'>{kompetanse.tilbakemelding}</div>
                          </li>
                        </ul>
                      </>
                    )
                  })
                }

                <Heading3>Virksomhetens inntrykk og tilbakemelding til lærer</Heading3>

                {
                  Object.keys(previewDoc.content.evalueringsdata).map(evaluering => {
                    const item = previewDoc.content.evalueringsdata[evaluering]
                    if (!item.score) return ''

                    return (
                      <>
                        <ul>
                          <li>
                            <div className='kompetansemaal-desc'>{item.title.nb || item.title}</div>
                            <div className='kompetansemaal-text'>Måloppnåelse:</div>
                            <div className='kompetansemaal-desc'>{item.score}</div>
                          </li>
                        </ul>
                      </>
                    )
                  })
                }

                <Heading3>Elevens fravær</Heading3>
                <div className='kompetansemaal-text'>Antall dager:</div>
                <div className='kompetansemaal-desc'>{previewDoc.content.fravar.dager}</div>
                <div className='kompetansemaal-text'>Antall timer:</div>
                <div className='kompetansemaal-desc'>{previewDoc.content.fravar.timer}</div>
                <div className='kompetansemaal-text'>Varslet eleven om fraværet?</div>
                <div className='kompetansemaal-desc'>{scores.find(score => score.value === previewDoc.content.fravar.varslet).label}</div>
                <br />
                <br />
              </>
            }

            {
              /* --------------------
                Teacher
              -------------------- */
              previewDoc.teacher &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder='Sendt av'
                value={documentTeacher || 'Auda 🤭'} />
            }

            {
              /* --------------------
                Generated
              -------------------- */
              previewDoc &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder='Dato'
                value={documentDate || 'Auda 🤭'} />
            }

            {
              /* --------------------
                Status
              -------------------- */
              previewDoc.status &&
              <TextField
                disabled={true}
                noBorder={true}
                placeholder='Status'
                rows={documentStatus.split('\n').length || 1}
                value={documentStatus || 'Auda 🤭'} />
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
  className: PropTypes.string
}
