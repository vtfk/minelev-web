import React from 'react'
import { AUTH } from '../../config/constants'

import './styles.scss'

export function Logout () {
  window.localStorage.removeItem(AUTH.localStorageKey)
  window.location.href = AUTH.logoutUrl

  return <div>Logger ut...</div>
}
