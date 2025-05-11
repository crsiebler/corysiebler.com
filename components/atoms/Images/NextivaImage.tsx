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
    <div className="relative">
      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        crop="fill"
        format="webp"
        className={className}
      />
    </div>
  );
}
