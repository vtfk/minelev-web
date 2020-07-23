import React from "react"
import { Route, Redirect } from "react-router-dom"

import { ROUTES } from '../config/constants'

export function ProtectedRoute(props) {
  // TODO: auth check
  const isAuthenticated = true

  return isAuthenticated ? (
      <Route { ...props } />
  ) : (
      <Redirect to={{ pathname: `/${ ROUTES.login }` }} />
  )
}