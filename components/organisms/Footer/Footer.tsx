import Link from 'next/link';
import { Button } from '@/atoms/Button';
import { Text } from '@/atoms/Text';
import { linkItems } from '@/constants/navigation';

export function Footer() {
  return (
    <footer>
      <div className="bg-shade-dark px-6 py-1 text-white">
        <div className="container mx-auto flex w-full justify-between px-4">
          <Text className="text-xxs my-auto hidden md:flex" variant="caption">
            {'Copyright © '}
            <Link color="inherit" href="/">
              Cory Siebler
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All rights reserved.'}
          </Text>
          <div className="mx-auto flex gap-2 md:mx-0">
            {linkItems.map((item, index) => (
              <Button
                key={index}
                aria-label={item.ariaLabel}
                aria-controls="menu-top"
                aria-haspopup="true"
                className="group hover:bg-shade-light text-white"
                rounded="full"
                variant="text"
              >
                <Link
                  href={item.href}
                  target={item.target ? item.target : '_self'}
                >
                  {item.icon(10)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
