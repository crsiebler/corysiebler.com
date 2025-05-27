import { ArizonaStateUniversityImage } from '@/atoms/Images/ArizonaStateUniversityImage';
import { Text } from '@/atoms/Text';
import { SectionHeader } from '@/molecules/SectionHeader';

export function ResumeEducationSection() {
  return (
    <section className="flex flex-col gap-4 p-4" id="education">
      <SectionHeader title="Education" />
      <div className="ml-5 flex flex-col gap-1">
        <ArizonaStateUniversityImage />
        <div>
          <Text weight="bold">Bachelor of Computer Science</Text>
          <Text variant="body2">Arizona State University</Text>
        </div>
      </div>
    </section>
  );
}
