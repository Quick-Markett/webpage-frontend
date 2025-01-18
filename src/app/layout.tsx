import { Metadata } from 'next'

import '@/styles/index.scss'

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
      <body>{children}</body>
    </html>
  )
}
