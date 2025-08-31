import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MenuPreview } from "@/components/menu/menu-preview"
import { ItemsGrid } from "@/components/menu/items-grid"

export default function MenuPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative z-10 pt-2">
        <header className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14 flex flex-col items-center text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3a2c60] via-[#b6a1e6] to-[#f7c8a0] drop-shadow-lg tracking-tight">Menu</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700/80 font-medium max-w-2xl">Explore our curated dine‑in pages and signature creations. Crafted for a premium experience.</p>
        </header>

        {/* Premium card for menu preview (no glassmorphism) */}
        <section className="mx-auto max-w-5xl px-2 md:px-0 mb-10 animate-fade-in-up">
          <div className="rounded-3xl bg-white shadow-xl border border-[#e0e7ef]/60 p-1 md:p-2 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
            <MenuPreview />
          </div>
        </section>

        {/* Premium grid for menu items (no glassmorphism) */}
        <section className="mx-auto max-w-6xl px-2 md:px-0 animate-fade-in-up delay-150">
          <div className="rounded-3xl bg-white shadow-xl border border-[#e0e7ef]/60 p-2 md:p-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
            <ItemsGrid />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
