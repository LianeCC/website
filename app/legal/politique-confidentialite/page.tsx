// app/legal/politique-confidentialite/page.tsx
import { LEGAL_INFO } from "@/lib/constants"

export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Collecte des données</h2>
          <p>
            Nous collectons uniquement les données que vous nous fournissez volontairement via notre formulaire de contact :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Message et informations sur votre projet</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Utilisation des données</h2>
          <p>Vos données sont utilisées uniquement pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact</li>
            <li>Vous envoyer des devis ou informations relatives à votre projet</li>
          </ul>
          <p>
            Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers sans votre consentement explicite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire à la réalisation de la finalité pour laquelle elles ont été collectées, 
            puis archivées conformément aux obligations légales (généralement 3 ans pour les prospects).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : <a href={`mailto:${LEGAL_INFO.entreprise.email}`}>{LEGAL_INFO.entreprise.email}</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Sécurité</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre 
            l&apos;accès, l&apos;altération, la divulgation ou la destruction non autorisée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité, contactez-nous à : <a href={`mailto:${LEGAL_INFO.entreprise.email}`}>{LEGAL_INFO.entreprise.email}</a>
          </p>
        </section>
      </div>
    </div>
  )
}