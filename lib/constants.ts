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
  name: "Liane Coupat",
  tagline: "Développeuse Web, Apps & Marketing Digital",
  description:
    "Je transforme vos idées en solutions numériques performantes pour vous aider à atteindre vos objectifs et faire grandir votre entreprise en ligne.",
  url: "https://lianecc.com", 
  email: "liane.cptcdl@gmail.com",
  phone: "+33 (0)6 58 10 40 17",
  location: "Aix-en-Provence, France",
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
    tags: ["Vitrine", "site-web", "E-commerce", "Sur-mesure"],
    detailedDescription:
      "Je crée des sites web sur-mesure qui reflètent votre identité et convertissent vos visiteurs en clients. Du design à la mise en ligne, en passant par le référencement, je gère l'intégralité du projet.",
  },
  {
    id: "app-web-pwa",
    icon: "smartphone",
    title: "Applications Web / PWA",
    description:
      "Des applications web progressives rapides et fiables qui fonctionnent sur tous les appareils.",
    tags: ["Application personnalisée", "Automatisation", "Dashboard", "Outil interne"],
    detailedDescription:
      "Développement de Progressive Web Apps pour offrir une expérience utilisateur optimale sur tous les supports.",
  },
  {
    id: "marketing-digital",
    icon: "trending_up",
    title: "Marketing Digital",
    description:
      "Stratégies SEO et campagnes publicitaires pour augmenter votre visibilité et attirer plus de clients.",
    tags: ["SEO / rédaction", "Stratégie", "Réseaux sociaux", "Funnels", "Communication", "Conversion", "Ads", "Social media" ],
    detailedDescription:
      "Je vous aide à développer votre présence en ligne grâce à des stratégies de marketing digital sur-mesure et orientées résultats.",
  },
  {
    id: "design-print",
    icon: "palette",
    title: "Design & Print",
    description:
      "Identité visuelle, pack branding, flyers / affiches, UI/UX",
    tags: ["Identité visuelle", "Pack branding", "UI/UX"],
  },
  {
    id: "communication",
    icon: "campaign",
    title: "Communication",
    description:
      "Positionnement, stratégie de marque, conseil global",
    tags: ["Positionnement", "Stratégie de marque", "Conseil global"],
  },
]

// ============================================
// TARIFS
// ============================================

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "990€",
    priceDetails: "à partir de",
    description: "Idéal pour les lancements rapides",
    features: [
      "Site vitrine jusqu'à 3 pages (Accueil, Nos Services, Contact)",
      "Design personnalisé",
      "Optimisation SEO de base",
      "Mise en ligne",
      "Support technique dédié 6jours/7"
    ],
    highlighted: false,
    cta: "Choisir ce pack",
  },
  {
    id: "pro",
    name: "Pro",
    price: "2490€",
    priceDetails: "à partir de",
    description: "Pour les entreprises qui souhaitent de l'accompagnement",
    features: [
      "Fonctionnalités avancées (Blog, Formulaire avancé, Galerie, etc.)",
      "Optimisation SEO avancée",
      "Connexions à d'autres services(CRM, API...)",
      "Accompagnement & conseils sur la gestion des réseaux sociaux",
      "Support technique dédié 6jours/7"
    ],
    highlighted: true, // Plan mis en avant
    cta: "Choisir ce pack",
  },
  {
    id: "premium",
    name: "Premium",
    price: "sur devis",
    description: "Pour les projets sur-mesure et complexes.",
    features: [
      "Solution 100% sur-mesure",
      "Accompagnement stratégique",
      "Développement complexe",
      "Maintenance et évolutions",
      "Support dédié 6jours/7"

    ],
    highlighted: false,
    cta: "Nous contacter",
  },
]

export const CUSTOM_OPTIONS: CustomOption[] = [
  { id: "logo", name: "Logo / Identité visuelle" },
  { id: "social", name: "Gestion de vos réseaux sociaux" },
  { id: "training", name: "Formation marketing digital" },
  { id: "print", name: "Création de vos supports (carte de visite, flyers, logo avec éclairage led, etc.)" },
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
    icon: "/images/stack/nextjs.png",
  },
  {
    id: "react",
    name: "React",
    icon: "/images/stack/react.png",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/images/stack/nodejs.png",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "/images/stack/tailwind.png",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "/images/stack/postgresql.png",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "/images/stack/figma.png",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "/images/stack/vercel.png",
  },
  {
    id: "render",
    name: "Render",
    icon: "/images/stack/render.png",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "/images/stack/github.png",
  },
  {
    id: "python",
    name: "Python",
    icon: "/images/stack/python.png",
  },
  {
    id: "Canva",
    name: "Canva",
    icon: "/images/stack/canva.png",
  },
  {
    id: "indesign",
    name: "InDesign",
    icon: "/images/stack/indesign.png",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    icon: "/images/stack/photoshop.png",
  },
  {
    id: "affinity",
    name: "Affinity Designer",
    icon: "/images/stack/affinity.png",
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
    image: "/images/projects/vertlemariage.jpg", // À ajouter
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