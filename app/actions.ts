"use server"

export async function sendContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const bestTime = formData.get("bestTime")

    // Aqui você implementaria a lógica para enviar o email
    // Por exemplo, usando nodemailer ou uma API de email

    // Exemplo de log para debug
    console.log({
      to: "comercial@tconnecte.com",
      subject: "Nova Lead CONNECTE Tráfego 1.0",
      body: `
        Nome: ${firstName} ${lastName}
        Email: ${email}
        WhatsApp/Telemóvel: ${phone}
        Melhor horário: ${bestTime}
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error)
    return { success: false }
  }
}
