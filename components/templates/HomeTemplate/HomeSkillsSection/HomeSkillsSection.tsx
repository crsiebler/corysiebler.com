import { HeadshotImage } from '@/atoms/Images/HeadshotImage';
import { SectionHeader } from '@/molecules/SectionHeader';
import { HomeSkillsGrid } from './HomeSkillsGrid';
import { HomeSkillsParagraph } from './HomeSkillsParagraph';

export function HomeSkillsSection() {
  return (
    <section className="flex flex-col gap-2 px-4" id="skills">
      <div className="flex w-full items-center justify-center">
        <HeadshotImage />
      </div>
      <SectionHeader title="My Skills" />
      <HomeSkillsParagraph />
      <HomeSkillsGrid />
    </section>
  );
}
