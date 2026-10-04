import { resumeSkills } from '@/constants/resumeSkills';
import { SectionHeader } from '@/molecules/SectionHeader';
import { TechnologyBadges } from '@/molecules/TechnologyBadges/TechnologyBadges';

export function ResumeSkillsSection() {
  return (
    <section className="flex flex-col gap-4 p-4" id="skills">
      <SectionHeader title="Skills" />
      <div className="grid gap-y-6">
        {resumeSkills.map(({ group, technologies }) => (
          <div key={group}>
            <h3 className="text-foreground mb-3 text-sm font-medium">
              {group}
            </h3>
            <TechnologyBadges
              technologies={technologies}
              label={`${group} skills`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
