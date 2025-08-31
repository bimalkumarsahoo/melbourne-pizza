"use client";
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"
import { FoundersSection } from "@/components/founders-section"
import { useRef } from "react"

export default function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <FoundersSection />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
