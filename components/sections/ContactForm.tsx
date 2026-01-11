"use client"

import { useState } from "react"
import { CONTACT_PAGE, SITE_CONFIG } from "@/lib/constants"
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
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">{CONTACT_PAGE.form.title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <Input
            id="name"
            type="text"
            placeholder={CONTACT_PAGE.form.namePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder={CONTACT_PAGE.form.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        {/* Type de projet */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium mb-2">
            {CONTACT_PAGE.form.projectTypeLabel}
          </label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => setFormData({ ...formData, projectType: value })}
          >
            <SelectTrigger>
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
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder={CONTACT_PAGE.form.messagePlaceholder}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            required
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full">
          {CONTACT_PAGE.form.submitButton}
        </Button>
      </form>
    </div>
  )
}
