"use client"

import Image from "next/image"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351920357000?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!%20Por%20favor."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nt4C0bE9WuP270a0VaXF02Rtelq0Fj.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-full w-full rounded-full"
      />
    </a>
  )
}
