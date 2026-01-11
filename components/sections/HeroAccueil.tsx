import { SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroAccueilProps {
  scrollProgress: number
  isDesktop: boolean
}

export function HeroAccueil({ scrollProgress, isDesktop }: HeroAccueilProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fallback gradient pour mobile */}
      {!isDesktop && (
        <div className="absolute inset-0 w-full h-full bg-linear-to-b from-[#1a4d3e] to-[#0d2818]" />
      )}

      {/* Contenu centré par-dessus la forêt - disparaît en scrollant */}
      <div
        className="container mx-auto px-4 relative z-10 transition-opacity duration-300"
        style={{ opacity: isDesktop ? 1 - scrollProgress * 1.5 : 1 }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">

          <h1 className="text-4xl md:text-4xl lg:text-6xl font-script leading-tight text-white drop-shadow-2xl">
            {SITE_CONFIG.name}
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold drop-shadow-lg">
            {SITE_CONFIG.tagline}
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            {SITE_CONFIG.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Link href="/contact">
              <Button size="lg" className="text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all backdrop-blur-md">
                Travaillons ensemble
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/30 text-white">
                Découvrir mes services
              </Button>
            </Link>
          </div>

          {/* Indicateur de scroll */}
          <div className="pt-12 animate-bounce">
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

