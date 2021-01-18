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
    tracesSampleRate: 1.0
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
