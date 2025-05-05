import { HomeIcon, InfoIcon, WorkIcon } from '@/atoms/icons';
import { ListItemGroup } from '@/organisms/ListItemGroup'; // Adjust the path as needed

export function NavigationSection() {
  return (
    <nav className="w-full">
      <hr className="border-shade-light my-4" />
      <ul className="space-y-2 px-2">
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
