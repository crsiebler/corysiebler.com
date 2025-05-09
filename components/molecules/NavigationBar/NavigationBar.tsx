'use client';

import { Button } from '@/atoms/Button';
import { MenuIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';
import { useDisplay } from '@/lib/hooks/useDisplay';

interface NavigationBarProps {
  children?: React.ReactNode;
  title: string;
}

export function NavigationBar({ children, title }: NavigationBarProps) {
  const { drawer, toggleDrawer } = useDisplay((state) => state);

  return (
    <div className="px flex w-full flex-col py-2 lg:hidden">
      <div className="gap flex">
        <Button
          aria-label="menu"
          color="tint-lightest"
          variant="text"
          rounded="lg"
          onClick={toggleDrawer}
        >
          <MenuIcon className="text-white" size={24} />
        </Button>
        <div className="flex items-center">
          <Text color="white" variant="h5">
            {title.split('|')[0].trim()}
          </Text>
        </div>
      </div>
      {drawer && children}
    </div>
  );
}
