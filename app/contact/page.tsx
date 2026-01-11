import { CONTACT_PAGE, SITE_CONFIG, FAQ } from "@/lib/constants"
import { ContactForm } from "@/components/sections/ContactForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, MapPin, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{CONTACT_PAGE.hero.title}</h1>
          <p className="text-lg text-muted-foreground">{CONTACT_PAGE.hero.subtitle}</p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* CTA Rendez-vous */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-background">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">{CONTACT_PAGE.cta.title}</h3>
                  <p className="text-muted-foreground">{CONTACT_PAGE.cta.description}</p>
                </div>
                <Button size="lg" variant="outline" className="shrink-0">
                  {CONTACT_PAGE.cta.button}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Localisation */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Localisation</h3>
              <p className="text-muted-foreground">{SITE_CONFIG.location}</p>
            </div>

            {/* Réseaux */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Réseaux</h3>
              <div className="flex gap-4">
                {SITE_CONFIG.social.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social.platform === "LinkedIn" ? "LinkedIn" : "GitHub"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Fréquentes */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-background rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
