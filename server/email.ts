import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  try {
    const emailContent = {
      to: 'aryanu1410@gmail.com',
      from: 'aryanu1410@gmail.com', // Must be verified sender in SendGrid
      subject: `Portfolio Contact: ${params.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${params.name}</p>
            <p><strong>Email:</strong> ${params.email}</p>
            <p><strong>Subject:</strong> ${params.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #4f46e5; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${params.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; font-size: 14px; color: #1e40af;">
            <p><strong>Reply To:</strong> ${params.email}</p>
            <p style="margin: 0;"><em>This message was sent from your portfolio website contact form.</em></p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${params.name}
        Email: ${params.email}
        Subject: ${params.subject}
        
        Message:
        ${params.message}
        
        Reply to: ${params.email}
        This message was sent from your portfolio website contact form.
      `
    };

    await mailService.send(emailContent);
    console.log(`✅ Contact email sent successfully to aryanu1410@gmail.com from ${params.name} (${params.email})`);
    return true;
  } catch (error) {
    console.error('❌ SendGrid email error:', error);
    return false;
  }
}