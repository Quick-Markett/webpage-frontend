import { getUtmStoredParams } from '../getUtmStoredParams'
import { GetUTMDataProps, UTMData } from './types'

export const getUTMData = ({ locale }: GetUTMDataProps): UTMData => {
  const storedUtmData = getUtmStoredParams()

  const utmCampaign = storedUtmData?.utm_campaign ?? ''
  const utmContent = storedUtmData?.utm_content ?? ''
  const utmMedium = storedUtmData?.utm_medium ?? ''
  const utmSource = storedUtmData?.utm_source ?? ''
  const utmTerm = storedUtmData?.utm_term ?? ''

  return {
    hsLanguage: locale,
    utmCampaign,
    utmContent,
    utmMedium,
    utmSource,
    utmTerm
  }
}
