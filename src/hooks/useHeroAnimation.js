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
      const car = root.querySelector('[data-car]')

      gsap.set(letters, {
        autoAlpha: 0,
        y: 18,
      })

      gsap.set(stats, {
        autoAlpha: 0,
        y: 20,
      })

      gsap.set(car, {
        x: 0,
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
        car,
        {
          x: () => window.innerWidth * 0.8,
          ease: 'none',
          duration: 5,
        },
        0
      )

      timeline.to(
        letters,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.25,
          ease: 'power1.out',
        },
        0.3
      )

      timeline.to(
        stats,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.55,
          duration: 0.5,
          ease: 'power1.out',
        },
        1.5
      )
    }, root)

    return () => ctx.revert()
  }, [rootRef])
}