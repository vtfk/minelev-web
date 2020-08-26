import { AUTH } from '../config/constants'

export function getAccessToken () {
  return window.localStorage.getItem(AUTH.localStorageKey)
}
