"use client"

import { SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroAccueil() {
  const [opacity, setOpacity] = useState(1)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setOpacity(1)
        return
      }
      const scrollProgress = Math.min(window.scrollY / 3000, 1)
      setOpacity(1 - scrollProgress * 1.5)
    }

    checkDesktop()
    handleScroll()
    window.addEventListener("resize", checkDesktop)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", checkDesktop)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-16 sm:py-20">
      {/* Contenu centré par-dessus la forêt - disparaît en scrollant */}
      <div
        className="container mx-auto px-4 sm:px-6 relative z-10 transition-opacity duration-300"
        style={{ opacity: isDesktop ? opacity : 1 }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-script leading-tight text-white drop-shadow-2xl">
            {SITE_CONFIG.name}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold drop-shadow-lg px-2">
            {SITE_CONFIG.tagline}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-lg px-4">
            {SITE_CONFIG.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all backdrop-blur-md">
                Travaillons ensemble
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/30 text-white">
                Découvrir mes services
              </Button>
            </Link>
          </div>

          {/* Indicateur de scroll */}
          <div className="pt-8 sm:pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  )
} 

