'use client';

import { CldImage } from 'next-cloudinary';

interface AngelStudiosImageProps {
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
}: AngelStudiosImageProps) {
  return (
    <div className="relative mb-2 h-26 max-w-sm">
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
