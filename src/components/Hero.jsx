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
        <div className="hero-content">
          <Headline />
          <Stats />
        </div>

        <ScrollScene />
      </div>
    </section>
  )
}