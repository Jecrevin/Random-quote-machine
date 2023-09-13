import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import Script from 'next/script'

const josefinSans = Josefin_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Jecrevin: Random Quote Machine',
  description: 'A website generates random quote.'
}

export default function RootLayout ({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
      <Script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' />
    </html>
  )
}
