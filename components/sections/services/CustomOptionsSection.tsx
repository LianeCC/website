import { CUSTOM_OPTIONS } from "@/lib/constants"

export function CustomOptionsSection() {
  return (
    <section className="py-8 sm:py-10 md:py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Options personnalisables</h2>
          <p className="text-sm sm:text-base px-4">Des services complémentaires pour aller plus loin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {CUSTOM_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="text-black p-6 sm:p-8 bg-white/80 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-2xl cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black/90">{option.name}</h3>
              <div className="text-xs sm:text-base leading-relaxed whitespace-pre-line">
                {option.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
