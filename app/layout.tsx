import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Computer Science Chronicles',
  description: 'Everything a CS student must know',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
