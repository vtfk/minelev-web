import { AUTH } from '../config/constants'
import { getAccessToken } from './get-access-token'
import { validateAccesstoken } from './validate-access-token'

export function isAuthenticated () {
  const accessToken = getAccessToken()
  const isAuthenticated = validateAccesstoken(accessToken)

  // Clean up invalid access token from local storage
  if (accessToken && !isAuthenticated) window.localStorage.removeItem(AUTH.localStorageKey)

  return isAuthenticated
}
