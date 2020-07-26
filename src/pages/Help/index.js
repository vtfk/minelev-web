import React from "react"

import { DefaultLayout } from "../../layouts/Default"

import { Heading2, Heading3, Paragraph, Link } from "../../_lib-components/Typography"

import "./styles.scss"

export function Help() {
  return (
    <DefaultLayout>
      <div className="help">
        
        <Heading2 as="h1" className="page-title">
          Hjelpeside
        </Heading2>

        <Heading3 as="h2" className="help-section-title">
          Introduksjon
        </Heading3>

        <Paragraph className="help-text-block">
          Nedenfor finner du ofte stilte spørsmål og svar og en forklaring på navigasjon og statuser i løsningen.
        </Paragraph>

        <Paragraph className="help-text-block">
          <Link href="https://skoletfk.sharepoint.com/sites/arbrom/laering/e-laering/kontorstotte/Sider/MinElev---elevsamtaler.aspx">E-læringen til MinElev – elevsamtaler finner du her.</Link>
        </Paragraph>

        <Paragraph className="help-text-block">
          Det er også laget en kort <Link href="https://www.youtube.com/watch?v=EaphC5gz8fU">opplæringsvideo</Link> du kan se på YouTube.
        </Paragraph>

        <Paragraph className="help-text-block">
          Feil, mangler og ønsker kan du sende til <Link href="mailto:post.opplaring@t-fk.no">post.opplaring@t-fk.no</Link>
        </Paragraph>

        <Heading3 as="h2" className="help-section-title">
          Hvor finner jeg elevmappene?
        </Heading3>

        <Paragraph className="help-text-block">
          Du har tilgang til <Link href="https://elevmappa.vtfk.no/">Elevmappa</Link>.
          <br/>
          Du må være pålogget fylkeskommunens nettverk for få tilgang til Elevmappa.
        </Paragraph>

        <Heading3 as="h2" className="help-section-title">
          Statuser
        </Heading3>

        <Paragraph className="help-text-block">
          <strong>I kø</strong> – Dokumentet ligger klart til å behandles i MinElev
        </Paragraph>

        <Paragraph className="help-text-block">
          <strong>Sendt</strong> – Dokumentet er sendt til elev (og eventuelt foreldre) via SvarUt
        </Paragraph>

        <Paragraph className="help-text-block">
          <strong>Arkivert</strong> – Dokumentet er arkivert i ElevMappa
        </Paragraph>

        <Heading3 as="h2" className="help-section-title">
          Hvor finner jeg notater for en elev etter at jeg har sendt de til elevmappen? 
        </Heading3>

        <Paragraph className="help-text-block">
          Notatet er arkivert i ElevMappa og du må logge deg inn der for å kunne lese innholdet
        </Paragraph>

      </div>
    </DefaultLayout>
  )
}