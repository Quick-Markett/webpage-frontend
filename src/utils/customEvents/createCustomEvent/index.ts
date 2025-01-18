import { CreateCustomEventProps } from '@/types/events/createCustomEvent'
import { CustomEvents } from '@/types/events/customEvents'

export const createCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: CreateCustomEventProps<EventName>) => {
  document.addEventListener(eventName, handler)
}
