import { Metadata } from 'next'

import { APP_FONT } from '../constants/font'

export const metadata: Metadata = {
  robots: {
    index: false
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={APP_FONT.className} lang="pt">
      <body>{children}</body>
    </html>
  )
}
