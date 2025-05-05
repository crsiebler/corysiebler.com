import React from 'react';
import { skills } from '@/constants/skills';
import { SkillCard } from '@/molecules/SkillCard/SkillCard';

export function HomeSkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([skillName, { description, icons }]) => (
        <SkillCard
          key={skillName}
          skillName={skillName}
          description={description}
          icons={icons}
        />
      ))}
    </div>
  );
}
