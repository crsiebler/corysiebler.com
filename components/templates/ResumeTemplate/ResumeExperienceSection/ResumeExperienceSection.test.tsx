import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import { ResumeExperienceSection } from './ResumeExperienceSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});

describe('ResumeExperienceSection', () => {
  it('renders PNC as the first experience', () => {
    render(<ResumeExperienceSection />);

    const articles = screen.getAllByRole('article');
    expect(articles[0].textContent).toContain('PNC Bank');
    expect(articles[0].textContent).toContain('Software Engineer Principal');
    expect(articles[0].textContent).toContain('August 2026 - Present');
  });
});
