'use client';

import { CldImage } from 'next-cloudinary';

export function AvatarImage() {
  return (
    <div className="relative w-full">
      <CldImage
        alt="Cory Siebler Avatar"
        format="webp"
        quality="auto"
        replaceBackground="white"
        src="cory-siebler/avatar.webp"
        height={144}
        width={144}
      />
    </div>
  );
}
