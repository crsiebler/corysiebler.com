'use client';

import { CldImage } from 'next-cloudinary';

interface PhiTechnologySolutionsImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function PhiTechnologySolutionsImage({
  src = 'cory-siebler/phi-technology-solutions-llc',
  alt = 'Phi Technology Solutions Logo',
  width = 1160,
  height = 320,
  className = 'object-contain',
}: PhiTechnologySolutionsImageProps) {
  return (
    <div className="relative mb-2 h-24 max-w-sm">
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
