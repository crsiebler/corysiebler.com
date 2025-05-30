'use client';

import { CldImage } from 'next-cloudinary';

interface Tempe922PlaceImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function Tempe922PlaceImage({
  src = 'cory-siebler/922-place',
  alt = 'American Express Logo',
  width = 940,
  height = 517,
  className = 'object-cover',
}: Tempe922PlaceImageProps) {
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
