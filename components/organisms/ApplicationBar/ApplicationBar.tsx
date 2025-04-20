'use client';

import { useDisplay } from '@/lib/hooks';
import { NavigationBar } from '@/molecules/NavigationBar';
import { NavigationDrawer } from '@/molecules/NavigationDrawer';
import { AvatarSection } from './AvatarSection';

export function ApplicationBar() {
  const { drawer, hideDrawer, showDrawer } = useDisplay((state) => state);

  return (
    <header className="bg-tint-lightest fixed top-0 z-20 w-full">
      <NavigationBar onClick={showDrawer} menuOpen={false} title={''}>
        <AvatarSection />
      </NavigationBar>
      <NavigationDrawer isOpen={drawer} onClose={hideDrawer}>
        <AvatarSection />
      </NavigationDrawer>
    </header>
  );
}
