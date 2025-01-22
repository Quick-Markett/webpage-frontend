import axios from 'axios'

import { HUBSPOT_FORMS_ID } from '@/constants/hubspot/hubspotFormsID'
import { HUBSPOT_PROPS_KEY_MAP } from '@/constants/hubspot/hubspotPropsKeyMap'

import { serializeCookie } from '../serializeCookie'
import { HubspotFormSubmitProps, HubspotFormTemplateData } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hubspotFieldsMapper = (fields: Record<string, any>) => {
  const hubspotObject = Object.keys(fields).reduce((newObj, key) => {
    const newKey = HUBSPOT_PROPS_KEY_MAP[key]
    const value = fields[key]

    if (!newKey || !value) return newObj

    newObj[newKey] = fields[key]

    return newObj
  }, {})

  return Object.entries(hubspotObject).map(([name, value]) => ({
    name,
    value
  }))
}

export const hubspotFormSubmit = async <
  K extends keyof HubspotFormTemplateData
>(
  props: HubspotFormSubmitProps<K>
) => {
  const { data, formVariant, url } = props

  const userPersonalData = {
    firstname: data?.firstname,
    lastname: data?.lastname
  }

  const hubspotFields = {
    ...userPersonalData,
    ...data
  }

  const hubspotFormattedFields = hubspotFieldsMapper(hubspotFields)
  const hutk = serializeCookie('hubspotutk')
  const formID = HUBSPOT_FORMS_ID[formVariant]

  try {
    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/49027986/${formID}`,
      {
        submittedAt: '',
        fields: hubspotFormattedFields,
        context: hutk
          ? {
              hutk,
              pageUri: window.location.href,
              pageName: url ?? window.location.pathname
            }
          : {
              pageUri: window.location.href,
              pageName: url ?? window.location.pathname
            }
      }
    )

    if (response.status !== 200) return false

    if (response.status === 200) {
      return true
    }
  } catch (err) {
    console.error({
      hubSpotFormSubmitErrorMessage: err.message
    })

    return false
  }
}
