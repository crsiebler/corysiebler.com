'use client';

import { CldImage } from 'next-cloudinary';

interface TriangulatorImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function TriangulatorImage({
  src = 'cory-siebler/triangulator-credit-mobility',
  alt = 'Credit Mobility Triangulator',
  width = 2560,
  height = 1600,
  className = 'object-cover',
}: TriangulatorImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      aspectRatio={width / height}
      fill
      format="webp"
      className={className}
    />
  );
}
