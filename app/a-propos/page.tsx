import { ABOUT_PAGE, TECH_STACK, PROJECTS, CASE_STUDY } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{ABOUT_PAGE.hero.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {ABOUT_PAGE.hero.description}
          </p>
        </div>
      </section>

      {/* Mon parcours et mes valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                  alt="Photo de profil"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contenu */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold">{ABOUT_PAGE.bio.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {ABOUT_PAGE.bio.description}
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">{ABOUT_PAGE.bio.expertise.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {ABOUT_PAGE.bio.expertise.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ma Stack Technique & Mes Outils */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ma Stack Technique & Mes Outils</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center gap-3 p-4 bg-background rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="text-3xl">
                    {tech.id === "nextjs" ? "▲" :
                     tech.id === "react" ? "⚛️" :
                     tech.id === "nodejs" ? "🟢" :
                     tech.id === "tailwind" ? "🎨" :
                     tech.id === "postgresql" ? "🐘" :
                     tech.id === "figma" ? "🎭" :
                     tech.id === "python" ? "🐍" : "📦"}
                  </span>
                </div>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mes Réalisations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Réalisations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Voir le projet →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Étude de Cas SEO */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">{CASE_STUDY.title}</h2>
              <p className="text-muted-foreground">{CASE_STUDY.subtitle}</p>
            </div>

            <Card className="bg-background">
              <CardContent className="pt-6 space-y-6">
                <div className="text-center py-8 bg-primary/10 rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">{CASE_STUDY.metric}</div>
                  <div className="text-muted-foreground">{CASE_STUDY.metricLabel}</div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Problème</h3>
                  <p className="text-muted-foreground">{CASE_STUDY.problem}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Solution</h3>
                  <p className="text-muted-foreground">{CASE_STUDY.solution}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Résultats</h3>
                  <p className="text-muted-foreground">{CASE_STUDY.results}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer ?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Que vous ayez une idée précise ou juste une ébauche, je suis là pour vous aider à la concrétiser.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Discutons de votre projet
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
