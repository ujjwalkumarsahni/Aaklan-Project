import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,  
    },
  });


// Verify connection on startup
transporter.verify((error, success) => {
    if (error) {
        console.log('Brevo SMTP connection error:', error);
    } else {
        console.log('Brevo SMTP server is ready to send messages');
        console.log('Using SMTP user:', process.env.SMTP_USER);
    }
});

export default transporter;


export const sendStatusEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"Aaklan HR" <${process.env.SENDER_EMAIL}>`,
      to,
      subject,
      text,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
};