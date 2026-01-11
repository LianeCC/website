import { CTA } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-40 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{CTA.appointment.title}</h2>
        <p className="text-xl mb-2 font-semibold">{CTA.appointment.subtitle}</p>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
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
