import { useRef } from 'react'
import Headline from './Headline'
import Stats from './Stats'
import ScrollScene from './ScrollScene'
import useHeroAnimation from '../hooks/useHeroAnimation'

export default function Hero() {
  const rootRef = useRef(null)

  useHeroAnimation(rootRef)

  return (
    <section className="hero-section" ref={rootRef}>
      <div className="hero-sticky">
        <header className="site-header">
          <a className="brand" href="#">
            ITZFIZZ<span>.</span>
          </a>
          <span className="header-tag">CREATIVE DIGITAL STUDIO</span>
          <a className="contact-link" href="mailto:hello@itzfizz.com">
            LET'S TALK ↗
          </a>
        </header>

        <div className="hero-content">
          <Headline />
          <Stats />
        </div>

        <ScrollScene />

        <footer className="hero-footer">
          <span>INNOVATION IN EVERY PIXEL</span>
          <span>SCROLL TO EXPERIENCE ↓</span>
        </footer>
      </div>
    </section>
  )
}