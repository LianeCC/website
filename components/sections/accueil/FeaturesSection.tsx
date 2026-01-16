import { FEATURES } from "@/lib/constants"

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 mt-24 sm:mt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4 px-4">6 bonnes raisons de travailler avec moi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="group flex items-center gap-2 p-4 sm:p-6 rounded-lg transition-all duration-500 ease-out hover:bg-white/90 hover:scale-105 md:hover:scale-[1.2] hover:shadow-2xl hover:z-20 relative"
            >

              <div className="shrink-0 w-16 sm:w-24 md:w-32 flex items-center justify-center">
                <span
                  className="text-[80px] sm:text-[120px] md:text-[200px] font-bold bg-linear-to-r from-white/30 via-white/60 to-white/30 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-linear-to-br group-hover:text-emerald-900/50 leading-none"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient 3s ease-in-out infinite'
                  }}
                >
                  {index + 1}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 transition-colors duration-500 group-hover:text-emerald-900">{feature.title}</h3>
                <p className="text-white/80 text-sm sm:text-base md:text-xl transition-colors duration-500 group-hover:text-emerald-800">{feature.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
