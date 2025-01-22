import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies, headers } from 'next/headers'

import { HEADERS } from '@/constants/enums/headers'

import { CookiesUserAgent, GetMiddlewareDataReturn } from './types'

const getCookieValue = <CookieValue>(
  cookie: RequestCookie
): CookieValue | null => {
  return (cookie?.value as CookieValue) ?? null
}

export const getMiddlewareData = (): GetMiddlewareDataReturn => {
  const cookieStore = cookies()
  const headersStore = headers()

  const cookiesUserAgent = getCookieValue<CookiesUserAgent>(
    cookieStore.get('userAgent')
  )

  const cookiesSearchParams =
    JSON.parse(getCookieValue<string>(cookieStore.get('searchParams'))) ?? null
  const cookiesUtmStoredData =
    JSON.parse(getCookieValue<string>(cookieStore.get('utmStoredData'))) ?? null

  const headersClientId = headersStore.get(HEADERS.CLIENT_ID) ?? undefined

  return {
    cookiesUserAgent,
    cookiesSearchParams,
    headersClientId,
    cookiesUtmStoredData
  }
}
