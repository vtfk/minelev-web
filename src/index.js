import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { MsalProvider } from '@vtfk/react-msal'
import { config, loginRequest } from './config/auth'
import { SENTRY } from './config/app'
import * as pkg from '../package.json'

import App from './App'

import './assets/scss/base-styles.scss'

if (process.env.REACT_APP_IS_MOCK) {
  const { worker } = require('./mocks/browser')
  worker.start()
}

if (SENTRY.dsn) {
  Sentry.init({
    ...SENTRY,
    release: `${pkg.name}@${pkg.version}`,
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    beforeSend: (event, hint) => {
      /* Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
        Sentry.showReportDialog({
          eventId: event.event_id,
          title: 'Å heisann, dette skulle ikke ha skjedd...',
          subtitle: 'Det som skjedde nå skal vanligvis ikke skje, utviklerteamet har fått beskjed om hva som gikk galt!',
          subtitle2: 'Om du vil hjelpe oss litt videre på veien, er det fint om du forteller hva som skjedde når ting gikk på trynet...',
          labelName: 'Navn',
          labelEmail: 'E-postadresse',
          labelComments: 'Kommentar',
          labelSubmit: 'Send',
          labelClose: 'Avbryt',
          errorFormEntry: 'Noen av feltene har ugyldige verdier. Sjekk over skjemaet nedenfor og prøv igjen.',
          errorGeneric: 'Noe gikk galt.. Prøv igjen!',
          successMessage: 'Takk for tilbakemeldingen, det hjelper oss godt på vei med å få fikset feilen. Vi tar kontakt med deg om vi trenger mer informasjon.'
        })
      } */

      return event
    }

  })
  console.debug('Sentry initialized')
}

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider
      config={config}
      scopes={loginRequest}
    >
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
