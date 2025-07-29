import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all contact messages endpoint (for admin viewing)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ success: false, message: "Failed to fetch messages" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.insertContactMessage(validatedData);
      
      // Try to send email notification
      const emailSent = await sendContactEmail({
        name: contactMessage.name,
        email: contactMessage.email,
        subject: contactMessage.subject,
        message: contactMessage.message
      });
      
      // Always show success to user, but log the email status
      if (emailSent) {
        console.log("✅ Email sent successfully");
      } else {
        console.log("📧 Message stored successfully. Email delivery pending SendGrid setup.");
        console.log("📝 Contact Details:", {
          name: contactMessage.name,
          email: contactMessage.email,
          subject: contactMessage.subject,
          timestamp: contactMessage.createdAt,
          message: contactMessage.message.substring(0, 100) + "..."
        });
      }
      
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
