'use client';

import { CldImage } from 'next-cloudinary';

interface GhostArmorImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function GhostArmorImage({
  src = 'cory-siebler/ghost-armor-logo',
  alt = 'Ghost Armor Logo',
  width = 300,
  height = 84,
  className = 'object-contain',
}: GhostArmorImageProps) {
  return (
    <div className="relative h-36 max-w-sm">
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
