// components/layout/Header.tsx
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto container flex h-16 items-center px-4">
        <Link href="/" className="shrink-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-script">
            {SITE_CONFIG.name}
          </h1>
        </Link>
        <div className="flex flex-1 justify-end items-center gap-4">
          {/* Navigation Desktop */}
          <div className="hidden lg:block">
            <Navigation />
          </div>
          {/* Menu Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}