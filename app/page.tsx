"use client"

import Image from "next/image"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o53UWkhYosxuz4r6FykLONYlGSc5Nz.png"
          alt="Site em Manutenção - Desculpe-nos pelo transtorno. Estamos trabalhando para melhor atendê-los."
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  )
}
