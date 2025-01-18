import { CustomEvents } from '@/types/events/customEvents'
import { DeleteCustomEventProps } from '@/types/events/deleteCustomEvent'

export const deleteCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: DeleteCustomEventProps<EventName>) => {
  document.removeEventListener(eventName, handler)
}
