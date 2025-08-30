import { Star } from "lucide-react"

type Review = {
  name: string
  rating: number
  comment: string
}

const reviews: Review[] = [
  { name: "Aarav S.", rating: 5, comment: "Crispy base, generous toppings—best pizza in town!" },
  { name: "Priya K.", rating: 5, comment: "Loved the Margherita. Fresh basil and perfect sauce." },
  { name: "Rohan D.", rating: 4, comment: "Quick delivery and the crust was still crunchy." },
  { name: "Ishita M.", rating: 5, comment: "BBQ Chicken is a must-try. Smoky and delicious." },
  { name: "Vivek P.", rating: 4, comment: "Great value combos and super friendly staff!" },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < count ? "text-orange-500" : "text-white"}
          fill={i < count ? "currentColor" : "none"}
          size={18}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <h2 className="font-sans text-2xl font-bold text-gray-900">Customer Reviews</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <article key={idx} className="rounded-lg border border-gray-50 bg-white p-5">
              <Stars count={r.rating} />
              <p className="mt-3 leading-relaxed text-gray-900">{r.comment}</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">— {r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
