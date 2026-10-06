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
  alt = 'Nextiva Logo',
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
        sizes="(max-width: 460px) calc(100vw - 76px), 384px"
        format="webp"
        className={className}
      />
    </div>
  );
}
