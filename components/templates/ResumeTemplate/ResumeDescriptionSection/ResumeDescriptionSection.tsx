import { AvatarImage } from '@/atoms/Images/AvatarImage';
import { Text } from '@/atoms/Text';

export function ResumeDescriptionSection() {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="border-primary h-32 w-32 overflow-hidden rounded-full border-2">
        <AvatarImage />
      </div>
      <Text variant="body2">
        Results-driven Full Stack Developer with 13+ years of experience
        designing, developing, and maintaining scalable web applications.
        Expertise in React, Next.js, Python, Node.js, Java, and PHP with strong
        proficiency in RESTful APIs, SQL databases, and cloud deployments.
        Skilled in containerization, CI/CD automation, and optimizing
        performance for high-traffic applications. Adept at cross-functional
        collaboration, problem-solving, and implementing best practices in
        full-stack development.
      </Text>
    </div>
  );
}
