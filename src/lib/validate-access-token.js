import { decode } from 'jsonwebtoken'

export function validateAccesstoken (token) {
  if (!token) return false

  const decodedToken = decode(token)
  if (!decodedToken) return false

  console.debug(decodedToken)

  const tokenExpired = (Date.now() / 1000) >= decodedToken.exp
  if (tokenExpired) return false

  return true
}
