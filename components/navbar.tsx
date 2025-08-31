"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold text-gray-900 font-sans">
            Melbourne Pizza
          </Link>
          <nav aria-label="Main" className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:opacity-80">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium text-gray-900 hover:opacity-80">
              Menu
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
