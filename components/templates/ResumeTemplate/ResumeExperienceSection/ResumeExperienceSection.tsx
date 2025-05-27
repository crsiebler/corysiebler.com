import { SectionHeader } from '@/molecules/SectionHeader';
import { AmericanExpressArticle } from './Articles/AmericanExpressArticle';
import { AngelStudiosArticle } from './Articles/AngelStudiosArticle';
import { ER2Article } from './Articles/ER2Article';
import { GeneralDynamicsArticle } from './Articles/GeneralDynamicsArticle';
import { GhostArmorArticle } from './Articles/GhostArmorArticle';
import { LockheedMartinArticle } from './Articles/LockheedMartinArticle';
import { MegaplanITArticle } from './Articles/MegaplanITArticle';
import { NextivaArticle } from './Articles/NextivaArticle';
import { OneOriginArticle } from './Articles/OneOriginArticle';

export function ResumeExperienceSection() {
  return (
    <section className="flex flex-col gap-4 p-4" id="experience">
      <SectionHeader title="Work Experience" />
      <OneOriginArticle />
      <MegaplanITArticle />
      <AngelStudiosArticle />
      <AmericanExpressArticle />
      <ER2Article />
      <NextivaArticle />
      <GeneralDynamicsArticle />
      <LockheedMartinArticle />
      <GhostArmorArticle />
    </section>
  );
}
