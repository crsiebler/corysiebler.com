'use client';

import { CldImage } from 'next-cloudinary';
import { portfolioArchiveImageSizes } from '@/constants/imageSizes';

interface LoneButteCasinoImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function LoneButteCasinoImage({
  src = 'cory-siebler/lone-butte-casino',
  alt = 'Lone Butte Casino',
  width = 2000,
  height = 1200,
  className = 'object-cover',
}: LoneButteCasinoImageProps) {
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
