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
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {menuImages.map((src, i) => (
            <div
              key={src}
              className="relative h-64 w-44 flex-shrink-0 snap-start overflow-hidden rounded-lg border border-gray-50 bg-white sm:h-80 sm:w-56"
              aria-label={`Menu page ${i + 1}`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Melbourne Pizza dine-in menu page ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 176px, 224px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
