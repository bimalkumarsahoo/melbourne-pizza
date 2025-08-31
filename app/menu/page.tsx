import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MenuPreview } from "@/components/menu/menu-preview"
import { ItemsGrid } from "@/components/menu/items-grid"

export default function MenuPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-2">
        <header className="mx-auto max-w-6xl px-4 sm:px-6 py-8 md:py-10">
          <h1 className="font-sans text-3xl font-bold text-gray-900">Menu</h1>
          <p className="mt-2 text-sm text-gray-900/70">Explore our dine‑in pages and popular items.</p>
        </header>

        <MenuPreview />

        <ItemsGrid />
      </div>
      <Footer />
    </main>
  )
}
