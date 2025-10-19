import { getCloudinaryImages } from "../server/services/cloudinary";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      console.log('Fetching images from Cloudinary...');
      const images = await getCloudinaryImages();
      console.log(`Successfully fetched ${images.length} images`);
      return res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      return res.status(500).json({ 
        error: 'Failed to fetch gallery images',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
