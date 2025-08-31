
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MenuPreview } from "@/components/menu/menu-preview"
import { ItemsGrid, Item } from "@/components/menu/items-grid"

export default function MenuPage() {

  // Example categorization (update as needed for your real menu)
  // --- Section Data ---
  const vegPizza: Item[] = [
    {
      id: "margherita",
      name: "Margherita",
      price: "₹239",
      desc: "Classic tomato, fresh mozzarella, and basil.",
      image: "/margherita-pizza.png",
    },
    {
      id: "veg-supreme",
      name: "Veg Supreme",
      price: "₹279",
      desc: "Bell peppers, olives, corn, onions, and cheese.",
      image: "/veg-supreme-pizza.png",
    },
  ];
  const nonVegPizza: Item[] = [
    {
      id: "pepperoni",
      name: "Pepperoni",
      price: "₹299",
      desc: "Loaded with pepperoni and melty mozzarella.",
      image: "/pepperoni-pizza.png",
    },
    {
      id: "bbq-chicken",
      name: "BBQ Chicken",
      price: "₹329",
      desc: "Smoky BBQ sauce, tender chicken, and onions.",
      image: "/bbq-chicken-pizza.png",
    },
  ];
  const pastaWrapsSides: Item[] = [
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
  ];
  const beverages: Item[] = [
    {
      id: "cola",
      name: "Cold Drink",
      price: "₹49",
      desc: "Chilled soft drink to pair with your slice.",
      image: "/cold-drink.png",
    },
  ];
  const dessert: Item[] = [
    {
      id: "brownie",
      name: "Choco Brownie",
      price: "₹149",
      desc: "Rich fudge brownie, perfect to finish.",
      image: "/choco-brownie-dessert.png",
    },
  ];

  // --- End Section Data ---
  // --- Render ---
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative z-10 pt-2">
        <header className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14 flex flex-col items-center text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3a2c60] via-[#b6a1e6] to-[#f7c8a0] drop-shadow-lg tracking-tight">Menu</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700/80 font-medium max-w-2xl">Explore our curated dine‑in pages and signature creations. Crafted for a premium experience.</p>
        </header>

        {/* Dine-In Menu Preview */}
        <section className="mx-auto max-w-5xl px-2 md:px-0 mb-10 animate-fade-in-up">
          <div className="rounded-3xl bg-white shadow-xl border border-[#e0e7ef]/60 p-1 md:p-2 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
            <MenuPreview />
          </div>
        </section>

        {/* Veg Pizza */}
        <ItemsGrid items={vegPizza} title="Veg Pizza" subtitle="Vegetarian classics and signatures" />

        {/* Non Veg Pizza */}
        <ItemsGrid items={nonVegPizza} title="Non Veg Pizza" subtitle="Meaty favorites and more" />

        {/* Pasta, Wraps & Sides */}
        <ItemsGrid items={pastaWrapsSides} title="Pasta, Wraps & Sides" subtitle="Perfect pairings and snacks" />

        {/* Beverages */}
        <ItemsGrid items={beverages} title="Beverages" subtitle="Cool drinks and refreshments" />

        {/* Dessert */}
        <ItemsGrid items={dessert} title="Dessert" subtitle="Sweet finishes" />
      </div>
      <Footer />
    </main>
  )
}

