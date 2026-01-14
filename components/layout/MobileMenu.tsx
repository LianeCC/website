"use client"

import { useState } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Bouton Hamburger */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={28} />
      </button>

      {/* Menu déroulant qui apparaît sous le header */}
      {isOpen && (
        <>
          {/* Overlay pour fermer le menu */}
          <div
            className="fixed inset-0 top-16 bg-black/50 z-40 lg:hidden"
            onClick={toggleMenu}
          />

          {/* Menu qui se déroule */}
          <nav className="absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md shadow-xl z-50 lg:hidden">
            <div className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-lg font-medium font-body transition-colors hover:text-primary hover:bg-gray-100/50 px-6 py-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  )
}
