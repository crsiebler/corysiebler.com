import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import { ResumeExperienceSection } from './ResumeExperienceSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});

describe('ResumeExperienceSection', () => {
  it('renders Phi Technology Solutions as the first experience', () => {
    render(<ResumeExperienceSection />);

    const articles = screen.getAllByRole('article');
    expect(articles[0].textContent).toContain('Phi Technology Solutions, LLC');
    expect(articles[0].textContent).toContain('Owner');
    expect(
      screen
        .getByRole('link', { name: /Phi Technology Solutions, LLC/i })
        .getAttribute('href'),
    ).toBe('https://phitechsolutions.com/');
  });
});
