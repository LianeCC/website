// lib/constants.ts
import type {
  SiteConfig,
  NavLink,
  Service,
  PricingPlan,
  CustomOption,
  ProcessStep,
  Project,
  Testimonial,
  TechStack,
  Feature,
  FAQItem,
  CaseStudy,
} from "@/types"

// ============================================
// CONFIGURATION DU SITE
// ============================================

export const SITE_CONFIG: SiteConfig = {
  name: "Liane Coupat Candoulives",
  tagline: "Site web sur mesure, Apps & Marketing Digital",
  description:
    "Je transforme vos idées en solutions numériques performantes pour vous aider à atteindre vos objectifs et faire grandir votre entreprise en ligne.",
  url: "https://lianecc.com", 
  email: "liane.cptcdl@gmail.com",
  phone: "+33 (0)6 58 10 40 17",
  location: "Aix-en-Provence, France",
  siren: "993978659",
  social: [
    {
      platform: "LinkedIn",
      url: "https://fr.linkedin.com/in/liane-coupat-candoulives-4311a894",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/LianeCC",
      icon: "github",
    },
  ],
}

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services & Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
]

// ============================================
// SERVICES
// ============================================

export const SERVICES: Service[] = [
  {
    id: "site-web",
    icon: "code",
    title: "Création de site web",
    description:
      "Des sites vitrines et e-commerce modernes, optimisés pour la performance et le référencement.",
    tags: ["Vitrine", "E-commerce", "PWA", "Sur-mesure", "Wordpress", "Shopify"],
    detailedDescription:
      "Offres JEUNE POUSSE (site vitrine jusqu'à 5 pages) et FLORAISON (site avancé / e-commerce Shopify / PWA). Design personnalisé, responsive, SEO optimisé.",
  },
  {
    id: "app-web",
    icon: "smartphone",
    title: "Applications web & outils internes",
    description:
      "Des applications web sur-mesure pour optimiser vos processus internes et automatiser vos tâches.",
    tags: ["Dashboard", "Outils métiers", "Automatisations", "API / CRM"],
    detailedDescription:
      "Développement d'applications web personnalisées, tableaux de bord, outils métiers internes et connexions API/CRM sur-mesure.",
  },
  {
    id: "marketing-digital",
    icon: "trending_up",
    title: "Marketing Digital & Accompagnement",
    description:
      "Accompagnement pour améliorer votre visibilité en ligne et optimiser votre présence digitale.",
    tags: ["SEO", "Réseaux sociaux", "Outils digitaux", "Stratégie marketing"],
    detailedDescription:
      "Formation web & webmarketing : SEO, réseaux sociaux, outils digitaux, stratégie commerciale & marketing. Interventions courtes et ciblées pour vous rendre autonome.",
  },
]

