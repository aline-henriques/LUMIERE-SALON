'use client'

import { useReveal } from './components/useReveal'
import Cursor       from './components/Cursor'
import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import Hero         from './sections/Hero'
import Marquee      from './sections/Marquee'
import Services     from './sections/Services'
import Philosophy   from './sections/Philosophy'
import Team         from './sections/Team'
import Testimonials from './sections/Testimonials'
import Booking      from './sections/Booking'

export default function Home() {
  useReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Philosophy />
        <Team />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
