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
      const stats = Array.from(root.querySelectorAll('.stat-item'))
      const arrow = root.querySelector('[data-arrowhead]')
      const trail = root.querySelector('[data-arrow-trail]')

      const travelDistance = () => window.innerWidth * 0.92

      gsap.set(letters, { autoAlpha: 0, y: 12 })
      gsap.set(stats, { autoAlpha: 0, y: 18 })
      gsap.set(arrow, { x: 0 })
      gsap.set(trail, { width: 0 })

      gsap.to(letters, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power2.out',
        delay: 0.15,
      })

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

      const revealPositions = stats.map((stat) => {
        const statCenter =
          stat.getBoundingClientRect().left +
          stat.getBoundingClientRect().width / 2

        return gsap.utils.clamp(
          0,
          5.7,
          (statCenter / travelDistance()) * 6
        )
      })

      stats.forEach((stat, index) => {
        timeline.to(
          stat,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: 'power1.out',
          },
          revealPositions[index]
        )
      })
    }, root)

    return () => ctx.revert()
  }, [rootRef])
}