import { Metadata } from 'next'

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
      <body className={''}>{children}</body>
    </html>
  )
}
