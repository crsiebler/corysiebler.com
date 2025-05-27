'use client';

import { CldImage } from 'next-cloudinary';

interface AmericanExpressImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function AmericanExpressImage({
  src = 'cory-siebler/american-express-logo',
  alt = 'American Express Logo',
  width = 1000,
  height = 998,
  className = 'object-cover',
}: AmericanExpressImageProps) {
  return (
    <div className="relative mb-2 h-52 max-w-sm">
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
