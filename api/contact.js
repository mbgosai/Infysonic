import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, service_requested, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create transporter using Zoho SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com', // Use smtppro.zoho.com if you are on a specific premium tier
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.ZOHO_EMAIL, // e.g. hello@infysonic.com
      pass: process.env.ZOHO_PASSWORD, // Zoho App-Specific Password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name} (Website Form)" <${process.env.ZOHO_EMAIL}>`, // Must be sent from authenticated Zoho address
      replyTo: email,
      to: process.env.ZOHO_EMAIL, // Delivering back into your own inbox
      subject: `New Lead: ${name} - ${service_requested || 'General Inquiry'}`,
      text: `
You have received a new contact form submission from Infysonic.com:

Name: ${name}
Email: ${email}
Service Required: ${service_requested || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Service Required:</strong> ${service_requested || 'N/A'}</p>
          <hr />
          <h4>Message:</h4>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email via Zoho SMTP:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email. Check Vercel logs.', error: error.message });
  }
}
