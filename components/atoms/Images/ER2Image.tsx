'use client';

import { CldImage } from 'next-cloudinary';

interface ER2ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ER2Image({
  src = 'cory-siebler/er2-logo',
  alt = 'ER2 Logo',
  width = 617,
  height = 243,
  className = 'object-cover',
}: ER2ImageProps) {
  return (
    <div className="relative h-42 max-w-sm">
      <CldImage
        src={src}
        alt={alt}
        aspectRatio={width / height}
        format="webp"
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}
