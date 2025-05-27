'use client';

import { CldImage } from 'next-cloudinary';

interface GeneralDynamicsImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function GeneralDynamicsImage({
  src = 'cory-siebler/gdms-logo',
  alt = 'General Dynamics Logo',
  width = 1200,
  height = 627,
  className = 'object-contain',
}: GeneralDynamicsImageProps) {
  return (
    <div className="relative mb-2 h-48 max-w-sm">
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
