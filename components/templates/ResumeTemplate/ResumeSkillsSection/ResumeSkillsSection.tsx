import { Text } from '@/atoms/Text';
import { SectionHeader } from '@/molecules/SectionHeader';

function SkillListItem({
  skill,
  frameworks,
}: {
  skill: string;
  frameworks: string;
}) {
  return (
    <li className="ml-5">
      <Text variant="body2">{skill}</Text>
      <Text className="text-tint-darkest" variant="body2" weight="light">
        {frameworks}
      </Text>
    </li>
  );
}

export function ResumeSkillsSection() {
  return (
    <section className="flex flex-col gap-4 p-4" id="skills">
      <SectionHeader title="Skills" />
      <ul className="list-none space-y-4">
        <SkillListItem
          skill="JavaScript"
          frameworks="React, Next.js, Node.js"
        />
        <SkillListItem skill="Python" frameworks="Pyramid, Django, Flask" />
        <SkillListItem skill="PHP" frameworks="Symfony" />
        <SkillListItem skill="Java" frameworks="J2EE, OSGi, Spring" />
        <SkillListItem skill="Web" frameworks="HTML5, CSS3, Sass" />
        <SkillListItem
          skill="Databases"
          frameworks="Oracle, Snowflake, MySQL, PostgreSQL"
        />
        <SkillListItem skill="Styling" frameworks="Tailwind, Material-UI" />
        <SkillListItem skill="Cloud" frameworks="Vercel, AWS, Heroku" />
        <SkillListItem
          skill="DevOps"
          frameworks="Docker, Kubernetes, Jenkins"
        />
        <SkillListItem skill="IDEs" frameworks="VS Code, JetBrains, Eclipse" />
        <SkillListItem skill="Agile" frameworks="Kanban, Scrum" />
        <SkillListItem
          skill="Tools"
          frameworks="Redis, Nginx, RabbitMQ, Jira, Bitbucket, GitHub"
        />
        <SkillListItem skill="Other" frameworks="GraphQL, Webpack, Node.js" />
      </ul>
    </section>
  );
}
