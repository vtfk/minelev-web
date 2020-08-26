import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../lib/is-authenticated'
import { ROUTES } from '../config/constants'

export function ProtectedRoute (props) {
  // Redirect to current page, if not on frontpage
  const currentPage = window.location.pathname
  const redirectToParam = currentPage !== '/' ? `?redirect=${currentPage}` : ''

  return isAuthenticated() ? (
    <Route {...props} />
  ) : (
    <Redirect to={`/${ROUTES.login}${redirectToParam}`} />
  )
}