// ============================================
// TARIFS
// ============================================

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "jeune-pousse",
    name: "Jeune Pousse",
    price: "À partir de 990€",
    priceDetails: "",
    description: "Site vitrine professionnel, clair et performant jusqu'à 5 pages",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design personnalisé (pas de thème générique)",
      "Site responsive (mobile, tablette, desktop)",
      "Optimisation SEO de base (structure & balises)",
      "Mise en ligne & configuration technique",
      "1 RDV lancement (45 min) + 1 RDV validation (30 min)",
      "2 allers-retours sur la maquette",
      "1 série de corrections mineures après intégration",
      "Délai : 2 à 5 semaines"
    ],
    highlighted: false,
    cta: "Choisir cette offre",
    details: {
      included: [
        "Cadrage du projet & analyse des besoins",
        "Proposition maquette page d'accueil",
        "Développement & intégration responsive",
        "Vérifications finales & recette"
      ],
      notIncluded: [
        "Rédaction complète des contenus",
        "Création de logo ou identité visuelle",
        "Fonctionnalités avancées (e-commerce, espace membre)",
        "Maintenance après mise en ligne (option possible)",
        "Hébergement et nom de domaine (accompagnement possible)"
      ]
    }
  },
  {
    id: "floraison",
    name: "Floraison",
    price: "À partir de 2490€",
    priceDetails: "",
    description: "Site avancé / e-commerce Shopify / PWA orienté conversion avec UX poussée",
    features: [
      "Site web avancé ou e-commerce Shopify / PWA",
      "Architecture sur-mesure",
      "Design UI/UX personnalisé",
      "Responsive (mobile / tablette / desktop)",
      "Optimisation SEO avancée (structure, performances, bonnes pratiques)",
      "E-commerce : config catalogue, paiements Stripe, livraisons",
      "Formulaires avancés, connexions API, automatisations simples",
      "1 RDV cadrage (1h) + 2 RDV suivi (45 min) + 1 RDV livraison (30 min)",
      "3 allers-retours sur les maquettes",
      "2 cycles de corrections après développement",
      "Délai : 6 à 12 semaines"
    ],
    highlighted: true,
    cta: "Choisir cette offre",
    details: {
      included: [
        "Cadrage stratégique approfondi",
        "Wireframes (pages clés) + Maquettes UI",
        "Développement front & back",
        "Connexions aux outils tiers",
        "Tests, recette & mise en production"
      ],
      notIncluded: [
        "Création de logo / identité visuelle (option possible)",
        "Création de contenus (option possible)",
        "Production vidéo (option possible)",
        "Maintenance après mise en ligne (option possible)",
        "Fonctionnalités non prévues au cadrage"
      ]
    }
  },
  {
    id: "applications-web",
    name: "Applications web & outils internes",
    price: "Sur devis",
    priceDetails: "",
    description: "Applications web sur-mesure pour optimiser vos processus internes",
    features: [
      "Dashboards & tableaux de bord",
      "Outils métiers internes",
      "Automatisations de processus",
      "Connexions API / CRM / outils tiers",
      "Application web sur mesure",
      "Architecture adaptée au projet",
      "Front-end moderne (Next.js) + Back-end & logique métier",
      "Base de données",
      "Sécurité & gestion des accès",
      "RDV personnalisés selon projet",
      "Délai : défini selon complexité"
    ],
    highlighted: false,
    cta: "Demander un devis",
    details: {
      included: [
        "Audit & cadrage fonctionnel",
        "Conception UX (parcours utilisateurs, wireframes)",
        "Développement front & back",
        "Intégrations API / outils tiers",
        "Tests utilisateurs & mise en production"
      ],
      notIncluded: [
        "Support long terme",
        "Maintenance évolutive",
        "Fonctionnalités non prévues au cadrage",
        "Hébergement & infrastructure (accompagnement possible)"
      ]
    }
  },
  {
    id: "formation-accompagnement",
    name: "Formation & Accompagnement",
    price: "350€ / forfait 3h",
    priceDetails: "",
    description: "Accompagnement personnalisé pour gagner en autonomie sur vos outils digitaux",
    features: [
      "3 sessions d'1h (distanciel)",
      "Sujets au choix : réseaux sociaux & outils, stratégie marketing, stratégie commerciale, etc.",
      "Formation pratique avec démonstrations",
      "Plan d'actions personnalisé",
      "Fiche de synthèse avec recommandations",
      "Ressources simples à appliquer",
      "Conseils pour progresser en autonomie",
      "Réponses à vos questions spécifiques"
    ],
    highlighted: false,
    cta: "Réserver mes 3h",
    details: {
      included: [
        "Cadrage rapide (identification besoins & objectifs)",
        "3 sessions d'accompagnement pratique (1h chacune)",
        "Démonstrations sur votre cas concret",
        "Synthèse & recommandations pour poursuivre seul",
        "Support par email entre les sessions"
      ],
      notIncluded: [
        "Accompagnement sur le long terme",
        "Formation complète et structurée sur plusieurs semaines",
        "Réalisation de contenus ou de campagnes à votre place",
        "Sessions supplémentaires (possibles avec supplément)"
      ]
    }
  },
  {
    id: "marketing-digital",
    name: "Marketing Digital & Accompagnement",
    price: "Sur devis",
    priceDetails: "",
    description: "Accompagnement pour améliorer votre visibilité en ligne",
    features: [
      "SEO (optimisation pour moteurs de recherche)",
      "Stratégie de contenu",
      "Réseaux sociaux",
      "Stratégie commerciale & marketing",
      "Accompagnement pratique sur outils digitaux",
      "Conseils pour progresser rapidement",
      "Plan d'actions personnalisé",
      "Sessions courtes (distanciel - 1h)",
      "Fiche de synthèse avec recommandations",
      "Délai : selon nombre de sessions"
    ],
    highlighted: false,
    cta: "Demander un devis",
    details: {
      included: [
        "Cadrage rapide (identification besoins & objectifs)",
        "Accompagnement pratique (démonstrations et exercices)",
        "Synthèse & recommandations pour poursuivre en autonomie",
        "Ressources simples à appliquer"
      ],
      notIncluded: [
        "Accompagnement sur le long terme",
        "Formation complète et structurée sur plusieurs semaines",
        "Réalisation de contenus ou de campagnes à la place du client"
      ]
    }
  },
]

