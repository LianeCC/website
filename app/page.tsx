"use client"

import { HeroAccueil } from "@/components/sections/HeroAccueil";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";
import { ForestParallax } from "@/components/sections/ForestParallax";
import { ScrollFadeSection } from "@/components/sections/ScrollFadeSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Détecter si on est sur desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    // Calculer la progression du scroll sur toute la page
    const handleScroll = () => {
      if (!isDesktop) return

      const scrolled = window.scrollY
      const maxScroll = 3000 // Étendre l'effet de parallax sur 3000px pour couvrir plus de sections
      // Progress de 0 à 1 sur les premiers 3000 pixels
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

      {/* Contenu de la page par-dessus */}
      <div className="relative z-10">
        <ScrollFadeSection>
          <HeroAccueil scrollProgress={scrollProgress} isDesktop={isDesktop} />
        </ScrollFadeSection>
        <ScrollFadeSection>
          <ServicesGrid />
        </ScrollFadeSection>
        <ScrollFadeSection>
          <FeaturesSection />
        </ScrollFadeSection>
        <ScrollFadeSection>
          <TestimonialsSection />
        </ScrollFadeSection>
        <ScrollFadeSection>
          <CTASection />
        </ScrollFadeSection>
      </div>
    </>
  )
}