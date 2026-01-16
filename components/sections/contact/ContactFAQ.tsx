import { FAQ } from "@/lib/constants"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function ContactFAQ() {
    return (
        <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                        Questions Fréquentes
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                        {FAQ.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 border-white/20"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                                    <span className="font-semibold text-sm sm:text-base text-white">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base text-white/80 pb-3 sm:pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
