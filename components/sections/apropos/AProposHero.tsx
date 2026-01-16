import Image from "next/image"
import { ABOUT_PAGE } from "@/lib/constants"

export function AProposHero() {
    return (
        <section className="py-8 sm:py-16 md:py-20 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Bloc Objectif */}
                <div className="py-8 sm:py-16 px-4 sm:px-10 text-center">
                    <h4 className="text-white font-bold leading-relaxed text-xl sm:text-4xl lg:text-6xl">
                        {ABOUT_PAGE.approach.goal}
                    </h4>
                    <p className="text-white text-base sm:text-lg lg:text-xl font-medium mb-6 sm:mb-8">
                        {ABOUT_PAGE.approach.goalSubtitle}
                    </p>
                    <p className="italic whitespace-pre-line text-white text-lg sm:text-2xl lg:text-4xl font-medium relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:animate-[underline_8s_ease-in-out]">
                        {ABOUT_PAGE.approach.goalDescription}
                    </p>
                </div>

                {/* Indicateur de scroll */}
                <div className="pt-6 sm:pt-12 animate-bounce">
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
        </section>
    )
}

export function AProposBio() {
    return (
        <section className="py-8 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Bio avec photo */}
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
                    {/* Photo avec badge expérience */}
                    <div className="shrink-0 relative">
                        <div className="rounded-full overflow-hidden shadow-xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                            <Image
                                src={ABOUT_PAGE.image}
                                alt="Photo de profil"
                                width={320}
                                height={320}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Badge expérience */}
                        <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 bg-primary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                            <span className="text-xs sm:text-sm lg:text-base font-bold">15+ ans d&apos;expérience</span>
                        </div>
                    </div>

                    {/* Contenu bio */}
                    <div className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
                            {ABOUT_PAGE.bio.title}
                        </h2>

                        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {ABOUT_PAGE.bio.introduction}
                        </p>

                        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Mon rôle ne se limite pas à créer un site web. J&apos;aide les entrepreneurs, indépendants, TPE et commerces locaux à <strong className="text-white font-semibold">y voir clair dans le digital</strong> et à mettre en place des outils utiles, cohérents et efficaces pour leur activité.
                        </p>

                        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {ABOUT_PAGE.bio.backgroundIntro}
                        </p>

                        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Ces expériences m&apos;ont permis d&apos;occuper des postes allant de l&apos;opérationnel pur à la direction générale, et surtout de développer une <strong className="text-white font-semibold">vision globale du fonctionnement d&apos;une entreprise, de ses contraintes et de ses priorités réelles</strong>.
                        </p>
                    </div>
                </div>

                {/* Section Approche mise en valeur */}
                <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-20 px-4 sm:px-8 lg:px-10 text-center bg-white/10 backdrop-blur-sm rounded-2xl mb-8 transition-all duration-500 lg:hover:scale-105">
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                        {ABOUT_PAGE.approach.principle}
                    </p>

                    <blockquote className="px-2 sm:px-6 my-4 sm:my-6">
                        <p className="italic text-white text-lg sm:text-xl lg:text-3xl leading-relaxed">
                            {ABOUT_PAGE.approach.citation}
                        </p>
                    </blockquote>

                    <p className="whitespace-pre-line text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {ABOUT_PAGE.approach.method}
                    </p>
                </div>
            </div>
        </section>
    )
}
