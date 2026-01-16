"use client"

import { ForestBackground } from "@/components/sections/commun/ForestParallax"
import { LineTransition } from "@/components/sections/services/LineTransition"
import { CustomOptionsSection } from "@/components/sections/services/CustomOptionsSection"
import { CTASection } from "@/components/sections/commun/CTASection"
import { HeroServices } from "@/components/sections/services/HeroServices"
import { PricingPlans } from "@/components/sections/services/PricingPlans"
import { ScrollFadeSection } from "@/components/sections/commun/ScrollFadeSection"

export default function ServicesPage() {
  return (
    <>
      <ForestBackground />

      {/* Contenu de la page par-dessus */}
      <div className="relative z-10">
        <HeroServices />
        <PricingPlans />
        

        {/* Transition ligne */}
        <LineTransition />

        {/* Options personnalisables */}
            <ScrollFadeSection>
              <CustomOptionsSection />
            </ScrollFadeSection>
          

        {/* CTA Final */}
        <ScrollFadeSection>
          <CTASection />
        </ScrollFadeSection>

      </div>
    </>
  )
}

