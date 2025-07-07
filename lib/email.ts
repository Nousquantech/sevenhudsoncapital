import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or use "smtp" and set host/port/secure
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({ name, email, message }: EmailData) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Message",
    text: `You have a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
  };

  await transporter.sendMail(mailOptions);
}
