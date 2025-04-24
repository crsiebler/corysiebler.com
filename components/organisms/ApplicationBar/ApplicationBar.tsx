import { NavigationBar } from '@/molecules/NavigationBar';
import { AvatarSection } from './AvatarSection';
import { NavigationPane } from '@/molecules/NavigationPane';

interface ApplicationBarProps {
  title: string;
}

export function ApplicationBar({ title }: ApplicationBarProps) {
  return (
    <header className="bg-primary w-full">
      <NavigationBar title={title}>
        <AvatarSection />
      </NavigationBar>
      <NavigationPane />
    </header>
  );
}
