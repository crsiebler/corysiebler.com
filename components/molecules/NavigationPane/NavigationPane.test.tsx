import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavigationPane } from './NavigationPane';

describe('NavigationPane', () => {
  it('renders children', () => {
    const { container } = render(
      <NavigationPane>
        <div data-testid="child">Child Content</div>
      </NavigationPane>,
    );
    const child = container.querySelector('[data-testid="child"]');
    expect(child).not.toBeNull();
    expect(child?.textContent).toBe('Child Content');
  });

  it('has correct classes for layout and visibility', () => {
    const { container } = render(<NavigationPane />);
    const pane = container.firstChild as HTMLElement;
    expect(pane.classList.contains('fixed')).toBe(true);
    expect(pane.classList.contains('top-0')).toBe(true);
    expect(pane.classList.contains('h-screen')).toBe(true);
    expect(pane.classList.contains('w-70')).toBe(true);
    expect(pane.classList.contains('flex-col')).toBe(true);
    expect(pane.classList.contains('lg:flex')).toBe(true);
    expect(pane.classList.contains('hidden')).toBe(true);
  });
});
