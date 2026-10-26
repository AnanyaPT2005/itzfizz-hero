import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useHeroAnimation(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const headline = root.querySelector('[data-headline]')
      const stats = root.querySelectorAll('.stat-item')
      const car = root.querySelector('[data-car]')

      if (!headline || !stats.length || !car) return

      gsap.set(headline, {
        autoAlpha: 0,
        y: 35,
      })

      gsap.set(stats, {
        autoAlpha: 0,
        y: 20,
      })

      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .to(headline, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        })
        .to(
          stats,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.2,
          },
          '-=0.35'
        )

      gsap.fromTo(
        car,
        {
          xPercent: -15,
          scale: 0.8,
          rotation: -3,
        },
        {
          xPercent: 15,
          scale: 1.05,
          rotation: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [rootRef])
}