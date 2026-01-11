import { WORK_PROCESS } from "@/lib/constants"

export function WorkProcessSection() {
  return (
    <section className="py-40 text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Process de travail</h2>
          <p className="text-white/80">Une méthode éprouvée en 5 étapes</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {WORK_PROCESS.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
