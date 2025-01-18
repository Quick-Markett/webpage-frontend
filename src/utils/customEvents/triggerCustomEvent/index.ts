import { CustomEvents } from '@/types/events/customEvents'
import { TriggerCustomEventProps } from '@/types/events/triggerCustomEvent'

export const triggerCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  data
}: TriggerCustomEventProps<EventName>) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
