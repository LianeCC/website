import { CONTACT_PAGE } from "@/lib/constants"

export function ContactHero() {
    return (
        <section className="py-12 sm:py-16 min-h-[40vh] flex items-center">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {CONTACT_PAGE.hero.title}
                </h1>
            </div>
        </section>
    )
}
