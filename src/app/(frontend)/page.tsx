import React from 'react'
import Portfolio from '@/lib/actions/portfolio'

export default async function HomePage() {
  const portfolio = await Portfolio()
  return (
    <>
      <header>
        <nav></nav>
        <h1 className="text-red-500">{portfolio.header.name}</h1>
      </header>
    </>
  )
}
