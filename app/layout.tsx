import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PT. Agrimarliv Technology Indonesia',
  description: 'Agriculture Maritime Livestock',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
