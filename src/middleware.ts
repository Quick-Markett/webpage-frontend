import { NextRequest, NextResponse } from 'next/server'

import { getSearchParamsMiddleware } from './utils/middleware/getSearchParams'
import { getUserAgentMiddleware } from './utils/middleware/getUserAgent'
import { hasUTMStoredMiddleware } from './utils/middleware/hasUTMStoredMiddleware'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

export async function middleware(request: NextRequest) {
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders })
  }

  const userAgent = getUserAgentMiddleware(request)
  const searchParams = getSearchParamsMiddleware(request)
  const hasUtmStoredData = hasUTMStoredMiddleware(request)
  const utmStaticData = {
    utm_campaign: searchParams?.utm_campaign,
    utm_content: searchParams?.utm_content,
    utm_medium: searchParams?.utm_medium,
    utm_source: searchParams?.utm_source,
    utm_term: searchParams?.utm_term
  }

  const response = NextResponse.next()

  response.cookies.set('current-pathname', request.nextUrl.pathname)
  response.cookies.set('current-url', request.nextUrl.href)

  response.cookies.set('searchParams', JSON.stringify(searchParams))
  response.cookies.set('userAgent', userAgent)

  if (!hasUtmStoredData) {
    response.cookies.set('utmStaticData', JSON.stringify(utmStaticData))
  }

  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: ['/', '/((?!_next|api|_vercel|.favicon|.*\\..*).*)']
}
