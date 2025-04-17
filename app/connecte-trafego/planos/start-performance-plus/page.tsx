"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, BarChart3, Users, MessageSquare, TrendingUp } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=351920357000&text=Ol%C3%A1%2C+tenho+interesse+no+Plano+Connecte+Start%21+Gostaria+de+mais+informa%C3%A7%C3%B5es%2C+por+favor.&type=phone_number&app_absent=0",
      "_blank",
    )
  }

  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault()
    const plansSection = document.getElementById("plans")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F3F3F3]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#1E1E1E]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TIPOGRAFIA-OFF%20WHITE-oFFBkv3T5t5fUcvoIs96rg4eO5lTrt.png"
              alt="TCONNECTE Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
          <Link href="#plans" onClick={scrollToPlans}>
            <button className="bg-[#F3F3F3] text-[#1E1E1E] px-6 py-2 rounded font-['Poppins'] font-medium hover:bg-white transition-colors">
              COMEÇAR
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Dashboard na esquerda */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="border-4 border-[#1E1E1E] rounded-md overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard_exemplo_frame_1_Landing_page_connecte_trafego-43GBTIqoasub88BERuzBJ0MJ5l5WHM.png"
                    alt="Tconnecte dashboard"
                    width={650}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Headline e subheadline na direita */}
              <div className="order-1 lg:order-2">
                <h1 className="font-['Geoform'] text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] leading-tight">
                  Se o seu tráfego não gera vendas previsíveis, você está apenas brincando de marketing
                </h1>
                <p className="font-['Poppins'] text-base md:text-lg text-[#1E1E1E] mt-4">
                  A TCONNECTE transforma gastos em investimentos com sistemas de aquisição que garantem ROI real e
                  crescimento escalável
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    onClick={scrollToPlans}
                    className="bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] hover:border hover:border-[#1E1E1E] rounded-md px-8 py-5 text-base font-medium transition-all"
                  >
                    Conheça nossos planos
                  </Button>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-6 text-[#1E1E1E]">TCONNECTE</h2>
              <p className="font-['Poppins'] text-lg mb-8 text-[#1E1E1E]">
                Transformamos a Tconnecte de uma simples agência em uma startup de performance, focada em resultados
                concretos e escaláveis. Nosso objetivo é empoderar negócios para crescerem através de estratégias de
                aquisição digital inteligentes e diversificadas, garantindo que cada investimento seja uma etapa para o
                sucesso escalável.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <p className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E]">+60</p>
                  <p className="font-['Poppins'] text-sm text-[#1E1E1E]">Projetos gerenciados</p>
                </div>
                <div className="p-4">
                  <p className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E]">+5</p>
                  <p className="font-['Poppins'] text-sm text-[#1E1E1E]">Países de atuação</p>
                </div>
                <div className="p-4">
                  <p className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E]">+€2M</p>
                  <p className="font-['Poppins'] text-sm text-[#1E1E1E]">Gerenciados em anúncios</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="w-full py-16 md:py-24 bg-[#F3F3F3]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-6 text-[#1E1E1E]">
                CONNECTE TRÁFEGO
              </h2>
              <p className="font-['Poppins'] text-lg mb-4 text-[#1E1E1E]">
                O Connecte Tráfego é um sistema estratégico que transforma mídia paga em crescimento previsível. Mais do
                que campanhas, entregamos direção, dados e execução com propósito — sem achismo, sem atalhos, só
                performance real.
              </p>
              <p className="font-['Poppins'] text-lg mb-4 text-[#1E1E1E]">
                Estruturamos todas as etapas da aquisição digital, desde o primeiro contato com o público até o momento
                da conversão e expansão, entregando clareza, eficiência e retorno mensurável.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6">
                  <h3 className="font-['Geoform'] text-xl font-bold mb-4 text-[#1E1E1E]">O que entregamos:</h3>
                  <ul className="font-['Poppins'] space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Estratégia personalizada de aquisição</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Implementação técnica completa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Otimização contínua baseada em dados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Relatórios de performance transparentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Acompanhamento do investimento diário em tempo real</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-['Geoform'] text-xl font-bold mb-4 text-[#1E1E1E]">O que não fazemos:</h3>
                  <ul className="font-['Poppins'] space-y-2">
                    <li className="flex items-center gap-2">
                      <X className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Vender tráfego sem estratégia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Prometer resultados impossíveis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Esconder métricas importantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-5 w-5 text-[#1E1E1E]" />
                      <span>Complicar o que deve ser simples</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-['Poppins'] text-lg mt-8 mb-4 text-[#1E1E1E] text-center font-bold">
                "Não vendemos anúncios. Estruturamos sistemas de aquisição."
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-6 text-center text-[#1E1E1E]">
                METODOLOGIA [ARVE & CAO]
              </h2>
              <p className="font-['Poppins'] text-lg mb-12 text-center text-[#1E1E1E]">
                Nossa metodologia proprietária entrega crescimento com base, dados e direção.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#F3F3F3] p-4 rounded-sm">
                      <BarChart3 className="h-8 w-8 text-[#1E1E1E]" />
                    </div>
                    <div>
                      <h3 className="font-['Geoform'] text-xl font-bold mb-2 text-[#1E1E1E]">Audiência</h3>
                      <p className="font-['Poppins'] text-[#1E1E1E]">
                        Funis voltados para atrair seguidores certos e construir autoridade. O foco é branding forte,
                        presença digital e posicionamento de marca
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#F3F3F3] p-4 rounded-sm">
                      <MessageSquare className="h-8 w-8 text-[#1E1E1E]" />
                    </div>
                    <div>
                      <h3 className="font-['Geoform'] text-xl font-bold mb-2 text-[#1E1E1E]">Relacionamento</h3>
                      <p className="font-['Poppins'] text-[#1E1E1E]">
                        Captamos e nutrimos leads com intenção real. Aqui, o objetivo é transformar atenção em conexão
                        estratégica, preparando o terreno para a venda.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#F3F3F3] p-4 rounded-sm">
                      <Users className="h-8 w-8 text-[#1E1E1E]" />
                    </div>
                    <div>
                      <h3 className="font-['Geoform'] text-xl font-bold mb-2 text-[#1E1E1E]">Venda</h3>
                      <p className="font-['Poppins'] text-[#1E1E1E]">
                        Momento de conversão direta. Aplicamos funis que quebram objeções, ativam o desejo e aumentam o
                        ticket médio com inteligência.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#F3F3F3] p-4 rounded-sm">
                      <TrendingUp className="h-8 w-8 text-[#1E1E1E]" />
                    </div>
                    <div>
                      <h3 className="font-['Geoform'] text-xl font-bold mb-2 text-[#1E1E1E]">Escala</h3>
                      <p className="font-['Poppins'] text-[#1E1E1E]">
                        Aumentamos a previsibilidade e abrimos novos caminhos. Estruturamos campanhas para crescer
                        verticalmente (mais verba) e horizontalmente (novas audiências).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-['Geoform'] text-xl font-bold mb-4 text-center text-[#1E1E1E]">
                  CAO: Toda decisão nasce de dados. Toda ação nasce de estratégia.
                </h3>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                  <div>
                    <div className="bg-white p-4 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-2">
                      <span className="font-['Geoform'] text-xl font-bold text-[#1E1E1E]">1</span>
                    </div>
                    <p className="font-['Poppins'] text-[#1E1E1E]">Coleta</p>
                  </div>
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-white p-4 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-2">
                      <span className="font-['Geoform'] text-xl font-bold text-[#1E1E1E]">2</span>
                    </div>
                    <p className="font-['Poppins'] text-[#1E1E1E]">Análise</p>
                  </div>
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-white p-4 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-2">
                      <span className="font-['Geoform'] text-xl font-bold text-[#1E1E1E]">3</span>
                    </div>
                    <p className="font-['Poppins'] text-[#1E1E1E]">Otimização</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="w-full py-16 md:py-24 bg-[#F3F3F3]">
          <div className="container px-4 md:px-6">
            <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-6 text-center text-[#1E1E1E]">
              PLANOS
            </h2>
            <p className="font-['Poppins'] text-lg mb-12 text-center text-[#1E1E1E]">
              Escolha o plano ideal para o seu negócio
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Plan 1 */}
              <div className="bg-white p-8 border border-[#D7D7D7]">
                <h3 className="font-['Geoform'] text-2xl font-bold mb-2 text-[#1E1E1E]">Connecte Start</h3>
                <p className="font-['Poppins'] text-[#1E1E1E] mb-4">Captação de Seguidores</p>
                <p className="font-['Geoform'] text-3xl font-bold mb-6 text-[#1E1E1E]">
                  €197<span className="text-base font-normal">/mês</span>
                </p>

                <ul className="font-['Poppins'] space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Campanha focada para ganhar seguidores reais e qualificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Estratégia de branding com foco em autodidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Otmizações baseadas em dados (método CAO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Acompanhamento de Custo por Seguidor (CPS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Dashboard interativo com indicadores em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Suporte consultivo via E-mail e WhatsApp</span>
                  </li>
                </ul>

                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] hover:border hover:border-[#1E1E1E] rounded-md py-6 text-base font-medium transition-all"
                >
                  Contratar Plano Start
                </Button>
              </div>

              {/* Plan 2 */}
              <div className="bg-white p-8 relative">
                <h3 className="font-['Geoform'] text-2xl font-bold mb-2 text-[#1E1E1E]">Connecte Performance</h3>
                <p className="font-['Poppins'] text-[#1E1E1E] mb-4">Captação de Leads</p>
                <p className="font-['Geoform'] text-3xl font-bold mb-6 text-[#1E1E1E]">
                  €297<span className="text-base font-normal">/mês</span>
                </p>

                <ul className="font-['Poppins'] space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Diagnóstico estratégico e manifesto personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Campanhas orientadas para geração de leads qualificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Estrutura de segmentação baseada em comportamento e interesse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Otimizações baseadas em dados (método CAO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Acompanhamento de Custo por Lead (CPL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Dashboard interativo com indicadores em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Reunião de indicadores e otimizações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Suporte consultivo via E-mail e WhatsApp</span>
                  </li>
                </ul>

                <Button
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send/?phone=351920357000&text=Ol%C3%A1%2C+tenho+interesse+no+Plano+Connecte+Performance%21+Gostaria+de+mais+informa%C3%A7%C3%B5es%2C+por+favor.&type=phone_number&app_absent=0",
                      "_blank",
                    )
                  }}
                  className="w-full bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] hover:border hover:border-[#1E1E1E] rounded-md py-6 text-base font-medium transition-all"
                >
                  Contratar Plano Performance
                </Button>
              </div>

              {/* Plan 3 */}
              <div className="bg-[#1E1E1E] p-8 border-2 border-[#E1E1E1] relative">
                <div className="absolute top-0 right-0 bg-[#F3F3F3] text-black px-4 py-1 text-sm">Mais vendido</div>
                <h3 className="font-['Geoform'] text-2xl font-bold mb-2 text-[#F3F3F3]">Connecte Start Plus</h3>
                <p className="font-['Poppins'] text-[#F3F3F3] mb-4">Captação de Seguidores e Leads</p>
                <p className="font-['Geoform'] text-3xl font-bold mb-6 text-[#F3F3F3]">
                  €429<span className="text-base font-normal">/mês</span>
                </p>

                <ul className="font-['Poppins'] space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">Diagnóstico híbrido com manifesto de campanha ampliado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">
                      Campanha simultânea para ganho de autoridade e geração de leads qualificados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">
                      Segmentação avançada por comportamento, interesse e funil de intenção
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">
                      Otimizações contínuas com base no método CAO (Coleta, Análise, Otimização)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">
                      Acompanhamento de Custo por Seguidor (CPS) e Custo por Lead (CPL)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">
                      Dashboard completo com indicadores de branding, leads e performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">
                      Reuniões de indicadores com foco em crescimento e decisões táticas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#F3F3F3] mt-0.5" />
                    <span className="text-[#F3F3F3]">Suporte consultivo via E-mail, WhatsApp e feedbacks</span>
                  </li>
                </ul>

                <Button
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send/?phone=351920357000&text=Ol%C3%A1%2C+tenho+interesse+no+Plano+Connecte+Start+Performance%21+Gostaria+de+mais+informa%C3%A7%C3%B5es%2C+por+favor.&type=phone_number&app_absent=0",
                      "_blank",
                    )
                  }}
                  className="w-full bg-[#F3F3F3] text-black hover:bg-black hover:text-[#F3F3F3] hover:border hover:border-[#F3F3F3] rounded-md py-6 text-base font-medium transition-all"
                >
                  Contratar Plano Start Plus
                </Button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <Table className="w-full bg-white">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-['Geoform'] text-[#1E1E1E]">Recursos</TableHead>
                    <TableHead className="font-['Geoform'] text-[#1E1E1E] text-center">Connecte Start</TableHead>
                    <TableHead className="font-['Geoform'] text-[#1E1E1E] text-center">Connecte Performance</TableHead>
                    <TableHead className="font-['Geoform'] text-[#1E1E1E] text-center">Connecte Start Plus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Objetivo Principal</TableCell>
                    <TableCell className="text-center">Ganho de seguidores</TableCell>
                    <TableCell className="text-center">Geração de leads qualificados</TableCell>
                    <TableCell className="text-center">Autoridade + Geração de Leads</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Diagnóstico</TableCell>
                    <TableCell className="text-center">Tático e simplificado</TableCell>
                    <TableCell className="text-center">Estratégico e aprofundado</TableCell>
                    <TableCell className="text-center">Híbrido (tático + estratégico)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Campanhas Ativas</TableCell>
                    <TableCell className="text-center">Visibilidade e branding</TableCell>
                    <TableCell className="text-center">Captação e nutrição de leads</TableCell>
                    <TableCell className="text-center">Visibilidade + Captação estruturada</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Segmentação de Público</TableCell>
                    <TableCell className="text-center">Básica por interesse</TableCell>
                    <TableCell className="text-center">Comportamento e intenção</TableCell>
                    <TableCell className="text-center">Avançada com múltiplas camada</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Métricas Monitoradas</TableCell>
                    <TableCell className="text-center">CPS (Custo por Seguidor)</TableCell>
                    <TableCell className="text-center">CPL (Custo por Lead)</TableCell>
                    <TableCell className="text-center">CPS + CPL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Otimizações</TableCell>
                    <TableCell className="text-center">Semanais</TableCell>
                    <TableCell className="text-center">Semanais</TableCell>
                    <TableCell className="text-center">Semanais com foco em crescimento</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Dashboard de Indicadores</TableCell>
                    <TableCell className="text-center">Interativo (visão geral)</TableCell>
                    <TableCell className="text-center">Interativo (leads e funil)</TableCell>
                    <TableCell className="text-center">Completo (branding e leads)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Suporte</TableCell>
                    <TableCell className="text-center">E-mail e WhatsApp</TableCell>
                    <TableCell className="text-center">E-mail e WhatsApp</TableCell>
                    <TableCell className="text-center">Suporte VIP com feedbacks táticos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-['Poppins'] text-[#1E1E1E]">Reuniões com Cliente</TableCell>
                    <TableCell className="text-center">1/mês</TableCell>
                    <TableCell className="text-center">1/mês (indicadores + ajustes)</TableCell>
                    <TableCell className="text-center">1/mês + feedback estratégico contínuo</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-6 text-center text-[#1E1E1E]">
              ETAPAS DO PROCESSO
            </h2>
            <p className="font-['Poppins'] text-lg mb-12 text-center text-[#1E1E1E]">
              Nosso processo estruturado garante resultados consistentes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-[#F3F3F3] p-6 text-center rounded-xl">
                <span className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E] block mb-4">1</span>
                <h3 className="font-['Geoform'] text-lg font-bold mb-2 text-[#1E1E1E]">Alinhamento</h3>
                <p className="font-['Poppins'] text-sm text-[#1E1E1E]">
                  Entendimento do negócio e definição de objetivos
                </p>
              </div>
              <div className="bg-[#F3F3F3] p-6 text-center rounded-xl">
                <span className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E] block mb-4">2</span>
                <h3 className="font-['Geoform'] text-lg font-bold mb-2 text-[#1E1E1E]">Diagnóstico</h3>
                <p className="font-['Poppins'] text-sm text-[#1E1E1E]">
                  Análise da situação atual e identificação de oportunidades
                </p>
              </div>
              <div className="bg-[#F3F3F3] p-6 text-center rounded-xl">
                <span className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E] block mb-4">3</span>
                <h3 className="font-['Geoform'] text-lg font-bold mb-2 text-[#1E1E1E]">Arquitetura</h3>
                <p className="font-['Poppins'] text-sm text-[#1E1E1E]">
                  Desenvolvimento da estratégia e planejamento de ações
                </p>
              </div>
              <div className="bg-[#F3F3F3] p-6 text-center rounded-xl">
                <span className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E] block mb-4">4</span>
                <h3 className="font-['Geoform'] text-lg font-bold mb-2 text-[#1E1E1E]">Ativação</h3>
                <p className="font-['Poppins'] text-sm text-[#1E1E1E]">
                  Implementação das campanhas e configuração de rastreamento
                </p>
              </div>
              <div className="bg-[#F3F3F3] p-6 text-center rounded-xl">
                <span className="font-['Geoform'] text-3xl font-bold text-[#1E1E1E] block mb-4">5</span>
                <h3 className="font-['Geoform'] text-lg font-bold mb-2 text-[#1E1E1E]">Otimização</h3>
                <p className="font-['Poppins'] text-sm text-[#1E1E1E]">
                  Análise de resultados e ajustes para maximizar performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section id="for-who" className="w-full py-16 md:py-24 bg-[#F3F3F3]">
          <div className="container px-4 md:px-6">
            <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-12 text-center text-[#1E1E1E]">
              PARA QUEM É / PARA QUEM NÃO É
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8">
                <h3 className="font-['Geoform'] text-2xl font-bold mb-6 text-[#1E1E1E]">Para quem é</h3>
                <ul className="font-['Poppins'] space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Empresas que buscam crescimento escalável e previsível</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Negócios que valorizam dados e resultados mensuráveis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Empreendedores que entendem marketing como investimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Quem busca parceria estratégica, não apenas execução</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-['Geoform'] text-2xl font-bold mb-6 text-[#1E1E1E]">Para quem não é</h3>
                <ul className="font-['Poppins'] space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Quem busca resultados milagrosos sem estratégia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Empresas que não valorizam dados e métricas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Negócios sem processos ou estrutura mínima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-[#1E1E1E] mt-0.5" />
                    <span>Quem vê marketing como custo, não como investimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Proof Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Coluna da esquerda */}
              <div className="space-y-8 text-center">
                <div>
                  <p className="font-['Geoform'] text-4xl font-bold text-[#1E1E1E]">+60</p>
                  <p className="font-['Poppins'] text-lg text-[#1E1E1E]">Projetos gerenciados</p>
                </div>
                <div>
                  <p className="font-['Geoform'] text-4xl font-bold text-[#1E1E1E]">+5</p>
                  <p className="font-['Poppins'] text-lg text-[#1E1E1E]">Países de atuação</p>
                </div>
                <div>
                  <p className="font-['Geoform'] text-4xl font-bold text-[#1E1E1E]">+€2M</p>
                  <p className="font-['Poppins'] text-lg text-[#1E1E1E]">Gerenciados em anúncios</p>
                </div>
              </div>

              {/* Coluna da direita - TCONNECTE e slogan */}
              <div className="text-center">
                <h2 className="font-['Geoform'] text-5xl font-bold mb-4 text-[#1E1E1E]">TCONNECTE</h2>
                <p className="font-['Poppins'] text-base text-[#1E1E1E]">
                  Negócio ⌜Fortalece⌟ &nbsp;Estratégia ⌜Diversifica⌟ &nbsp;Resultado ⌜Escala ⌟
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objections Section */}
        <section className="w-full py-16 md:py-24 bg-[#F3F3F3]">
          <div className="container px-4 md:px-6">
            <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-12 text-center text-[#1E1E1E]">
              <b>Respostas diretas para as dúvidas que impedem seu crescimento.</b>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8">
                <h3 className="font-['Geoform'] text-xl font-bold mb-4 text-[#1E1E1E]">
                  "Já investi em tráfego pago e não tive resultado"
                </h3>
                <p className="font-['Poppins'] text-[#1E1E1E]">
                  Tráfego pago isolado não resolve. Sem estratégia, segmentação inteligente e otimização contínua, é
                  apenas gasto. O Connecte Tráfego estrutura o sistema completo de aquisição — antes, durante e depois
                  do clique — para garantir retorno real.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-['Geoform'] text-xl font-bold mb-4 text-[#1E1E1E]">
                  "É caro para o meu momento de negócio"
                </h3>
                <p className="font-['Poppins'] text-[#1E1E1E]">
                  Caro é continuar sem escalar. Nossos clientes obtêm ROI porque atuamos com estratégia, metas
                  mensuráveis e decisões baseadas em dados. O verdadeiro prejuízo está em não ter previsibilidade nem
                  crescimento controlado.
                </p>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-['Geoform'] text-xl font-bold mb-4 text-[#1E1E1E]">
                  "Consigo fazer isso internamente"
                </h3>
                <p className="font-['Poppins'] text-[#1E1E1E]">
                  Você pode até tentar, mas vai pagar o preço da curva de aprendizado. Nós já dominamos o caminho. Com
                  método validado e execução precisa, aceleramos resultados em semanas — sem achismos, sem improviso,
                  sem perder tempo.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={scrollToPlans}
                className="bg-[#1E1E1E] text-white hover:bg-white hover:text-[#1E1E1E] hover:border hover:border-[#1E1E1E] rounded-md px-8 py-6 text-base font-medium transition-all"
              >
                COMEÇAR
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="font-['Geoform'] text-3xl font-bold tracking-tighter mb-4 text-center text-[#1E1E1E]">
              Perguntas Frequentes
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    O que é o Connecte Tráfego?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    É um sistema estratégico de mídia paga com metodologia própria (ARVE + CAO), focado em escalar
                    negócios por meio de dados, segmentação e performance real.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    A Tconnecte só roda anúncios?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Não. Antes de anunciar, fazemos diagnóstico, criamos o manifesto estratégico, estruturamos as
                    campanhas e acompanhamos os indicadores com foco em resultado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Preciso entender de tráfego ou configurar algo?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Não. Nossa equipe cuida de toda a operação técnica, otimizações e análise de dados. Você foca no
                    negócio, a gente foca no crescimento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Quando começo a ver resultados?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Depende do plano. Os primeiros dados surgem nas primeiras semanas, mas o objetivo é criar
                    previsibilidade e crescimento consistente, e não prometer milagre.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Serve para qualquer tipo de negócio?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Funciona para negócios que tenham uma oferta validada, operação ativa e presença digital mínima. Não
                    aceitamos projetos em fase de ideia ou sem estrutura básica.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Vocês produzem criativos ou landing pages?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Não. Atuamos exclusivamente com tráfego e estratégia. O cliente deve ter seus criativos prontos ou
                    contratar parceiros para isso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Posso trocar de plano depois?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Sim. Você pode fazer upgrade de forma facilitada.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Como funciona o suporte?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Oferecemos suporte consultivo via WhatsApp e E-mail, além de reuniões mensais ou quinzenais,
                    conforme o plano contratado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Como posso contratar?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Clique no botão de contratação nesta página e fale diretamente com nossa equipe via WhatsApp. O
                    processo é rápido e sem burocracia.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Posso usar apenas Google Ads ou apenas Meta Ads?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Sim. A estratégia será definida com base no seu público, oferta e objetivos. Trabalhamos com ambos
                    os canais, e cada caso é analisado individualmente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    E se meu projeto for reprovado?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Somos criteriosos na seleção. Se identificarmos que ainda não é o momento, explicamos o motivo e
                    indicamos os próximos passos para amadurecer o projeto. Só aceitamos o que temos certeza que podemos
                    escalar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12" className="border-b border-[#D7D7D7]">
                  <AccordionTrigger className="font-['Poppins'] font-medium text-[#1E1E1E] py-4">
                    Qual o investimento mínimo em anúncios?
                  </AccordionTrigger>
                  <AccordionContent className="font-['Poppins'] text-[#1E1E1E] pb-4">
                    Aconselhamos um investimento inicial de pelo menos €5 a €10 por dia (Meta ou Google), dependendo do
                    plano e da meta do negócio. A verba é definida na fase de planejamento.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-32 md:py-40 bg-[#1E1E1E] border-t border-[#1E1E1E]">
          <div className="container px-4 md:px-6">
            <div className="mb-24">
              <h2 className="font-['Geoform'] text-3xl font-bold mb-4 text-[#F3F3F3]">TCONNECTE</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-['Poppins'] text-sm text-[#F3F3F3]">
                Copyright © 2025 Tconnecte Company. Todos os direitos reservados.
              </p>
              <nav className="flex gap-8">
                <Link href="#" className="font-['Poppins'] text-sm text-[#F3F3F3] hover:underline underline-offset-4">
                  Privacidade
                </Link>
                <Link href="#" className="font-['Poppins'] text-sm text-[#F3F3F3] hover:underline underline-offset-4">
                  Termos
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
