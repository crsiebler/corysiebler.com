interface NavigationPaneProps {
  children?: React.ReactNode;
}

export function NavigationPane({ children }: NavigationPaneProps) {
  return (
    <div className="bg-primary fixed top-0 hidden h-screen w-70 flex-col lg:flex">
      {children}
    </div>
  );
}
