'use client';

import { CldImage } from 'next-cloudinary';

interface AngelStudiosApplicationImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function AngelStudiosApplicationImage({
  src = 'cory-siebler/angel-studios-application',
  alt = 'Angel Studios Application',
  width = 1684,
  height = 1141,
  className = 'object-cover',
}: AngelStudiosApplicationImageProps) {
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
