import { Metadata } from 'next'

import '@/styles/index.scss'
import { APP_FONT } from '@/constants/font'

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
    <html lang="pt">
      <body className={APP_FONT.className}>{children}</body>
    </html>
  )
}
