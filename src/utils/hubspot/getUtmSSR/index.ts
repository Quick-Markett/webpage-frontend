'use server'

import { getMiddlewareData } from '../getMiddlewareData'

export const getUtmSSR = async () => {
  const { cookiesSearchParams } = getMiddlewareData()

  return {
    utmCampaign: cookiesSearchParams?.utm_campaign,
    utmContent: cookiesSearchParams?.utm_content,
    utmMedium: cookiesSearchParams?.utm_medium,
    utmSource: cookiesSearchParams?.utm_source,
    utmTerm: cookiesSearchParams?.utm_term
  }
}
