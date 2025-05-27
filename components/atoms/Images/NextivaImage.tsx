'use client';

import { CldImage } from 'next-cloudinary';

interface NextivaImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function NextivaImage({
  src = 'cory-siebler/nextiva-logo',
  alt = 'Angel Studios Logo',
  width = 1318,
  height = 659,
  className = 'object-contain',
}: NextivaImageProps) {
  return (
    <div className="relative h-48 max-w-sm">
      <CldImage
        src={src}
        alt={alt}
        aspectRatio={width / height}
        fill
        format="webp"
        className={className}
      />
    </div>
  );
}
