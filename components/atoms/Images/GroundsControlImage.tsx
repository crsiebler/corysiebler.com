'use client';

import { CldImage } from 'next-cloudinary';
import { portfolioArchiveImageSizes } from '@/constants/imageSizes';

interface GroundsControlImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function GroundsControlImage({
  src = 'cory-siebler/grounds-control',
  alt = 'Grounds Control, LLC',
  width = 1507,
  height = 2048,
  className = 'object-cover',
}: GroundsControlImageProps) {
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
