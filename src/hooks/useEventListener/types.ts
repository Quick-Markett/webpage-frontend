import { CustomEvents } from '@/types/events/customEvents'

export type Handler<EventName extends keyof CustomEvents> = (
  event: CustomEvents[EventName]
) => void
