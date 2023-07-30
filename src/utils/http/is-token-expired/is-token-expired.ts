import jwt, { JwtPayload } from 'jwt-decode'

export const isTokenExpired = (token?: string | null) => {
  if (!token) {
    return false
  }

  const decoded: JwtPayload = jwt(token)
  if (!decoded.exp) {
    return false
  }

  const tokenDate = new Date(0)
  tokenDate.setUTCSeconds(decoded.exp)

  const currentDate = new Date()

  return currentDate.valueOf() > tokenDate.valueOf()
}
