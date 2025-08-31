import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
