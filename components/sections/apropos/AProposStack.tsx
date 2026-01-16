"use client"

import { useState, useEffect } from "react"

// Logos depuis Simple Icons CDN (https://simpleicons.org/)
// Format: https://cdn.simpleicons.org/{icon}/{color}
const getLogoUrl = (id: string, color: string = "white") => {
    const iconMap: Record<string, string> = {
        "react": "react",
        "nextjs": "nextdotjs",
        "typescript": "typescript",
        "tailwind": "tailwindcss",
        "vite": "vite",
        "figma": "figma",
        "canva": "canva",
        "indesign": "adobeindesign",
        "nodejs": "nodedotjs",
        "python": "python",
        "django": "django",
        "postgresql": "postgresql",
        "mongodb": "mongodb",
        "mysql": "mysql",
        "supabase": "supabase",
        "docker": "docker",
        "github": "github",
        "render": "render",
        "vercel": "vercel",
        "shopify": "shopify",
        "wordpress": "wordpress",
        "google-analytics": "googleanalytics",
        "google-search-console": "googlesearchconsole",
        "brevo": "brevo",
        "notion": "notion",
        "airtable": "airtable",
        "claude": "anthropic",
    }
    return `https://cdn.simpleicons.org/${iconMap[id] || id}/${color}`
}

// Catégories de la stack
const STACK_CATEGORIES = {
    frontend: {
        title: "Front-end & Design",
        items: [
            { id: "react", name: "React" },
            { id: "nextjs", name: "Next.js" },
            { id: "typescript", name: "TypeScript" },
            { id: "tailwind", name: "Tailwind" },
            { id: "vite", name: "Vite" },
            { id: "figma", name: "Figma" },
            { id: "canva", name: "Canva" },
            { id: "indesign", name: "InDesign" },
        ]
    },
    backend: {
        title: "Back-end & Data",
        items: [
            { id: "nodejs", name: "Node.js" },
            { id: "python", name: "Python" },
            { id: "django", name: "Django" },
            { id: "postgresql", name: "PostgreSQL" },
            { id: "mongodb", name: "MongoDB" },
            { id: "mysql", name: "MySQL" },
            { id: "supabase", name: "Supabase" },
            { id: "docker", name: "Docker" },
            { id: "github", name: "GitHub" },
            { id: "render", name: "Render" },
            { id: "vercel", name: "Vercel" },
        ]
    },
    marketing: {
        title: "Marketing & Outils",
        items: [
            { id: "shopify", name: "Shopify" },
            { id: "wordpress", name: "WordPress" },
            { id: "google-analytics", name: "Analytics" },
            { id: "google-search-console", name: "Search Console" },
            { id: "brevo", name: "Brevo" },
            { id: "notion", name: "Notion" },
            { id: "airtable", name: "Airtable" },
            { id: "claude", name: "Claude.Code" },
        ]
    }
}

// Composant pour un item de la stack
function StackItem({ item }: { item: { id: string; name: string } }) {
    return (
        <div className="flex flex-col items-center gap-1 p-2 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <img
                src={getLogoUrl(item.id)}
                alt={item.name}
                className="w-5 h-5 lg:w-6 lg:h-6"
            />
            <span className="text-[10px] lg:text-xs font-medium text-white text-center leading-tight">
                {item.name}
            </span>
        </div>
    )
}

// Composant pour un node du triangle (desktop)
function TriangleNode({
    category,
    position
}: {
    category: { title: string; items: { id: string; name: string }[] }
    position: "top" | "bottom-left" | "bottom-right"
}) {
    const positionClasses = {
        "top": "top-0 left-1/2 -translate-x-1/2",
        "bottom-left": "bottom-0 left-0",
        "bottom-right": "bottom-0 right-0"
    }

    return (
        <div className={`absolute ${positionClasses[position]} w-[280px] xl:w-[320px]`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm xl:text-base font-bold text-primary mb-3 text-center">
                    {category.title}
                </h4>
                <div className="grid grid-cols-4 gap-2">
                    {category.items.map((item) => (
                        <StackItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

// Composant SVG pour les lignes animées
function AnimatedLines() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                {/* Gradient pour l'animation */}
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(23, 168, 154)" stopOpacity="0" />
                    <stop offset="50%" stopColor="rgb(23, 168, 154)" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(23, 168, 154)" stopOpacity="0" />
                </linearGradient>

                {/* Animation du dash */}
                <style>
                    {`
                        .animated-line {
                            stroke-dasharray: 200 400;
                            animation: dash 4s linear infinite;
                        }
                        .animated-line-reverse {
                            stroke-dasharray: 200 400;
                            animation: dash-reverse 4s linear infinite;
                        }
                        .animated-line-slow {
                            stroke-dasharray: 200 400;
                            animation: dash 6s linear infinite;
                        }
                        @keyframes dash {
                            to {
                                stroke-dashoffset: -600;
                            }
                        }
                        @keyframes dash-reverse {
                            to {
                                stroke-dashoffset: 600;
                            }
                        }
                    `}
                </style>
            </defs>

            {/* Lignes de fond (statiques, subtiles) */}
            <line x1="400" y1="80" x2="140" y2="420" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="400" y1="80" x2="660" y2="420" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="140" y1="420" x2="660" y2="420" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />

            {/* Lignes animées */}
            <line
                x1="400" y1="80" x2="140" y2="420"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animated-line"
            />
            <line
                x1="400" y1="80" x2="660" y2="420"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animated-line-reverse"
            />
            <line
                x1="140" y1="420" x2="660" y2="420"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animated-line-slow"
            />

            {/* Points aux sommets */}
            <circle cx="400" cy="80" r="6" fill="rgb(23, 168, 154)" className="animate-pulse" />
            <circle cx="140" cy="420" r="6" fill="rgb(23, 168, 154)" className="animate-pulse" />
            <circle cx="660" cy="420" r="6" fill="rgb(23, 168, 154)" className="animate-pulse" />
        </svg>
    )
}

// Version mobile (grille simple)
function MobileStack() {
    const allItems = [
        ...STACK_CATEGORIES.frontend.items,
        ...STACK_CATEGORIES.backend.items,
        ...STACK_CATEGORIES.marketing.items
    ]

    return (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3 max-w-lg mx-auto">
            {allItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center gap-1 p-2 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                    <img
                        src={getLogoUrl(item.id)}
                        alt={item.name}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-[8px] sm:text-[10px] font-medium text-white text-center leading-tight">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    )
}

// Version desktop (triangle)
function DesktopStack() {
    return (
        <div className="relative w-full max-w-4xl mx-auto h-[520px]">
            <AnimatedLines />
            <TriangleNode category={STACK_CATEGORIES.frontend} position="top" />
            <TriangleNode category={STACK_CATEGORIES.backend} position="bottom-left" />
            <TriangleNode category={STACK_CATEGORIES.marketing} position="bottom-right" />
        </div>
    )
}

export function AProposStack() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }
        checkDesktop()
        window.addEventListener("resize", checkDesktop)
        return () => window.removeEventListener("resize", checkDesktop)
    }, [])

    return (
        <section className="mt-10 sm:mt-20 py-8 sm:py-12 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-6 sm:mb-10 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4">
                        Ma stack technique & mes outils
                    </h2>
                </div>

                {isDesktop ? <DesktopStack /> : <MobileStack />}
            </div>
        </section>
    )
}
