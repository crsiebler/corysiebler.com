import { Text } from '@/atoms/Text';

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Text component="h2" className="border-line border-l-4 pl-4" variant="h4">
      {title}
    </Text>
  );
}
