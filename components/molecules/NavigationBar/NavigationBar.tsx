import { Button } from '@/atoms/Button';
import { MenuIcon } from '@/atoms/icons';

interface NavigationBarProps {
  children?: React.ReactNode;
  menuOpen: boolean;
  onClick: () => void;
  title: string;
}

export function NavigationBar({
  children,
  menuOpen,
  onClick,
  title,
}: NavigationBarProps) {
  return (
    <div className="flex w-full px-6 py-2">
      <Button
        aria-label="menu"
        color="tint-lightest"
        variant="text"
        rounded="lg"
        onClick={onClick}
      >
        <MenuIcon className="text-neutral" size={24} />
      </Button>
      {menuOpen && children}
    </div>
  );
}
