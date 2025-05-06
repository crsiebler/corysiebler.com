import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkillCard } from './SkillCard';

describe('SkillCard Component', () => {
  it('renders the skill name and description', () => {
    const { container } = render(
      <SkillCard
        skillName="JavaScript"
        description="A versatile programming language."
        icons={[]}
      />,
    );
    const cardElement = container.firstChild as HTMLElement;

    expect(cardElement.textContent).toContain('JavaScript');
    expect(cardElement.textContent).toContain(
      'A versatile programming language.',
    );
  });

  it('renders the icons', () => {
    const { container } = render(
      <SkillCard
        skillName="JavaScript"
        description="A versatile programming language."
        icons={['JavaScriptIcon', 'ReactIcon']}
      />,
    );
    const icons = container.querySelectorAll('svg');

    expect(icons.length).toBe(2);
  });
});
