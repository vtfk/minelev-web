import React from 'react'

import { DefaultLayout } from '../../layouts/Default'

import { Heading2, Heading3, Paragraph, Link, Heading4 } from 'vtfk-component-library/ui/Typography'

import './styles.scss'

const QuestionBlock = ({ question, children }) => {
  return (
    <div class='help-question-block'>
      <Heading4 className='help-section-question'>
        {question}
      </Heading4>

      <Paragraph className='help-text-block'>
        {children}
      </Paragraph>
    </div>
  )
}

export function Help () {
  return (
    <DefaultLayout>
      <div className='help'>

        <Heading2 as='h1' className='page-title'>
          Hjelpeside
        </Heading2>

        <Heading3 as='h2' className='help-section-title'>
          Introduksjon
        </Heading3>

        <Paragraph className='help-text-block'>
          Nedenfor finner du ofte stilte spørsmål, en forklaring på navigasjon og statuser i løsningen.
          <br />
          Veiledning i bruk av MinElev, finner du <Link href='https://go.nanolearning.com/ViewActivity/?da=1919218&key=qOMBH3R6mvOOHJvC&mode=1'>her</Link>.
        </Paragraph>

        <Heading3 as='h2' className='help-section-title'>
          Ofte stilte spørsmål
        </Heading3>

        <QuestionBlock question='Jeg mangler tilgang til en elev eller en klasse'>
          Tilgang til elever og klasser i MinElev styres fra Extens. Ta kontakt med Extensansvarlig på skolen din, så hjelper de deg!
        </QuestionBlock>

        <QuestionBlock question='Hvor finner jeg elevmappene?'>
          Du har tilgang til elevmappene til dine elever i <Link href='https://elevmappa.no' target='_blank' rel='noreferrer'>Elevmappa</Link>.
          <br />
          Du må være pålogget fylkeskommunens nettverk for få tilgang til Elevmappa.
        </QuestionBlock>

        <QuestionBlock question='Hvor finner jeg notater for en elev?'>
          Notatet er arkivert i elevens elevmappe, og du må logge deg inn der for å kunne lese innholdet i notatet.
        </QuestionBlock>

        <QuestionBlock question='Statuser'>
          <strong>I kø</strong> – Dokumentet ligger klart til å behandles i MinElev<br />
          <strong>Sendt</strong> – Dokumentet er sendt til elev (og eventuelt foreldre) via SvarUt<br />
          <strong>Arkivert</strong> – Dokumentet er arkivert i Elevmappa
        </QuestionBlock>

      </div>
    </DefaultLayout>
  )
}
