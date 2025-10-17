import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "dhzwv9qhg";
const apiKey = process.env.CLOUDINARY_API_KEY || "556636492725719";
const apiSecret = process.env.CLOUDINARY_API_SECRET || "3M3--12VhJqSFCjtsDTJf44JdBI";

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

console.log('Cloudinary configured with cloud_name:', cloudName);

async function getLocalImages() {
  const assetsDir = path.join(process.cwd(), 'attached_assets');

  try {
    const files = await fs.readdir(assetsDir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    return imageFiles.map((file, index) => ({
      id: index + 1,
      src: `/attached_assets/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
      category: 'wedding' as const,
      title: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' ')
    }));
  } catch (error) {
    console.error('Error reading local images:', error);
    return [];
  }
}

export async function getCloudinaryImages() {
  try {
    console.log('Attempting to fetch images from Cloudinary...');
    let result;

    try {
      console.log('Trying asset folder API for "studio" folder...');
      result = await cloudinary.api.resources_by_asset_folder('studio', {
        max_results: 500,
        resource_type: 'image'
      });
      console.log(`Found ${result.resources?.length || 0} images in studio folder using asset folder API`);
    } catch (folderError: any) {
      console.log('Folder API failed:', folderError?.error?.message || folderError?.message || 'Unknown error');
      console.log('Trying prefix method with studio/ prefix...');
      result = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'studio/',
        max_results: 500,
        resource_type: 'image'
      });
      console.log(`Found ${result.resources?.length || 0} images with studio/ prefix`);
    }

    if (!result.resources || result.resources.length === 0) {
      console.log('No images found in studio folder, trying to fetch all images in account...');
      result = await cloudinary.api.resources({
        type: 'upload',
        max_results: 500,
        resource_type: 'image'
      });
      console.log(`Found ${result.resources?.length || 0} total images in account`);
    }

    if (!result.resources || result.resources.length === 0) {
      console.log('No images found in Cloudinary account, falling back to local images');
      return getLocalImages();
    }

    const images = result.resources.map((resource: any, index: number) => ({
      id: index + 1,
      src: resource.secure_url,
      alt: resource.public_id.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Gallery image ${index + 1}`,
      category: 'wedding' as const,
      title: resource.public_id.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Image ${index + 1}`
    }));

    console.log(`Successfully retrieved ${images.length} images from Cloudinary`);
    return images;
  } catch (error: any) {
    console.error('Error fetching Cloudinary images:', error?.error?.message || error?.message || error);
    console.log('Falling back to local images');
    return getLocalImages();
  }
}
