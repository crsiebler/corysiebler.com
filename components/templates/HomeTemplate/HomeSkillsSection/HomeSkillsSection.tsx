import { HomeSkillsGrid } from './HomeSkillsGrid';
import { HomeSkillsParagraph } from './HomeSkillsParagraph';
import { SectionHeader } from '@/molecules/SectionHeader';

export function HomeSkillsSection() {
  return (
    <section className="flex flex-col gap-2 px-4" id="skills">
      <SectionHeader title="My Skills" />
      <HomeSkillsParagraph />
      <HomeSkillsGrid />
    </section>
  );
}
