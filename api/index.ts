import { getCloudinaryImages } from "../server/services/cloudinary";
import type { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.url === '/api/gallery/images' && req.method === 'GET') {
    try {
      const images = await getCloudinaryImages();
      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      res.status(500).json({ error: 'Failed to fetch gallery images' });
    }
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
