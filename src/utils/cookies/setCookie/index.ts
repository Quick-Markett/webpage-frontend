import { CookieData } from './types'

export const setCookie = ({ name, value }: CookieData): void => {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 100)

  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`
}
