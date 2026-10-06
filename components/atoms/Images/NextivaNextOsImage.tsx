'use client';

import { CldImage } from 'next-cloudinary';
import { portfolioArchiveImageSizes } from '@/constants/imageSizes';

interface NextivaNextOsImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function NextivaNextOsImage({
  src = 'cory-siebler/nextiva-nextos',
  alt = 'Nextiva NextOS',
  width = 1384,
  height = 1296,
  className = 'object-cover',
}: NextivaNextOsImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      aspectRatio={width / height}
      fill
      sizes={portfolioArchiveImageSizes}
      format="webp"
      className={className}
    />
  );
}
