import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function getCloudinaryImages() {
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
    console.error('Error fetching Cloudinary images:', error);
    throw error;
  }
}
