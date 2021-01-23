import * as Sentry from '@sentry/react'

function logError (error) {
  console.error(error)
  Sentry.captureException(error)
}

export default logError
