import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getCloudinaryImages } from "./services/cloudinary";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.get('/api/gallery/images', async (req, res) => {
    try {
      const images = await getCloudinaryImages();
      res.json(images);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      res.status(500).json({ error: 'Failed to fetch gallery images' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
