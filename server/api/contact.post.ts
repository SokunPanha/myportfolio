import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, message } = body

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, and message are required'
    })
  }

  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.mailUser,
      pass: config.mailPassword
    }
  })

  const mailOptions = {
    from: config.mailUser,
    to: 'sokunpanha.panha@gmail.com',
    replyTo: email,
    subject: `Portfolio Contact: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Contact Form Submission</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          This message was sent from your portfolio contact form.
        </p>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully' }
  } catch (error: any) {
    console.error('Email error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.'
    })
  }
})
