"use client"

import { HeroAccueil } from "@/components/sections/accueil/HeroAccueil";
import { ServicesGrid } from "@/components/sections/commun/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/accueil/TestimonialsSection";
import { FeaturesSection } from "@/components/sections/accueil/FeaturesSection";
import { CTASection } from "@/components/sections/commun/CTASection";
import { ForestBackground } from "@/components/sections/commun/ForestParallax";
import { ScrollFadeSection } from "@/components/sections/commun/ScrollFadeSection";

export default function Home() {
  return (
    <>
      <ForestBackground />

      {/* Contenu de la page par-dessus */}
      <div className="relative z-10">
        <ScrollFadeSection>
          <HeroAccueil />
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