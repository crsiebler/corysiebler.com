import { useMemo } from 'react';

interface CloudinaryOptions {
  crop: string;
  format: string;
  height: number;
  width: number;
}

export function useCloudinaryImage(
  publicId: string,
  options: CloudinaryOptions,
): string {
  const { crop, format, height, width } = options;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const url = useMemo(() => {
    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
    return `${baseUrl}/f_${format}/w_${width},h_${height},c_${crop}/${publicId}`;
  }, [publicId, crop, format, height, width, cloudName]);

  return url;
}
