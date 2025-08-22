import React from 'react'
import '@/globals.css'

export const metadata = {
  description: 'A template to create your own portfolio',
  title: 'Portfolio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
