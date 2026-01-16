import { SITE_CONFIG } from "@/lib/constants"
import { Mail, MapPin, Users } from "lucide-react"

export function ContactInfo() {
    return (
        <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {/* Email */}
                    <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Email</h3>
                        <a
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="text-sm sm:text-base text-white/80 hover:text-primary transition-colors"
                        >
                            {SITE_CONFIG.email}
                        </a>
                    </div>

                    {/* Localisation */}
                    <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Localisation</h3>
                        <p className="text-sm sm:text-base text-white/80">{SITE_CONFIG.location}</p>
                    </div>

                    {/* Réseaux */}
                    <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">Réseaux</h3>
                        <div className="flex gap-4">
                            {SITE_CONFIG.social.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base text-white/80 hover:text-primary transition-colors"
                                >
                                    {social.platform}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
