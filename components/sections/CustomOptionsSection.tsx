import { CUSTOM_OPTIONS } from "@/lib/constants"

export function CustomOptionsSection() {
  return (
    <section className="py-40 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Options personnalisables</h2>
          <p className="text-white/80">Des services complémentaires pour aller plus loin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CUSTOM_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="p-8 bg-white/10 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{option.name}</h3>
              <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                {option.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
