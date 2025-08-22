import React from 'react'
import Portfolio from '@/lib/actions/portfolio'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export default async function HomePage() {
  const portfolio = await Portfolio()
  return (
    <>
      <header>
        <nav></nav>
        <h1 className="text-foreground">{portfolio.header.name}</h1>
      </header>
      <main></main>
      <footer>
        <ThemeToggle />
      </footer>
    </>
  )
}
