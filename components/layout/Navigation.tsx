// components/layout/Navigation.tsx
import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"

export function Navigation() {
  return (
    <nav className="flex items-center gap-6">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-lg font-medium font-body transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}