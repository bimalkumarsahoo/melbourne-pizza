import Image from "next/image"

const menuImages = [
  // Hard-coded placeholder images per guidelines
  "/dine-in-menu-page-1.png",
  "/dine-in-menu-page-2.png",
  "/dine-in-menu-page-3.png",
  "/dine-in-menu-page-4.png",
  "/dine-in-menu-page-5.png",
]

export function MenuPreview() {
  return (
    <section aria-labelledby="dinein-menu" className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <div className="mb-4 flex items-end justify-between">
        <h2 id="dinein-menu" className="text-pretty text-2xl font-semibold text-gray-900 sm:text-3xl">
          Dine-In Menu Preview
        </h2>
        <p className="hidden text-sm text-gray-900/70 sm:block">Swipe to explore pages</p>
      </div>
      <div className="relative">
        {/* Premium floating gradient accent */}
        <div className="pointer-events-none absolute left-[-5vw] top-[-5vh] h-32 w-32 rounded-full bg-gradient-to-br from-[#b6a1e6]/40 to-[#f7c8a0]/30 blur-2xl opacity-60 z-10" />
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#b6a1e6]/40 scrollbar-track-transparent">
          {menuImages.map((src, i) => (
            <div
              key={src}
              className="relative h-64 w-44 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-[#e0e7ef]/60 bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
              aria-label={`Menu page ${i + 1}`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Melbourne Pizza dine-in menu page ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 176px, 224px"
                priority={i === 0}
              />
              {/* Glass reflection effect */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-white/10 via-white/5 to-transparent opacity-80" />
              {/* Page number badge */}
              <span className="absolute top-2 right-2 z-20 rounded-full bg-gradient-to-br from-[#b6a1e6]/80 to-[#f7c8a0]/80 px-3 py-1 text-xs font-semibold text-white shadow-md">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
