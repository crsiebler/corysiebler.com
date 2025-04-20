'use client';

import { useDisplay } from '@/lib/hooks';

interface NavigationDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function NavigationDrawer({
  children,
  isOpen,
  onClose,
}: NavigationDrawerProps) {
  const { hideDrawer } = useDisplay((state) => state);

  return <div></div>;
}
