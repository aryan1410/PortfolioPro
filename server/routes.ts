import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.insertContactMessage(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log it and return success
      console.log("New contact message received:", {
        name: contactMessage.name,
        email: contactMessage.email,
        subject: contactMessage.subject,
        timestamp: contactMessage.createdAt
      });
      
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
