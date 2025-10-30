// 📧 utils/enviarCorreo.js
const nodemailer =require('nodemailer');

/**
 * Envía un correo electrónico utilizando el transporter configurado.
 * @param {string} destinatario - Dirección de correo del receptor.
 * @param {string} asunto - Asunto del correo.
 * @param {string} cuerpo - Contenido del mensaje.
 * @returns {Promise<{ success: boolean, messageId?: string, error?: any }>}
 */
 async function enviarCorreo(destinatario, asunto, cuerpo) {
  try {
    // --- Configuración del transporter ---
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o el servicio que uses (Outlook, SMTP personalizado, etc.)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Configuración del correo ---
    const mailOptions = {
      from: `"Empresa ZAAG 🚀" <${process.env.EMAIL_USER}>`,
      to: destinatario,
      subject: asunto,
      text: cuerpo,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007BFF;">${asunto}</h2>
          <p>${cuerpo}</p>
          <hr/>
        <small>📩 Correo emitido por el Área de Supervisión Corporativa. Información confidencial destinada exclusivamente a su destinatario.</small>

        </div>
      `,
    };

    // --- Envío del correo ---
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Correo enviado correctamente a ${destinatario} (ID: ${info.messageId})`);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error al enviar el correo:', error.message);
    return { success: false, error: error.message };
  }
}

module.exports = {enviarCorreo};