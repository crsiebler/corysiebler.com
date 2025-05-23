import { HomeIcon, InfoIcon, WorkIcon } from '@/atoms/icons';
import { ListItemGroup } from '@/organisms/ListItemGroup'; // Adjust the path as needed

export function NavigationSection() {
  return (
    <nav className="w-full">
      <hr className="border- my-4" />
      <ul className="flex flex-col gap-4">
        <ListItemGroup href="/" primary="Home" icon={<HomeIcon />} />
        <ListItemGroup href="resume" primary="Resume" icon={<InfoIcon />} />
        <ListItemGroup
          href="/portfolio"
          primary="Portfolio"
          icon={<WorkIcon />}
        />
      </ul>
    </nav>
  );
}
