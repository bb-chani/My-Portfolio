import { useEffect } from 'react'

/**
 * Adds the `in` class to every `.reveal-up` element once it scrolls into view,
 * mirroring the original IntersectionObserver behaviour.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const els = document.querySelectorAll('.reveal-up')
    els.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}
