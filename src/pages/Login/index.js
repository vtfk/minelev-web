import React from 'react'
import queryString from 'query-string'
import { isAuthenticated } from '../../lib/is-authenticated'
import { AUTH, ROUTES } from '../../config/constants'

import './styles.scss'
import { Redirect } from 'react-router-dom'
import { setAccessToken } from '../../lib/set-access-token'

export function Login () {
  const { jwt, redirect } = queryString.parse(window.location.search)

  // Callback from login provider assigns the jwt parameter, store the token in local storage
  if (jwt) setAccessToken(jwt)

  // We got a jwt, and it was verified successfully
  if (isAuthenticated()) {
    // Redirect to redirect... 🤔
    if (redirect) return <Redirect to={`${redirect}`} />
    return <Redirect to='/' />
  }

  const origin = `${window.location.origin}/${ROUTES.login}`
  const params = queryString.stringify({ origin, redirect })

  // Redirect to login provider
  window.location.href = `${AUTH.loginUrl}?${params}`

  return <div>Sender deg til pålogginga...</div>
}
