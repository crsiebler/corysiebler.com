'use client';

import { Text } from '@/atoms/Text';

export function HomeSkillsParagraph() {
  return (
    <Text className="text-shade" component="p" variant="body1">
      I have {new Date().getFullYear() - 2012} years professional experience in
      the software industry. From database management to front-end libraries, I
      contribute to all aspects of the software architecture. I enjoy
      discovering new technology and I am always open to exploring the latest
      trends in engineering.
    </Text>
  );
}
