"use client"

import { ForestBackground } from "@/components/sections/commun/ForestParallax"
import { ContactHero } from "@/components/sections/contact/ContactHero"
import { ContactForm } from "@/components/sections/contact/ContactForm"
import { ContactCTA } from "@/components/sections/contact/ContactCTA"
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ"

export default function ContactPage() {
    return (
        <>
            <ForestBackground />

            <div className="flex flex-col relative z-10">
                <ContactHero />
                <ContactForm />
                <ContactCTA />
                <ContactFAQ />
            </div>
        </>
    )
}
