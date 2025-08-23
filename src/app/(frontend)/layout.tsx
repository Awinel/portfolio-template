import React from 'react'
import '@/globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'

export const metadata = {
  description: 'A template to create your own portfolio',
  title: 'Portfolio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
