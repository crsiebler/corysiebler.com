'use client';

import { CldImage } from 'next-cloudinary';

interface ArizonaStateUniversityImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ArizonaStateUniversityImage({
  src = 'cory-siebler/arizona-state-university-ira-a-fulton-schools-of-engineering-logo',
  alt = 'Avatar',
  width = 549,
  height = 181,
  className = 'rounded-full',
}: ArizonaStateUniversityImageProps) {
  return (
    <div className="relative max-w-56">
      <CldImage
        src={src}
        alt={alt}
        aspectRatio={width / height}
        width={width}
        height={height}
        format="webp"
        className={className}
      />
    </div>
  );
}
