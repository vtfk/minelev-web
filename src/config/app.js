export const API = {
  URL: process.env.REACT_APP_API_URL || 'https://api.minelev.no'
}

export const SENTRY = {
  dsn: process.env.REACT_APP_SENTRY_DSN || process.env.SENTRY_DSN || false,
  environment: process.env.REACT_APP_SENTRY_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV || process.env.REACT_APP_IS_MOCK ? 'demo' : 'unknown'
}
