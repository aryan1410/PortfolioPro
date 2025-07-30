import nodemailer from 'nodemailer';

interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmailFallback(params: ContactEmailParams): Promise<boolean> {
  try {
    // Check if credentials are available
    if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASSWORD) {
      console.log('📧 Email credentials not configured. Skipping email send.');
      return false;
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px;">
          New Portfolio Contact Message
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Contact Details:</h3>
          <p><strong>Name:</strong> ${params.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${params.email}">${params.email}</a></p>
          <p><strong>Subject:</strong> ${params.subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #4f46e5; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${params.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; font-size: 14px; color: #1e40af;">
          <p style="margin: 0;"><strong>💡 To Reply:</strong> Simply reply to this email and it will go directly to ${params.name} at ${params.email}</p>
          <p style="margin: 5px 0 0 0;"><em>This message was sent from your portfolio website contact form.</em></p>
        </div>
      </div>
    `;

    // Text version
    const textContent = `
New contact form submission from your portfolio website:

From: ${params.name} (${params.email})
Subject: ${params.subject}

Message:
${params.message}

---
You can reply directly to this email to respond to ${params.name}.
This message was sent from your portfolio contact form.
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: 'aryanu1410@gmail.com',
      replyTo: params.email,
      subject: `Portfolio Contact from ${params.name}: ${params.subject}`,
      text: textContent,
      html: htmlContent
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to aryanu1410@gmail.com from ${params.name} (${params.email})`);
    return true;

  } catch (error: any) {
    console.error('❌ Nodemailer email error:', error.message);
    return false;
  }
}