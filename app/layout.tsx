// app/layout.tsx
import type { Metadata } from "next"
import { Albert_Sans, Lavishly_Yours } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SITE_CONFIG } from "@/lib/constants"


const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-albert-sans",
  display: "swap",
})

const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lavishly-yours",
  display: "swap",
})

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="fr" 
      className={`${albertSans.variable} ${lavishlyYours.variable}`}
    >
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}