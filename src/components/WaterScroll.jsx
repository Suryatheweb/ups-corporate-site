import { useEffect, useRef } from 'react'

export default function WaterScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let frame = 0

    const update = () => {
      frame = 0
      const offset = window.scrollY
      element.style.setProperty('--water-shift-back', `${Math.max(-90, offset * -0.16)}px`)
      element.style.setProperty('--water-shift-mid', `${Math.min(130, offset * 0.24)}px`)
      element.style.setProperty('--water-shift-front', `${Math.min(180, offset * 0.34)}px`)
      element.style.setProperty('--water-rise', `${Math.max(-22, offset * -0.04)}px`)
    }

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="water-scroll" aria-hidden="true">
      <div className="water-layer water-layer-back">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 54C120 40 240 66 360 60C480 54 600 28 720 34C840 40 960 74 1080 72C1200 70 1320 44 1440 50L1440 120L0 120Z" />
        </svg>
      </div>
      <div className="water-layer water-layer-mid">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 76C120 62 240 88 360 80C480 72 600 42 720 50C840 58 960 96 1080 88C1200 80 1320 58 1440 66L1440 120L0 120Z" />
        </svg>
      </div>
      <div className="water-layer water-layer-front">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 92C120 82 240 104 360 98C480 92 600 68 720 76C840 84 960 112 1080 106C1200 100 1320 82 1440 88L1440 120L0 120Z" />
        </svg>
      </div>
      <span className="water-bubble water-bubble-1" />
      <span className="water-bubble water-bubble-2" />
      <span className="water-bubble water-bubble-3" />
      <span className="water-bubble water-bubble-4" />
      <span className="water-bubble water-bubble-5" />
    </div>
  )
}
