import { getSearchParamsMiddleware } from '@/utils/middleware/getSearchParams'
import { getUserAgentMiddleware } from '@/utils/middleware/getUserAgent'

export type CookiesUserAgent = ReturnType<typeof getUserAgentMiddleware>
export type CookiesSearchParams = ReturnType<typeof getSearchParamsMiddleware>

export interface GetMiddlewareDataReturn {
  cookiesSearchParams: CookiesSearchParams
  cookiesUserAgent: CookiesUserAgent
  cookiesUtmStoredData: {
    utmCampaign: string
    utmContent: string
    utmMedium: string
    utmSource: string
    utmTerm: string
  }
  headersClientId: string
}
