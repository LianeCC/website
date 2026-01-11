// components/layout/Footer.tsx
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t bg-background/70 relative z-10">
      <div className="mx-auto container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 */}
          <div>
            <p className="font-bold">{SITE_CONFIG.name}</p>
            <p className="text-sm text-muted-foreground">{SITE_CONFIG.tagline}</p>
            <p className="text-sm text-muted-foreground">siren n° {SITE_CONFIG.siren}</p>
            <p className="text-sm text-muted-foreground">{SITE_CONFIG.location}</p>
          </div>
          
          {/* Colonne 2 */}
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-sm">{SITE_CONFIG.email}</p>
            <p className="text-sm">{SITE_CONFIG.phone}</p>
            <p className="text-sm">{SITE_CONFIG.location}</p>
          </div>
          
          {/* Colonne 3 */}
          <div>
            <p className="font-semibold mb-2">Réseaux</p>
            <div className="flex gap-4">
              {SITE_CONFIG.social.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}