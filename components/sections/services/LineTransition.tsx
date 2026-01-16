"use client"

import { useEffect, useRef, useState } from "react"

export function LineTransition() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Commence l'animation quand la section entre dans le viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress based on how much the section has scrolled into view
        const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // La ligne diminue de 400px à 0px
  const lineHeight = 400 * (1 - scrollProgress)

  return (
    <div ref={sectionRef} className="relative w-full" style={{ height: '400px' }}>
      {/* Ligne verticale qui rapetisse */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
        <div
          className="w-1 bg-white transition-all duration-300 ease-out"
          style={{ height: `${lineHeight}px` }}
        />
      </div>

      
    </div>
  )
}
