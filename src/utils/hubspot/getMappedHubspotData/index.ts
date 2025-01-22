import { serializeName } from '@/utils/hubspot/serializeName'

import { GetMappedHubspotData } from './types'

export const getMappedHubspotData = ({ name }: GetMappedHubspotData) => {
  const { firstName, lastName } = serializeName(name)

  return {
    firstname: firstName,
    lastname: lastName
  }
}
