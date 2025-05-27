import { ResumeContactSection } from './ResumeContactSection';
import { ResumeDescriptionSection } from './ResumeDescriptionSection';
import { ResumeEducationSection } from './ResumeEducationSection';
import { ResumeExperienceSection } from './ResumeExperienceSection';
import { ResumeFooterSection } from './ResumeFooterSection';
import { ResumeHeroSection } from './ResumeHeroSection';
import { ResumeInterestsSection } from './ResumeInterestsSection';
import { ResumeSkillsSection } from './ResumeSkillsSection';

export function ResumeTemplate() {
  return (
    <main className="my-4 min-h-screen bg-white">
      <ResumeHeroSection />
      <hr className="border-tint-light my-4 border-t" />

      <div className="lg:border-tint-lightest lg:container lg:mx-auto lg:max-w-7xl lg:border lg:p-4 lg:shadow-2xl">
        <ResumeContactSection />
        <hr className="border-tint-light my-4 border-t" />
        <ResumeDescriptionSection />
        <hr className="border-tint-light my-4 border-t" />
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-2">
          <div className="lg:col-span-2">
            <ResumeExperienceSection />
          </div>
          <div className="lg:border-tint-light flex flex-col gap-2 lg:col-span-1 lg:border-l">
            <ResumeSkillsSection />
            <ResumeEducationSection />
            <ResumeInterestsSection />
          </div>
        </div>

        <hr className="border-tint-light my-4 border-t" />

        <ResumeFooterSection />
      </div>
    </main>
  );
}
