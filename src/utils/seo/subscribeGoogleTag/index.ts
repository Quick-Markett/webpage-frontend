export const subscribeGoogleTag = (window, event) => {
  const eventName = `${event}`

  window.dataLayer.push({
    event: eventName
  })
}
