import { HubspotFormTemplateData } from '@/utils/hubspot/hubspotFormSubmit/types'

type HubspotFormsId = {
  [formVariantName in keyof HubspotFormTemplateData]: string
}

export const HUBSPOT_FORMS_ID: HubspotFormsId = {
  freeDemo: '8dbe9c7f-e2d3-4737-b20d-3f1cea1b43a1'
} as const
