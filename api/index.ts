import { v2 as cloudinary } from 'cloudinary';
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
      // Configure Cloudinary (required for Vercel)
      const isCloudinaryConfigured = Boolean(
        process.env.CLOUDINARY_CLOUD_NAME &&
        process.env.CLOUDINARY_API_KEY &&
        process.env.CLOUDINARY_API_SECRET
      );

      if (!isCloudinaryConfigured) {
        console.error('❌ Cloudinary environment variables are missing');
        return res.status(500).json({ 
          error: 'Cloudinary not configured',
          message: 'Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in Vercel environment variables'
        });
      }

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      console.log('✅ Cloudinary configured, fetching images...');

      let result;

      try {
        // Try to fetch from 'studio' folder first
        result = await cloudinary.api.resources_by_asset_folder('studio', {
          max_results: 500,
          resource_type: 'image',
        });
        console.log(`📁 Found ${result.resources?.length || 0} images in 'studio' folder`);
      } catch (folderError) {
        console.log('⚠️ Folder API failed, trying prefix method...');
        try {
          result = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'studio/',
            max_results: 500,
            resource_type: 'image',
          });
        } catch (prefixError) {
          console.log('⚠️ Prefix method failed, fetching all images...');
        }
      }

      // If no results yet, fetch all images
      if (!result || !result.resources || result.resources.length === 0) {
        console.log('📸 Fetching all images from Cloudinary...');
        result = await cloudinary.api.resources({
          type: 'upload',
          max_results: 500,
          resource_type: 'image',
        });
      }

      const images = result.resources.map((resource: any, index: number) => ({
        id: index + 1,
        src: resource.secure_url,
        alt: resource.public_id.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Image ${index + 1}`,
        category: 'wedding' as const,
        title: resource.public_id.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Image ${index + 1}`,
      }));

      console.log(`✅ Successfully fetched ${images.length} images from Cloudinary`);
      return res.status(200).json(images);

    } catch (error) {
      console.error('❌ Error fetching gallery images:', error);
      return res.status(500).json({ 
        error: 'Failed to fetch gallery images',
        message: error instanceof Error ? error.message : 'Unknown error',
        details: error instanceof Error ? error.stack : undefined
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