export const CUSTOM_OPTIONS: CustomOption[] = [
  {
    id: "video",
    name: "Vidéo (via prestataire)",
    description: "• Captation professionnelle\n• Montage vidéo\n• Contenus pour site web & réseaux sociaux\n• Collaboration avec vidéastes expérimentés"
  },
  {
    id: "graphisme",
    name: "Graphisme (via prestataire)",
    description: "• Création de logo\n• Identité visuelle complète\n• Supports print & digitaux\n• Image de marque cohérente"
  },
  {
    id: "maintenance",
    name: "Maintenance & suivi",
    description: "• Maintenance technique régulière\n• Mises à jour de sécurité\n• Évolutions fonctionnelles\n• Support continu"
  },
  {
    id: "formation",
    name: "Formation personnalisée",
    description: "• Formation sur-mesure\n• Gestion autonome de votre site\n• Maîtrise des contenus\n• Utilisation des outils digitaux"
  },
]

// ============================================
// PROCESS DE TRAVAIL
// ============================================

export const WORK_PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: "Briefing",
    description: "Analyse de vos besoins et objectifs.",
  },
  {
    id: 2,
    title: "Wireframes",
    description: "Création des maquettes et de l'UX.",
  },
  {
    id: 3,
    title: "Développement",
    description: "Codage et intégration des fonctionnalités.",
  },
  {
    id: 4,
    title: "Optimisation",
    description: "Tests, SEO et performances.",
  },
  {
    id: 5,
    title: "Mise en ligne",
    description: "Déploiement et suivi post-lancement.",
  },
]

// ============================================
// TÉMOIGNAGES CLIENTS
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marc Dubois",
    role: "CEO",
    company: "TechVision",
    content:
      "Liane a su comprendre nos besoins et livrer un site web qui a dépassé nos attentes. Professionnel, réactif et très compétent.",
    avatar: "/images/testimonials/marc.jpg", // À ajouter
  },
  {
    id: "2",
    name: "Sophie Martin",
    role: "Fondatrice",
    company: "Artisan",
    content:
      "Le travail sur le SEO a porté ses fruits rapidement. Notre visibilité a explosé en quelques mois. Je recommande vivement !",
    avatar: "/images/testimonials/sophie.jpg", // À ajouter
  },
  {
    id: "3",
    name: "Julien Petit",
    role: "Manager",
    company: "Le Bon Déclic",
    content:
      "Une collaboration fluide et efficace. Liane est à l'écoute et son expertise technique est indéniable. Le résultat est parfait.",
    avatar: "/images/testimonials/julien.jpg", // À ajouter
  },
]

// ============================================
// STACK TECHNIQUE
// ============================================

export const TECH_STACK: TechStack[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/images/stack/nextjs.svg",
  },
  {
    id: "react",
    name: "React",
    icon: "/images/stack/react.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/images/stack/nodejs.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "/images/stack/tailwind.svg",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "/images/stack/postgresql.svg",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "/images/stack/figma.svg",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "/images/stack/github.svg",
  },
  {
    id: "python",
    name: "Python",
    icon: "/images/stack/python.svg",
  },
  {
    id: "Canva",
    name: "Canva",
    icon: "/images/stack/canva.svg",
  },
  {
    id: "indesign",
    name: "InDesign",
    icon: "/images/stack/indesign.svg",
  },
  {
    id: "affinity",
    name: "Affinity Designer",
    icon: "/images/stack/affinity.svg",
  }


]

