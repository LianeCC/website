// ============================================
// TYPES GÉNÉRAUX
// ============================================

export interface NavLink {
  href: string
  label: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// ============================================
// TYPES POUR LES SERVICES
// ============================================

export interface Service {
  id: string
  icon: string // Nom de l'icône
  title: string
  description: string
  tags: string[]
  detailedDescription?: string // Optionnel 
}

// ============================================
// TYPES POUR LES TARIFS
// ============================================

export interface PricingPlan {
  id: string
  name: string
  price: string
  priceDetails?: string // Ex: "à partir de"
  description: string
  features: string[]
  highlighted?: boolean // Pour mettre en avant un plan
  cta: string // Texte du bouton
}

export interface CustomOption {
  id: string
  name: string
  description?: string
}

// ============================================
// TYPES POUR LE PROCESS DE TRAVAIL
// ============================================

export interface ProcessStep {
  id: number
  title: string
  description: string
}

// ============================================
// TYPES POUR LES PROJETS/PORTFOLIO
// ============================================

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  category: string // Ex: "Web App", "E-commerce"
}

// ============================================
// TYPES POUR LES TÉMOIGNAGES
// ============================================

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  avatar?: string
}

// ============================================
// TYPES POUR LA STACK TECHNIQUE
// ============================================

export interface TechStack {
  id: string
  name: string
  icon: string // URL de l'image du logo
}

// ============================================
// TYPES POUR LES FEATURES/AVANTAGES
// ============================================

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

// ============================================
// TYPES POUR LA FAQ
// ============================================

export interface FAQItem {
  id: string
  question: string
  answer: string
}

// ============================================
// TYPES POUR LES ÉTUDES DE CAS
// ============================================

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  metric: string
  metricLabel: string
  problem: string
  solution: string
  results: string
}

// ============================================
// TYPES POUR LA CONFIG DU SITE
// ============================================

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  phone?: string
  location: string
  social: SocialLink[]
}