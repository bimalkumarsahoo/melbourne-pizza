"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero - Melbourne Pizza">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/wood-fired-pizza-on-rustic-table.png')" }}
        aria-hidden="true"
      />
      {/* Overlay for readability using gray-900 */}
      <div className="absolute inset-0 bg-gray-900/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
            Wood-fired. Fresh. Fast.
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl font-sans">
            Melbourne Pizza
          </h1>
          <p className="mt-4 leading-relaxed text-white/90">
            Hand-tossed dough, premium ingredients, and flavors you’ll crave again—baked to perfection in minutes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="bg-red-600 text-white hover:opacity-90">
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
            <div className="flex gap-3">
              <a
                className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                href="https://www.zomato.com/"
                target="_blank"
                rel="noreferrer"
              >
                Order via Zomato
              </a>
              <a
                className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                href="https://www.swiggy.com/"
                target="_blank"
                rel="noreferrer"
              >
                Order via Swiggy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
