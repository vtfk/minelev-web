import React from "react"
import { Route, Redirect } from "react-router-dom"

import { ROUTES } from '../config/constants'

export function ProtectedRoute(props) {
  const Component = props.component

  // TODO: auth check
  const isAuthenticated = true

  return isAuthenticated ? (
      <Route { ...props } />
  ) : (
      <Redirect to={{ pathname: `/${ ROUTES.login }` }} />
  )
}