// ============================================
// PROJETS / PORTFOLIO
// ============================================

export const PROJECTS: Project[] = [
  {
    id: "wedding-planner",
    title: "Site web Wedding Planner",
    description:
      "Un site sur-mesure, élégant et fonctionnel pour une organisatrice de mariages, mettant en avant ses services et réalisations. Le site est disponible en anglais & français, avec un accès client dédié et un accès administrateur pour gérer les projets mariés.",
    image: "/images/projects/vertlemariage.png",
    tags: ["Next", "React", "Tailwind", "Calendly", "i18n", "Admin", "Client Access", "SEO"],
    category: "Site sur-mesure",
    link: "www.vertlemariage.com", 
  },
]

// ============================================
// FEATURES / POURQUOI TRAVAILLER AVEC MOI
// ============================================

export const FEATURES: Feature[] = [
  {
    id: "dev-mesure",
    icon: "code",
    title: "Développement sur-mesure",
    description:
      "Des solutions uniques, codées pour répondre précisément à vos besoins spécifiques.",
  },
  {
    id: "expertise",
    icon: "lightbulb",
    title: "Expertise technique & marketing",
    description:
      "Une double compétence pour allier équipements fonctionnels, mais aussi performants.",
  },
  {
    id: "design",
    icon: "palette",
    title: "Design moderne et efficace",
    description:
      "Une interface intuitive et esthétique pour une expérience utilisateur optimale et qui vous ressemble.",
  },
  {
    id: "seo",
    icon: "search",
    title: "Optimisation SEO incluse",
    description:
      "Référencement et intégrés dès la conception de votre site.",
  },
  {
    id: "accompagnement",
    icon: "support_agent",
    title: "Accompagnement humain",
    description:
      "Une écoute attentive et des conseils tout au long de votre projet.",
  },
  {
    id: "livraison",
    icon: "rocket_launch",
    title: "Livraison rapide et claire",
    description:
      "Un planning développement agile pour obtenir des résultats dans les meilleurs délais.",
  },
]

// ============================================
// ÉTUDE DE CAS
// ============================================

export const CASE_STUDY: CaseStudy = {
  id: "seo-optimization",
  title: "Étude de Cas : Optimisation SEO",
  subtitle: "Amélioration de la visibilité et du trafic organique pour une PME locale.",
  metric: "+20%",
  metricLabel: "de conversion en 3 mois",
  problem:
    "Le client souffrait d'un manque de visibilité sur les moteurs de recherche, entraînant un faible trafic et peu de prospects qualifiés via son site web.",
  solution:
    "Audit SEO complet, optimisation technique on-page, refonte de la stratégie de contenu et mise en place d'une campagne de netlinking ciblée pour renforcer l'autorité du domaine.",
  results:
    "Augmentation de 150% du trafic organique, positionnement en première page pour 10 mots-clés stratégiques et une hausse de 20% des demandes de contact via le site.",
}

// ============================================
// FAQ
// ============================================

export const FAQ: FAQItem[] = [
  {
    id: "1",
    question: "Quels sont les délais de création d'un site ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine simple peut être livré en 1 semaine si vous savez déjà ce que vous souhaitez en terme de design, tandis qu'un projet plus complexe (e-commerce, application web) peut prendre entre 1 et 3 mois. Je vous fournis un planning détaillé dès le début du projet.",
  },
  {
    id: "2",
    question: "Comment fonctionnent les paiements ?",
    answer:
      "Le paiement est généralement divisé en 2 ou 3 fois selon la formule choisie - pour un site vitrine simple, un acompte de 50% est demandé avant le début des travaux, puis le solde à la livraison. Pour les projets plus complexes, un paiement en 3 fois peut être mis en place : un acompte de 30% au démarrage, le solde à la livraison.",
  },
  {
    id: "3",
    question: "Proposez-vous un service de maintenance après la mise en ligne ?",
    answer:
      "Oui, je propose plusieurs formules de maintenance pour assurer la sécurité, les mises à jour et les évolutions de votre site. Ces services peuvent être inclus dans certains packs ou souscrits séparément.",
  },
  {
    id: "4",
    question: "Quel est votre processus de travail ?",
    answer:
      "Mon processus se déroule en 5 étapes : Briefing (analyse et compréhension de vos besoins), Wireframes (maquettes et UX), Développement (codage), Optimisation (tests et SEO), et Mise en ligne (déploiement et suivi). Cela induit donc 3 rendez-vous principaux : le briefing initial, la validation des maquettes, et la livraison finale.",
  },
  {
    id: "5",
    question: "Quel type d'accompagnement offrez-vous ?",
    answer:
      "Je propose un accompagnement personnalisé tout au long du projet avec des points réguliers, une communication transparente, et un suivi après livraison. Je suis également disponible pour des formations sur la gestion de votre site.",
  },
]

