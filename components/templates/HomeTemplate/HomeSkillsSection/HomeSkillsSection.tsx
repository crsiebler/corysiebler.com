import { Text } from '@/atoms/Text';
import { SectionHeader } from '@/molecules/SectionHeader';
import { HomeSkillsGrid } from './HomeSkillsGrid';

export function HomeSkillsSection() {
  return (
    <section className="flex flex-col gap-2 px-4" id="skills">
      <SectionHeader title="My Skills" />
      <Text className="text-shade" component="p" variant="body1">
        I have {new Date().getFullYear() - 2012} years professional experience
        in the software industry. From database management to front-end
        libraries, I contribute to all aspects of the software architecture. I
        enjoy discovering new technology and I am always open to exploring the
        latest trends in engineering.
      </Text>
      <HomeSkillsGrid />
    </section>
  );
}
