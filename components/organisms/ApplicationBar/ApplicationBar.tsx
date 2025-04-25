import { NavigationBar } from '@/molecules/NavigationBar';
import { NavigationPane } from '@/molecules/NavigationPane';
import { AvatarSection } from './AvatarSection';
import { NavigationSection } from './NavigationSection';

interface ApplicationBarProps {
  title: string;
}

export function ApplicationBar({ title }: ApplicationBarProps) {
  return (
    <header className="bg-primary text-white">
      <NavigationBar title={title}>
        <AvatarSection />
        <NavigationSection />
      </NavigationBar>
      <NavigationPane />
    </header>
  );
}
