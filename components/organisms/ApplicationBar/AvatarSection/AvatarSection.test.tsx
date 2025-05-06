import { render } from '@testing-library/react';
import { describe, it, expect, beforeAll } from 'vitest';
import { AvatarSection } from './AvatarSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});

describe('AvatarSection Component', () => {
  it('renders the name', () => {
    const { container } = render(<AvatarSection />);
    const nameElement = container.querySelector('h6');

    expect(nameElement?.textContent).toBe('Cory Siebler');
  });

  it('renders the avatar image', () => {
    const { container } = render(<AvatarSection />);
    const avatarElement = container.querySelector('img');

    expect(avatarElement).not.toBeNull();
  });

  it('renders the description', () => {
    const { container } = render(<AvatarSection />);
    const descriptionElement = container.querySelector('p');

    expect(descriptionElement?.textContent).toContain(
      'Hi! My name is Cory Siebler. Welcome to my personal website!',
    );
  });

  it('renders the link items', () => {
    const { container } = render(<AvatarSection />);
    const links = container.querySelectorAll('a');

    expect(links.length).toBeGreaterThan(0);
  });
});
