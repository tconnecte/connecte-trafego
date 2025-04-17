import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend("re_UNygtFpP_GAJQh8E49tug1mzD9VLKprpW")

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const bestTime = formData.get("bestTime")

    const result = await resend.emails.send({
      from: "TCONNECTE <contato@tconnecte.com>",
      to: ["comercial@tconnecte.com"],
      subject: "Nova Lead Planos Connecte Tráfego / Start-Performance-Plus ",
      html: `
        <h2>Nova Lead Recebida:</h2>
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp/Telemóvel:</strong> ${phone}</p>
        <p><strong>Melhor horário para contato:</strong> ${bestTime}</p>
      `,
    })

    console.log("Email enviado com sucesso:", result)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json({ success: false, error: "Erro ao enviar e-mail" }, { status: 500 })
  }
}
