"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface ForestParallaxProps {
  scrollProgress: number
}

// Composant wrapper qui gère le scroll et le responsive
export function ForestBackground() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      if (!isDesktop) return

      const scrolled = window.scrollY
      const maxScroll = 3000
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [isDesktop])

  return (
    <>
      {/* Forêt fixe en arrière-plan avec hauteur max 1400px - uniquement sur desktop */}
      {isDesktop && (
        <div className="fixed top-0 left-0 w-full h-[1400px] z-0 pointer-events-none">
          <ForestParallax scrollProgress={scrollProgress} />
        </div>
      )}

      {/* Image de forêt fixe pour mobile sur toute la page */}
      {!isDesktop && (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Forest background"
              fill
              className="object-cover"
            />
            {/* Overlay sombre pour rendre le texte lisible */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-linear-to-b from-[#1a4d3e]/40 to-[#0d2818]/60" />
          </div>
        </div>
      )}
    </>
  )
}

// Composant parallax interne (desktop uniquement)
function ForestParallax({ scrollProgress }: ForestParallaxProps) {
  // Inverser l'effet: les couches bougent vers le haut quand on scroll (effet zoom/entrée)
  // On limite le mouvement pour éviter les espaces blancs
  const maxScroll = 0.3 // Limiter à 30% de mouvement maximum

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Couche de fond (ciel/arrière-plan lointain) - bouge très peu */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${1 + scrollProgress * 0.05}) translateY(${-scrollProgress * maxScroll * 15}%)`,
          willChange: "transform",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Forest background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent" />
      </div>

      {/* Couche intermédiaire (arbres moyens) - bouge modérément */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${1 + scrollProgress * 0.15}) translateY(${-scrollProgress * maxScroll * 30}%)`,
          willChange: "transform",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Forest midground"
          fill
          className="object-cover opacity-90"
          quality={100}
          unoptimized={false}
        />
      </div>

      {/* Couche de premier plan (arbres proches) - bouge beaucoup et zoom */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${1 + scrollProgress * 0.3}) translateY(${-scrollProgress * maxScroll * 50}%)`,
          willChange: "transform",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Forest foreground"
          fill
          className="object-cover opacity-70"
          quality={100}
          unoptimized={false}
        />
      </div>

      {/* Overlay de brume qui s'intensifie en scrollant */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: scrollProgress * 0.6,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Gradient turquoise pour l'ambiance */}
      <div className="absolute inset-0 bg-linear-to-b from-[#17A89A]/10 to-black/30 mix-blend-overlay" />

      {/* Filtre noir opaque pour rendre le texte lisible */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}
