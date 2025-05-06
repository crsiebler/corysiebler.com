import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ApplicationBar } from './ApplicationBar';

describe('ApplicationBar Component', () => {
  it('renders the application bar', () => {
    const { container } = render(<ApplicationBar title="Test Title" />);
    const appBarElement = container.firstChild as HTMLElement;

    expect(appBarElement).not.toBeNull();
  });

  describe('ApplicationBar Component', () => {
    it('renders the application bar', () => {
      const { container } = render(<ApplicationBar title="Test Title" />);
      const appBarElement = container.firstChild as HTMLElement;

      expect(appBarElement).not.toBeNull();
    });

    it('renders the avatar section', () => {
      const { container } = render(<ApplicationBar title="Test Title" />);
      const avatarSection = container.querySelector('div');

      expect(avatarSection).not.toBeNull();
    });

    it('displays the title prop in the NavigationBar', () => {
      render(<ApplicationBar title="Test Title" />);
      const titleElement = screen.getByText('Test Title');

      expect(titleElement).not.toBeNull();
    });
  });
});
