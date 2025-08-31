import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Item = {
  id: string
  name: string
  price: string
  desc: string
  image: string
}

const items: Item[] = [
  {
    id: "margherita",
    name: "Margherita",
    price: "₹239",
    desc: "Classic tomato, fresh mozzarella, and basil.",
    image: "/margherita-pizza.png",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    price: "₹299",
    desc: "Loaded with pepperoni and melty mozzarella.",
    image: "/pepperoni-pizza.png",
  },
  {
    id: "veg-supreme",
    name: "Veg Supreme",
    price: "₹279",
    desc: "Bell peppers, olives, corn, onions, and cheese.",
    image: "/veg-supreme-pizza.png",
  },
  {
    id: "bbq-chicken",
    name: "BBQ Chicken",
    price: "₹329",
    desc: "Smoky BBQ sauce, tender chicken, and onions.",
    image: "/bbq-chicken-pizza.png",
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    price: "₹129",
    desc: "Toasty sides brushed with garlic butter.",
    image: "/garlic-bread.png",
  },
  {
    id: "white-pasta",
    name: "Creamy White Pasta",
    price: "₹229",
    desc: "Silky white sauce with herbs and parmesan.",
    image: "/white-sauce-pasta.png",
  },
  {
    id: "brownie",
    name: "Choco Brownie",
    price: "₹149",
    desc: "Rich fudge brownie, perfect to finish.",
    image: "/choco-brownie-dessert.png",
  },
  {
    id: "cola",
    name: "Cold Drink",
    price: "₹49",
    desc: "Chilled soft drink to pair with your slice.",
    image: "/cold-drink.png",
  },
]

export function ItemsGrid() {
  return (
    <section aria-labelledby="pizza-items" className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 id="pizza-items" className="text-pretty text-2xl font-semibold text-gray-900 sm:text-3xl">
          Pizza & Items
        </h2>
        <p className="hidden text-sm text-gray-900/70 sm:block">Freshly made, served hot</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, idx) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-[#e0e7ef]/60 bg-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="relative h-40 w-full bg-gradient-to-br from-[#b6a1e6]/10 to-[#f7c8a0]/10">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={idx < 2}
              />
              {/* Glass reflection effect */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-white/10 via-white/5 to-transparent opacity-80" />
              {/* Premium border highlight on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#b6a1e6]/40 transition-all duration-300" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#3a2c60] transition-colors duration-300">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-base font-semibold text-[#b6a1e6] group-hover:text-[#f7c8a0] transition-colors duration-300">
                {item.price}
              </p>
              <p className="text-sm text-gray-900/80 group-hover:text-gray-900/100 transition-colors duration-300">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
