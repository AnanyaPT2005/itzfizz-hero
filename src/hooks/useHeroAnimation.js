
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useHeroAnimation(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const letters = root.querySelectorAll('.headline-letter')
      const stats = root.querySelectorAll('.stat-item')
      const arrow = root.querySelector('[data-arrowhead]')
      const trail = root.querySelector('[data-arrow-trail]')

      const travelDistance = () => window.innerWidth * 0.92

      gsap.set(letters, { autoAlpha: 0, y: 12 })
      gsap.set(stats, { autoAlpha: 0, y: 18 })
      gsap.set(arrow, { x: 0 })
      gsap.set(trail, { width: 0 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      timeline.to(
        arrow,
        {
          x: travelDistance,
          duration: 6,
          ease: 'none',
        },
        0
      )

      timeline.to(
        trail,
        {
          width: travelDistance,
          duration: 6,
          ease: 'none',
        },
        0
      )

      timeline.to(
        letters,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.3,
          ease: 'power1.out',
        },
        0.2
      )

      stats.forEach((stat, index) => {
        const revealPosition = 1.5 + index * 1.1

        timeline.to(
          stat,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: 'power1.out',
          },
          revealPosition
        )
      })
    }, root)

    return () => ctx.revert()
  }, [rootRef])
}
