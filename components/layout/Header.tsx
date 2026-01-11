// components/layout/Header.tsx
import { Navigation } from "./Navigation"
import { SITE_CONFIG } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto container flex h-16 items-center">
        <h1 className="text-4xl font-script">{SITE_CONFIG.name}</h1>
        <div className="flex flex-1 justify-end">
          <Navigation />
        </div>
      </div>
    </header>
  )
}