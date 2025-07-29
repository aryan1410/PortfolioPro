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
    // Use a simple configuration that works with most SendGrid setups
    const emailContent = {
      to: 'aryanu1410@gmail.com',
      from: 'aryanu1410@gmail.com', // Use your own email as sender (must be verified)
      subject: `Portfolio Contact from ${params.name}: ${params.subject}`,
      text: `
New contact form submission from your portfolio website:

From: ${params.name} (${params.email})
Subject: ${params.subject}

Message:
${params.message}

---
You can reply directly to this email to respond to ${params.name}.
This message was sent from your portfolio contact form.
      `,
      html: `
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
      `,
      replyTo: params.email // This makes replies go directly to the contact person
    };

    await mailService.send(emailContent);
    console.log(`✅ Contact email sent successfully to aryanu1410@gmail.com from ${params.name} (${params.email})`);
    return true;
  } catch (error: any) {
    console.error('❌ SendGrid email error details:', {
      message: error.message,
      code: error.code,
      statusCode: error.response?.status,
      errorBody: error.response?.body
    });
    
    // Log more specific guidance based on error type
    if (error.code === 403) {
      console.log('🔧 SendGrid 403 Error - Possible solutions:');
      console.log('   1. Verify aryanu1410@gmail.com in your SendGrid account');
      console.log('   2. Check if API key has mail send permissions');
      console.log('   3. Ensure account is not suspended');
    }
    
    return false;
  }
}