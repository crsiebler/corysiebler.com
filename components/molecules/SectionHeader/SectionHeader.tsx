import { Text } from '@/atoms/Text';

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Text
      component="h3"
      className="border-l-4 border-indigo-600 pl-4"
      variant="h4"
    >
      {title}
    </Text>
  );
}
