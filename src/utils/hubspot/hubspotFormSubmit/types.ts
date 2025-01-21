import { FreeDemoFormHubspotData } from '@/components/common/Forms/FreeDemoForm/types'

export interface HubspotFormTemplateData {
  freeDemo: FreeDemoFormHubspotData
}

type HubspotFormType<K extends keyof HubspotFormTemplateData> =
  HubspotFormTemplateData[K]

export interface HubspotFormSubmitProps<
  THubspotFormVariant extends keyof HubspotFormTemplateData
> {
  data: HubspotFormType<THubspotFormVariant>
  formVariant: THubspotFormVariant
  url?: string
}
