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
        sizes="(max-width: 460px) calc(100vw - 76px), 384px"
        format="webp"
        className={className}
      />
    </div>
  );
}
