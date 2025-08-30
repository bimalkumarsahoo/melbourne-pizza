"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Simple site navbar: Home and Menu
export default function AppNavbar() {
  const pathname = usePathname()
  const linkBase = "rounded-md px-3 py-2 text-sm font-medium transition-colors"
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-sm bg-red-600" aria-hidden="true" />
          <span className="text-balance text-base font-semibold text-gray-900">Melbourne Pizza</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1">
          <Link
            href="/"
            className={cn(
              linkBase,
              pathname === "/" ? "bg-gray-50 text-gray-900" : "text-gray-900/80 hover:text-gray-900",
            )}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={cn(
              linkBase,
              pathname?.startsWith("/menu") ? "bg-gray-50 text-gray-900" : "text-gray-900/80 hover:text-gray-900",
            )}
          >
            Menu
          </Link>
        </nav>
      </div>
    </header>
  )
}
