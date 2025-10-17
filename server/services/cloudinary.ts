import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function getCloudinaryImages() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'studio/',
      max_results: 500,
      resource_type: 'image'
    });

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
