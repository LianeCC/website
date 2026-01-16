"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollFadeSectionProps {
  children: React.ReactNode
  className?: string
}

export function ScrollFadeSection({ children, className = "" }: ScrollFadeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Position du centre de la section par rapport au viewport
      const sectionCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2

      // Distance du centre de la section au centre du viewport
      const distance = Math.abs(sectionCenter - viewportCenter)
      const maxDistance = windowHeight

      // Calculer l'opacité (1 quand au centre, diminue quand on s'éloigne)
      let newOpacity = 1 - (distance / maxDistance) * 1.5

      // Limiter l'opacité entre 0.3 et 1
      newOpacity = Math.max(0.3, Math.min(1, newOpacity))

      setOpacity(newOpacity)
    }

    handleScroll() // Initial calculation
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={className}
      style={{
        opacity,
        transition: "opacity 0.3s ease-out",
      }}
    >
      {children}
    </section>
  )
}
