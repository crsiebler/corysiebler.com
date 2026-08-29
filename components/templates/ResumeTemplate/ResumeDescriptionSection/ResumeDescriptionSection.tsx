import { AvatarImage } from '@/atoms/Images/AvatarImage';
import { Text } from '@/atoms/Text';

export function ResumeDescriptionSection() {
  return (
    <section
      className="flex flex-col items-center gap-2 p-4 lg:flex-row"
      id="description"
    >
      <div className="border-primary rounded-full border-2 lg:mx-32">
        <AvatarImage />
      </div>
      <Text variant="body2">
        Principal Software Engineer and Technical Leader with 14+ years of
        experience designing, modernizing, and scaling enterprise applications.
        Deep experience with Python, TypeScript, React, Next.js, AWS, REST and
        GraphQL APIs, SQL and NoSQL databases, CI/CD, and cloud-native
        architecture. Proven ability to lead engineering teams, establish
        development standards, improve reliability and performance, and leverage
        AI-assisted and agentic workflows to improve software delivery.
      </Text>
    </section>
  );
}
