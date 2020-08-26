import { decode } from 'jsonwebtoken'
import { getAccessToken } from './get-access-token'

export function getCurrentUser () {
  const accessToken = getAccessToken()
  const decodedToken = decode(accessToken)
  if (!decodedToken) return {}

  console.log(decodedToken)

  return {
    firstName: decodedToken.name.givenName || '',
    lastName: decodedToken.name.familyName || ''
  }
}