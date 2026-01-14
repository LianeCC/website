"use client"

import { useState, useEffect } from "react"
import { ForestParallax } from "@/components/sections/ForestParallax"
import { DarkGreenTransition } from "@/components/sections/DarkGreenTransition"
import { CustomOptionsSection } from "@/components/sections/CustomOptionsSection"
import { WorkProcessSection } from "@/components/sections/WorkProcessSection"
import { CTASection } from "@/components/sections/CTASection"
import { HeroServices } from "@/components/sections/HeroServices"
import { PricingPlans } from "@/components/sections/PricingPlans"
import { ScrollFadeSection } from "@/components/sections/ScrollFadeSection"

export default function ServicesPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Détecter si on est sur desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      if (!isDesktop) return

      const scrolled = window.scrollY
      const maxScroll = 2000 // Parallax sur les 2000 premiers pixels
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
    <div className="flex flex-col relative">
      {/* Forêt fixe en arrière-plan - uniquement sur desktop */}
      {isDesktop && (
        <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
          <ForestParallax scrollProgress={scrollProgress} />
        </div>
      )}

      {/* Image de forêt fixe pour mobile sur toute la page */}
      {!isDesktop && (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Forest background"
              className="w-full h-full object-cover"
            />
            {/* Overlay sombre pour rendre le texte lisible */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-linear-to-b from-[#1a4d3e]/40 to-[#0d2818]/60" />
          </div>
        </div>
      )}

      {/* Contenu de la page par-dessus */}
      <div className="relative z-10">
        <HeroServices />
        <PricingPlans />
        

        {/* Transition vers fond vert foncé */}
        <DarkGreenTransition />

        {/* Sections avec fond vert qui continue */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#082e21] z-0" />
          <div className="relative z-10">
            <ScrollFadeSection>
              <CustomOptionsSection />
            </ScrollFadeSection>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-[#082e21]">
        <ScrollFadeSection>
          <CTASection />
        </ScrollFadeSection>
        </div>

      </div>
    </div>
  )
}

