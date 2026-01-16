import { ABOUT_PAGE } from "@/lib/constants"

export function AProposCasquette() {

    return (
        <section className="py-8 sm:py-12 lg:py-20">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">

                {/* Titre de section */}
                <div className="text-center mb-6 sm:mb-10 lg:mb-12">
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4">
                        {ABOUT_PAGE.expertise.title}
                    </h3>
                </div>

                {/* Ce que je fais concrètement */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-10 transition-all duration-500 lg:hover:scale-105">
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                        {ABOUT_PAGE.expertise.whatIDoIntro}
                    </p>

                    <ul className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {ABOUT_PAGE.expertise.whatIDo.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 sm:gap-3 text-white">
                                <span className="text-primary mt-0.5 sm:mt-1">✓</span>
                                <span className="text-sm sm:text-base lg:text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="whitespace-pre-line text-white text-center text-base sm:text-xl lg:text-2xl leading-relaxed font-bold rounded-xl p-3 sm:p-6">
                        {ABOUT_PAGE.expertise.reassurance}
                    </p>

                </div>

            </div>
        </section>
    )
}
