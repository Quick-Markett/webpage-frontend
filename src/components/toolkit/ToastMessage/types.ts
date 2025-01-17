import { DisclaimerProps } from '../Disclaimer/types'

export interface ToasterProps {
  defaultDuration?: number
}

export interface ToasterData extends DisclaimerProps {
  duration?: number
  message: string
}
