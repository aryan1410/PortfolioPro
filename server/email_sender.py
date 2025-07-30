#!/usr/bin/env python3
"""
Email sender using Python's smtplib and EmailMessage
This script is called from the Node.js backend to send contact form emails
"""

import smtplib
import sys
import json
import os
from email.message import EmailMessage
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(contact_data):
    """
    Send email using SMTP with EmailMessage
    """
    try:
        # Get email credentials from environment variables
        sender_email = os.getenv('EMAIL_ADDRESS')
        sender_password = os.getenv('EMAIL_PASSWORD')
        recipient_email = 'aryanu1410@gmail.com'
        
        if not sender_email or not sender_password:
            print("ERROR: EMAIL_ADDRESS or EMAIL_PASSWORD environment variables not set")
            return False
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Portfolio Contact from {contact_data['name']}: {contact_data['subject']}"
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Reply-To'] = contact_data['email']
        
        # Create plain text version
        text_content = f"""
New contact form submission from your portfolio website:

From: {contact_data['name']} ({contact_data['email']})
Subject: {contact_data['subject']}

Message:
{contact_data['message']}

---
You can reply directly to this email to respond to {contact_data['name']}.
This message was sent from your portfolio contact form.
        """
        
        # Create HTML version
        html_content = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px;">
            New Portfolio Contact Message
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Contact Details:</h3>
            <p><strong>Name:</strong> {contact_data['name']}</p>
            <p><strong>Email:</strong> <a href="mailto:{contact_data['email']}">{contact_data['email']}</a></p>
            <p><strong>Subject:</strong> {contact_data['subject']}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #4f46e5; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">{contact_data['message']}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; font-size: 14px; color: #1e40af;">
            <p style="margin: 0;"><strong>💡 To Reply:</strong> Simply reply to this email and it will go directly to {contact_data['name']} at {contact_data['email']}</p>
            <p style="margin: 5px 0 0 0;"><em>This message was sent from your portfolio website contact form.</em></p>
          </div>
        </div>
        """
        
        # Create MIMEText objects
        text_part = MIMEText(text_content, 'plain')
        html_part = MIMEText(html_content, 'html')
        
        # Attach parts
        msg.attach(text_part)
        msg.attach(html_part)
        
        # Send email using Gmail SMTP
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
        
        print(f"✅ Email sent successfully to {recipient_email} from {contact_data['name']} ({contact_data['email']})")
        return True
        
    except Exception as e:
        print(f"❌ Error sending email: {str(e)}")
        return False

if __name__ == "__main__":
    try:
        # Read contact data from command line argument
        if len(sys.argv) != 2:
            print("ERROR: Contact data JSON required as argument")
            sys.exit(1)
            
        contact_data = json.loads(sys.argv[1])
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if field not in contact_data:
                print(f"ERROR: Missing required field: {field}")
                sys.exit(1)
        
        # Send email
        success = send_email(contact_data)
        sys.exit(0 if success else 1)
        
    except json.JSONDecodeError:
        print("ERROR: Invalid JSON data provided")
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: {str(e)}")
        sys.exit(1)