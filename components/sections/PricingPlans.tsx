"use client"

import { PRICING_PLANS } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function PricingPlans() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-24 md:py-40 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Choisissez la formule adaptée à vos besoins</h2>
        </div>

        {/* Première ligne : 2 cards (Jeune Pousse + Floraison) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
          {PRICING_PLANS.slice(0, 2).map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col bg-white/90 ${plan.highlighted ? "border-primary border-2 shadow-xl" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    POPULAIRE
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="mt-2 text-sm sm:text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Details Section - Collapsible */}
                {plan.details && (
                  <div className="mt-6 pt-6 border-t">
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-primary hover:underline"
                    >
                      <span>Voir les détails</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expandedPlan === plan.id ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedPlan === plan.id && (
                      <div className="mt-4 space-y-4 text-sm">
                        {/* Inclus */}
                        <div>
                          <h4 className="font-semibold text-green-600 dark:text-green-500 mb-2 flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Inclus
                          </h4>
                          <ul className="space-y-1 ml-6">
                            {plan.details.included.map((item, index) => (
                              <li key={index} className="text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Non inclus */}
                        <div>
                          <h4 className="font-semibold text-red-600 dark:text-red-500 mb-2 flex items-center gap-2">
                            <X className="w-4 h-4" />
                            Non inclus
                          </h4>
                          <ul className="space-y-1 ml-6">
                            {plan.details.notIncluded.map((item, index) => (
                              <li key={index} className="text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Deuxième ligne : 3 cards (Applications web + Formation + Marketing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.slice(2, 5).map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${plan.highlighted ? "border-primary border-2 shadow-xl" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    POPULAIRE
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="mt-2 text-sm sm:text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Details Section - Collapsible */}
                {plan.details && (
                  <div className="mt-6 pt-6 border-t">
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-primary hover:underline"
                    >
                      <span>Voir les détails</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expandedPlan === plan.id ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedPlan === plan.id && (
                      <div className="mt-4 space-y-4 text-sm">
                        {/* Inclus */}
                        <div>
                          <h4 className="font-semibold text-green-600 dark:text-green-500 mb-2 flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Inclus
                          </h4>
                          <ul className="space-y-1 ml-6">
                            {plan.details.included.map((item, index) => (
                              <li key={index} className="text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Non inclus */}
                        <div>
                          <h4 className="font-semibold text-red-600 dark:text-red-500 mb-2 flex items-center gap-2">
                            <X className="w-4 h-4" />
                            Non inclus
                          </h4>
                          <ul className="space-y-1 ml-6">
                            {plan.details.notIncluded.map((item, index) => (
                              <li key={index} className="text-muted-foreground">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