// ============================================
// TEXTES POUR LA PAGE À PROPOS
// ============================================

export const ABOUT_PAGE = {
  hero: {
    title: "En savoir plus sur moi",
    description:
      "Ma vision est de créer des expériences web performantes et intuitives qui apportent une valeur réelle à mes clients et à leurs utilisateurs.",
  },
  bio: {
    title: "Mon parcours et mes valeurs",
    description:
      "Spécialisée dans la création d'applications web modernes et de PWA, j'allie une expertise technique pointue avec une approche marketing stratégique pour garantir des résultats mesurables. Ma mission est de transformer vos idées en solutions numériques robustes et efficaces, en privilégiant toujours la collaboration, la qualité et la transparence.",
    expertise: {
      title: "Expertise Technique & Marketing",
      description:
        "Du développement front-end avec React et Next.js à la stratégie SEO, en passant par la conception d'interfaces sur Figma, je couvre l'ensemble du cycle de vie de votre projet pour vous livrer une solution clé en main.",
    },
  },
  image: "/images/about/profile.jpg", // À ajouter
}

// ============================================
// TEXTES POUR LA PAGE CONTACT
// ============================================

export const CONTACT_PAGE = {
  hero: {
    title: "Contact",
    subtitle: "Je vous réponds sous 24h.",
  },
  form: {
    title: "Envoyez-moi un message",
    namePlaceholder: "Entrez votre nom complet",
    emailPlaceholder: "Entrez votre adresse email",
    projectTypeLabel: "Type de projet",
    projectTypePlaceholder: "Choisissez une option",
    messagePlaceholder: "Bonjour, je souhaiterais discuter de...",
    submitButton: "Envoyer",
  },
  cta: {
    title: "Prêt à discuter de votre projet ?",
    description: "Prendre un rendez-vous gratuit de 15 minutes pour échanger.",
    button: "Réserver un créneau",
  },
  projectTypes: [
    { value: "site-web", label: "Création de site web" },
    { value: "app", label: "Application web / PWA" },
    { value: "marketing", label: "Marketing digital" },
    { value: "design", label: "Design & Print" },
    { value: "autre", label: "Autre" },
  ],
}

// ============================================
// CTA (Call-to-Action) RÉUTILISABLES
// ============================================

export const CTA = {
  appointment: {
    title: "Prêt à lancer votre projet ?",
    subtitle: "Parlons-en !",
    description:
      "Contactez-moi pour discuter de vos idées et voir comment nous pouvons collaborer pour donner vie à votre projet numérique.",
    button: "Me contacter",
    buttonAppointment: "Discutons de votre projet",
  },
  services: {
    title: "Voir mes services",
    button: "Voir mes services",
  },
}

// ============================================
// PAGES LÉGALES
// ============================================

export const LEGAL_PAGES = {
  mentionsLegales: {
    title: "Mentions Légales",
    slug: "/legal/mentions-legales",
  },
  confidentialite: {
    title: "Politique de Confidentialité",
    slug: "/legal/politique-confidentialite",
  },
  cgs: {
    title: "Conditions Générales de Service",
    slug: "/legal/cgs",
  },
}

// Informations légales
export const LEGAL_INFO = {
  entreprise: {
    nom: "LCC", 
    statut: "Auto-entrepreneur", 
    siren: "993978659", 
    adresse: "Lambesc, France",
    email: SITE_CONFIG.email,
    phone: SITE_CONFIG.phone,
  },
  hebergeur: {
    nom: "Vercel Inc.",
    adresse: "440 N Barranca Ave #4133, Covina, CA 91723",
    site: "https://vercel.com",
  },
}