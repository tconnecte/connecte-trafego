"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsOpen(false)
          setTimeout(() => {
            setIsSuccess(false)
          }, 300)
        }, 3000)
      } else {
        alert("Erro ao enviar. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro inesperado. Tente mais tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#1E1E1E] text-[#F3F3F3] border border-[#1E1E1E] hover:bg-[#F3F3F3] hover:text-[#1E1E1E] hover:border hover:border-[#1E1E1E] rounded-md px-8 py-5 text-base font-medium transition-all">
          Agendar uma demonstração
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isSuccess ? (
          <div className="py-12 text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">Formulário enviado com sucesso!</h3>
            <p>Entraremos em contato em breve.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Agendar uma demonstração</DialogTitle>
              <DialogDescription>
                Preencha o formulário abaixo para agendar uma demonstração personalizada.
              </DialogDescription>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Primeiro nome</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Último nome</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Endereço de e-mail</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp/Telemóvel</Label>
                <Input id="phone" name="phone" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bestTime">Melhor horário para ser contactado</Label>
                <Select name="bestTime" defaultValue="morning">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Manhã (8h-12h)</SelectItem>
                    <SelectItem value="afternoon">Tarde (12h-18h)</SelectItem>
                    <SelectItem value="evening">Noite (18h-22h)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] hover:border hover:border-[#1E1E1E] rounded-md py-4 text-base font-medium transition-all"
              >
                {isSubmitting ? "Enviando..." : "Começar"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
