'use client';

import { CldImage } from 'next-cloudinary';

interface OneOriginImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function AngelStudiosImage({
  src = 'cory-siebler/angel-studios-copper-logo',
  alt = 'Angel Studios Logo',
  width = 1000,
  height = 242,
  className = 'bg-black p-2 object-contain',
}: OneOriginImageProps) {
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
