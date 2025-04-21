import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "TCONNECTE | CONNECTE Tráfego | Tráfego Pago com Estratégia, Dados e Escala",
  description:
    "Somos uma Martech de Performance que transforma mídia paga em crescimento previsível. Negócio que Fortalece, Estratégia que Diversifica, Resultado que Escala.",
  generator: "Tconnecte Engine v1.0",
  keywords: [
    "Tráfego Pago",
    "Gestão de Anúncios",
    "Meta Ads",
    "Google Ads",
    "Marketing de Performance",
    "Agência de Tráfego",
    "Funil de Vendas",
    "Aquisição Digital",
    "Tconnecte",
    "ARVE",
    "CAO",
    "Connecte Tráfego",
    "Connnecte Funnel",
    "Tconnecte Company",
    "Tconnecte",
  ],
  authors: [{ name: "TCONNECTE", url: "https://tconnecte.com" }],
  creator: "TCONNECTE",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5CHQ7SZH');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CHQ7SZH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

import "./globals.css"
