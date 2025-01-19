import { NextRequest } from 'next/server'

export const hasUTMStoredMiddleware = (request: NextRequest) => {
  const utmStoredCookie = request.cookies.get('utmStaticData')
  if (utmStoredCookie) {
    const utmStoredObj = JSON.parse(utmStoredCookie.value)
    if (utmStoredObj.utmSource) return true
    else return false
  }

  return false
}
