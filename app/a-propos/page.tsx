"use client"

import { CTASection } from "@/components/sections/commun/CTASection"
import { AProposHero, AProposBio } from "@/components/sections/apropos/AProposHero"
import { AProposCasquette } from "@/components/sections/apropos/AProposCasquette"
import { AProposStack } from "@/components/sections/apropos/AProposStack"
import { ForestBackground } from "@/components/sections/commun/ForestParallax"

export default function AboutPage() {
  return (
    <div className="flex flex-col relative">
      <ForestBackground />

      {/* Contenu de la page */}
      <div className="relative z-10">
          <AProposHero />
          <AProposBio />
          <AProposCasquette />
          <AProposStack />
          <CTASection />
      </div>
    </div>
  )
}
