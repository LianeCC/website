// app/legal/mentions-legales/page.tsx
import { LEGAL_INFO } from "@/lib/constants"

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
          <p><strong>Nom :</strong> {LEGAL_INFO.entreprise.nom}</p>
          <p><strong>Statut :</strong> {LEGAL_INFO.entreprise.statut}</p>
          <p><strong>SIRET :</strong> {LEGAL_INFO.entreprise.siren}</p>
          <p><strong>Adresse :</strong> {LEGAL_INFO.entreprise.adresse}</p>
          <p><strong>Email :</strong> <a href={`mailto:${LEGAL_INFO.entreprise.email}`}>{LEGAL_INFO.entreprise.email}</a></p>
          <p><strong>Téléphone :</strong> {LEGAL_INFO.entreprise.phone}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
          <p><strong>Hébergeur :</strong> {LEGAL_INFO.hebergeur.nom}</p>
          <p><strong>Adresse :</strong> {LEGAL_INFO.hebergeur.adresse}</p>
          <p><strong>Site :</strong> <a href={LEGAL_INFO.hebergeur.site} target="_blank" rel="noopener noreferrer">{LEGAL_INFO.hebergeur.site}</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de {LEGAL_INFO.entreprise.nom} 
            ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Données personnelles</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression 
            des données vous concernant. Pour exercer ce droit, contactez-nous à : {LEGAL_INFO.entreprise.email}
          </p>
          <p>
            Pour plus d&apos;informations, consultez notre <a href="/legal/politique-confidentialite">Politique de Confidentialité</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de tracking. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
          </p>
        </section>
      </div>
    </div>
  )
}