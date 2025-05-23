import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Image
        src="/images/manutencao.png"
        alt="Site em Manutenção"
        width={800}
        height={600}
        className="max-w-full h-auto"
        priority
      />
    </div>
  )
}
