const images = [
  "/pepperoni-pizza-closeup.png",
  "/margherita-pizza-fresh-basil.png",
  "/bbq-chicken-pizza.png",
  "/garlic-bread-and-dips.png",
  "/veggie-supreme-pizza.png",
  "/restaurant-interior-cozy.png",
]

export function Gallery() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <h2 className="font-sans text-2xl font-bold text-gray-900">Recent Photos & Offers</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <figure key={i} className="overflow-hidden rounded-lg border border-gray-50">
              <img
                src={src || "/placeholder.svg?height=400&width=600&query=pizza%20gallery%20image"}
                alt="Melbourne Pizza gallery item"
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
