import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';

const isCloudinaryConfigured = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name:"dhzwv9qhg",
    api_key:"556636492725719",
    api_secret:"3M3--12VhJqSFCjtsDTJf44JdBI"
  });
}

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
  if (!isCloudinaryConfigured) {
    console.log('Cloudinary not configured, using local images');
    return getLocalImages();
  }

  try {
    let result;
    
    try {
      result = await cloudinary.api.resources_by_asset_folder('studio', {
        max_results: 500,
        resource_type: 'image'
      });
      console.log(`Found ${result.resources?.length || 0} images in studio folder using asset folder API`);
    } catch (folderError) {
      console.log('Folder API failed, trying prefix method:', folderError);
      result = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'studio/',
        max_results: 500,
        resource_type: 'image'
      });
      console.log(`Found ${result.resources?.length || 0} images with studio/ prefix`);
    }

    if (!result.resources || result.resources.length === 0) {
      console.log('No images found, trying to fetch all images');
      result = await cloudinary.api.resources({
        type: 'upload',
        max_results: 500,
        resource_type: 'image'
      });
      console.log(`Found ${result.resources?.length || 0} total images in account`);
    }

    return result.resources.map((resource: any, index: number) => ({
      id: index + 1,
      src: resource.secure_url,
      alt: resource.public_id.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Gallery image ${index + 1}`,
      category: 'wedding' as const,
      title: resource.public_id.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Image ${index + 1}`
    }));
  } catch (error) {
    console.error('Error fetching Cloudinary images, falling back to local images:', error);
    return getLocalImages();
  }
}
