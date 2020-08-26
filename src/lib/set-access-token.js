import { AUTH } from '../config/constants'

export function setAccessToken (token) {
  if (token) {
    window.localStorage.setItem(AUTH.localStorageKey, token)
  } else {
    window.localStorage.removeItem(AUTH.localStorageKey)
  }
}
