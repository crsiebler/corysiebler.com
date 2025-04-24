'use client';

import { useDisplay } from '@/lib/hooks';
import { NavigationBar } from '@/molecules/NavigationBar';
import { NavigationDrawer } from '@/molecules/NavigationDrawer';
import { AvatarSection } from './AvatarSection';

export function ApplicationBar() {
  const { drawer, hideDrawer, showDrawer } = useDisplay((state) => state);

  return (
    <header className="bg-primary w-full">
      <NavigationBar onClick={showDrawer} menuOpen={false} title={''}>
        <AvatarSection />
      </NavigationBar>
      <NavigationDrawer isOpen={drawer} onClose={hideDrawer}>
        <AvatarSection />
      </NavigationDrawer>
    </header>
  );
}
