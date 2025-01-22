'use server'

import { getMiddlewareData } from '../getMiddlewareData'

export const getStoredUtmSSR = async () => {
  const { cookiesUtmStoredData } = getMiddlewareData()

  return cookiesUtmStoredData
}
