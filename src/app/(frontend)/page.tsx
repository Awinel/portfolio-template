import React from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import About from '@/components/content/about'
import Skills from '@/components/content/skills'
import Education from '@/components/content/education'
import Projects from '@/components/content/projects'
import Nav from '@/components/nav'

export default function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      <main className="p-2 space-y-5 sticky bg-background ">
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
