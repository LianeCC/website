// app/legal/cgs/page.tsx
import { LEGAL_INFO } from "@/lib/constants"

export default function CGS() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Conditions Générales de Service</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Service (CGS) ont pour objet de définir les modalités et conditions dans lesquelles 
            {LEGAL_INFO.entreprise.nom} fournit ses services de développement web, création d&apos;applications et marketing digital.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Services proposés</h2>
          <p>Nos prestations incluent :</p>
          <ul>
            <li>Création de sites web (vitrines, e-commerce)</li>
            <li>Développement d&apos;applications web et PWA</li>
            <li>Services de marketing digital et SEO</li>
            <li>Design et identité visuelle</li>
            <li>Conseil en stratégie digitale</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Devis et commande</h2>
          <p>
            Toute prestation débute par un devis détaillé envoyé au client. Le devis est valable 30 jours. 
            La commande est considérée comme ferme et définitive dès réception de l&apos;acompte (30% à 50% du montant total selon le projet).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Délais</h2>
          <p>
            Les délais sont communiqués à titre indicatif et peuvent varier selon la complexité du projet et la réactivité du client 
            dans la fourniture des contenus et validations. Un planning détaillé est établi au démarrage du projet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Tarifs et paiement</h2>
          <p>Les tarifs sont ceux en vigueur au moment de la commande. Le paiement s&apos;effectue selon les modalités suivantes :</p>
          <ul>
            <li>Acompte de 30-50% à la signature du devis</li>
            <li>Solde à la livraison du projet ou selon un échéancier défini</li>
          </ul>
          <p>Moyens de paiement acceptés : virement bancaire, Stripe.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Propriété intellectuelle</h2>
          <p>
            Le client devient propriétaire du code source et des créations réalisées uniquement après paiement intégral. 
            {LEGAL_INFO.entreprise.nom} conserve le droit d&apos;utiliser les créations réalisées comme référence dans son portfolio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Garantie et maintenance</h2>
          <p>
            Une garantie de bon fonctionnement est assurée pendant 30 jours après la livraison (bugs et dysfonctionnements). 
            Les évolutions et maintenance peuvent faire l&apos;objet de contrats séparés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Résiliation</h2>
          <p>
            En cas d&apos;annulation du projet par le client, l&apos;acompte reste acquis. Les travaux déjà réalisés seront facturés au prorata.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Responsabilité</h2>
          <p>
            {LEGAL_INFO.entreprise.nom} s&apos;engage à mettre en œuvre tous les moyens nécessaires pour fournir des prestations de qualité. 
            Notre responsabilité ne saurait être engagée en cas de force majeure ou de faute du client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Litiges</h2>
          <p>
            En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. 
            À défaut, le tribunal compétent sera celui du siège social de {LEGAL_INFO.entreprise.nom}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>
            Pour toute question concernant ces conditions, contactez-nous à : <a href={`mailto:${LEGAL_INFO.entreprise.email}`}>{LEGAL_INFO.entreprise.email}</a>
          </p>
        </section>
      </div>
    </div>
  )
}