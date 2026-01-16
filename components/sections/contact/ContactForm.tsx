"use client"

import { useState } from "react"
import { CONTACT_PAGE } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter l'envoi du formulaire
    console.log("Form submitted:", formData)
    alert("Formulaire soumis ! (À implémenter avec un service d'envoi d'email)")
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            {CONTACT_PAGE.form.title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2 text-white">
                Nom
              </label>
              <Input
                id="name"
                type="text"
                placeholder={CONTACT_PAGE.form.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2 text-white">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder={CONTACT_PAGE.form.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            {/* Type de projet */}
            <div>
              <label htmlFor="projectType" className="block text-sm sm:text-base font-medium mb-2 text-white">
                {CONTACT_PAGE.form.projectTypeLabel}
              </label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder={CONTACT_PAGE.form.projectTypePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {CONTACT_PAGE.projectTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2 text-white">
                Message
              </label>
              <Textarea
                id="message"
                placeholder={CONTACT_PAGE.form.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              {CONTACT_PAGE.form.submitButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
