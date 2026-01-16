import { CONTACT_PAGE } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactCTA() {
    return (
        <section className="py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                    {CONTACT_PAGE.cta.title}
                                </h3>
                                <p className="text-sm sm:text-base text-white/80">
                                    {CONTACT_PAGE.cta.description}
                                </p>
                            </div>
                            <Button size="lg" variant="outline" className="shrink-0 bg-white/10 border-white/30 text-white hover:bg-white/20">
                                {CONTACT_PAGE.cta.button}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
