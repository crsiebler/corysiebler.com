import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ListItemGroup } from './ListItemGroup';

const toggleDrawer = vi.fn();

vi.mock('@/lib/hooks/useDisplay', () => ({
  useDisplay: () => ({ toggleDrawer }),
}));

describe('ListItemGroup Component', () => {
  it('renders the icon', () => {
    const { container } = render(
      <ListItemGroup
        href="/test"
        primary="Test Item"
        icon={<span>Icon</span>}
      />,
    );
    const iconElement = container.querySelector('span');

    expect(iconElement?.textContent).toBe('Icon');
  });

  it('renders the primary text', () => {
    const { container } = render(
      <ListItemGroup
        href="/test"
        primary="Test Item"
        icon={<span>Icon</span>}
      />,
    );
    const textElement = container.querySelector('span:nth-of-type(2)');

    expect(textElement?.textContent).toBe('Test Item');
  });

  it('calls toggleDrawer on click', () => {
    const { container } = render(
      <ListItemGroup
        href="/test"
        primary="Test Item"
        icon={<span>Icon</span>}
      />,
    );
    const linkElement = container.querySelector('button');
    fireEvent.click(linkElement!);

    expect(toggleDrawer).toHaveBeenCalledTimes(1);
  });
});
