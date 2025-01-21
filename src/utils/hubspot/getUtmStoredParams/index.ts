import cookieCutter from 'cookie-cutter'

export const getUtmStoredParams = () => {
  const searchParams = JSON.parse(cookieCutter.get('utmStaticData') ?? {})

  const formattedUtm = {
    utm_campaign: searchParams?.utm_campaign,
    utm_content: searchParams?.utm_content,
    utm_medium: searchParams?.utm_medium,
    utm_source: searchParams?.utm_source,
    utm_term: searchParams?.utm_term
  }

  return formattedUtm
}
