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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = 2000 // Parallax sur les 2000 premiers pixels
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col relative">
      {/* Forêt fixe en arrière-plan */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <ForestParallax scrollProgress={scrollProgress} />
      </div>

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

