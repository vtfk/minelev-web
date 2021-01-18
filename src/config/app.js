export const API = {
  URL: process.env.REACT_APP_API_URL || 'https://api.minelev.no'
}

export const SENTRY = {
  dsn: process.env.REACT_APP_SENTRY_DSN || false,
  environment: process.env.REACT_APP_SENTRY_ENV || process.env.REACT_APP_IS_MOCK ? 'demo' : process.env.NODE_ENV
}
