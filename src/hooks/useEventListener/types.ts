import { CustomEvents } from '@/types/customEvents/customEvents'

export type Handler<EventName extends keyof CustomEvents> = (
  event: CustomEvents[EventName]
) => void
