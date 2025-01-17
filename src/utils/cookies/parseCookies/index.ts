export const parseCookies = (): { [key: string]: string } => {
  const cookies = document.cookie.split('; ')
  const cookieObj = {}

  cookies.forEach(cookie => {
    const [key, value] = cookie.split('=')
    cookieObj[key] = decodeURIComponent(value)
  })

  return cookieObj
}
