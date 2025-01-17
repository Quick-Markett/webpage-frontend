interface DataLayerEvent {
  event: string
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

interface PagesType {
  [key: string]: {
    title?: string
    description?: string
  }
}

export type Locale = 'pt' | 'en'
