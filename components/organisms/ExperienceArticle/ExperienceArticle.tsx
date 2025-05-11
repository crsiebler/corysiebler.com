import { ReactNode } from 'react';
import { Accordion } from '@/atoms/Accordion';
import { Text } from '@/atoms/Text';

interface ExperienceArticleProps {
  image: ReactNode;
  title: string;
  location: string;
  roles: string[];
  technologies: string;
}

export function ExperienceArticle({
  image,
  title,
  location,
  roles,
  technologies,
}: ExperienceArticleProps) {
  return (
    <article className="flex flex-col">
      <div className="flex flex-col">
        {image}
        <Text variant="h4">{title}</Text>
        <Text className="text-tint-darkest mb-2" variant="body1">
          {location}
        </Text>
      </div>
      <Accordion title="Roles and Responsibilities:">
        <ul className="list-disc">
          {roles.map((role, idx) => (
            <Text component="li" variant="body2" key={idx}>
              {role}
            </Text>
          ))}
        </ul>
      </Accordion>
      <Accordion title="Technologies:">
        <Text variant="body2">{technologies}</Text>
      </Accordion>
    </article>
  );
}
