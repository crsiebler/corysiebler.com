import React from 'react';
import { linkItems } from 'constants/navigation';
import { Text } from '@/atoms/Text';
import { AvatarImage } from '@/atoms/Images/AvatarImage';

export function AvatarSection() {
  return (
    <div className="flex flex-col items-center space-y-6 pt-4">
      <Text className="text-center" variant="h6">
        Cory Siebler
      </Text>
      <div className="size-36 overflow-hidden rounded-full">
        <AvatarImage />
      </div>
      <Text
        component="p"
        className="text-center"
        variant="body2"
        weight="light"
      >
        Hi! My name is Cory Siebler. Welcome to my personal website!
      </Text>
      <div className="flex w-full max-w-xs flex-wrap justify-center">
        {linkItems.map((item, index) => (
          <a
            aria-label={item.ariaLabel}
            className="flex w-1/3 justify-center rounded-full p-2 transition hover:bg-gray-200"
            href={item.href}
            key={index}
            target={item.target ? item.target : '_self'}
          >
            {item.icon()}
          </a>
        ))}
      </div>
    </div>
  );
}
