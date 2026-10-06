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
    <main className="resume-page min-h-screen" id="main-content" tabIndex={-1}>
      <ResumeHeroSection />

      <div className="lg:border-line lg:container lg:mx-auto lg:max-w-7xl lg:border lg:p-4">
        <ResumeContactSection />
        <hr className="border-line my-4 border-t" />
        <ResumeDescriptionSection />
        <hr className="border-line my-4 border-t" />
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-2">
          <div className="lg:col-span-2">
            <ResumeExperienceSection />
          </div>
          <div className="lg:border-line flex flex-col gap-2 lg:col-span-1 lg:border-l">
            <ResumeSkillsSection />
            <ResumeEducationSection />
            <ResumeInterestsSection />
          </div>
        </div>

        <hr className="border-line my-4 border-t" />

        <ResumeFooterSection />
      </div>
    </main>
  );
}
