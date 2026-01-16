import { CTA } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 md:py-40 mt-20 sm:mt-28 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{CTA.appointment.title}</h2>
        <p className="text-lg sm:text-xl mb-2 font-semibold">{CTA.appointment.subtitle}</p>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
          {CTA.appointment.description}
        </p>
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="transition-all duration-300 hover:scale-120 hover:bg-white hover:shadow-2xl cursor-pointer text-lg px-8">
            {CTA.appointment.button}
          </Button>
        </Link>
      </div>
    </section>
  )
}
