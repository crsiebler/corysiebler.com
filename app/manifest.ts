import { MetadataRoute } from 'next';

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cory Siebler Portfolio',
    short_name: 'csiebler',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3f50b5',
    icons: [
      {
        src: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/ar_1.0,w_180,h_180/cory-siebler/favicon.png`,
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/ar_1.0,w_152,h_152/cory-siebler/favicon.png`,
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/ar_1.0,w_120,h_120/cory-siebler/favicon.png`,
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/ar_1.0,w_76,h_76/cory-siebler/favicon.png`,
        sizes: '76x76',
        type: 'image/png',
      },
      {
        src: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/ar_1.0,w_57,h_57/cory-siebler/favicon.png`,
        sizes: '57x57',
        type: 'image/png',
      },
    ],
  };
}
