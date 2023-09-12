import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Jecrevin: Random Quote Machine',
  description: 'A website generates random quote.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  )
}
