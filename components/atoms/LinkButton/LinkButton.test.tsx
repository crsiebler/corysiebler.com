import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LinkButton } from './LinkButton';

describe('LinkButton Component', () => {
  it('renders the LinkButton with children', () => {
    const { container } = render(
      <LinkButton href="/test" variant="contained">
        Click Me
      </LinkButton>,
    );
    const linkElement = container.querySelector('a');
    const buttonElement = container.querySelector('button');

    expect(linkElement).not.toBeNull();
    expect(linkElement?.getAttribute('href')).toBe('/test');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement?.textContent).toBe('Click Me');
  });

  it('applies the correct target attribute', () => {
    const { container } = render(
      <LinkButton href="/test" target="_blank" variant="contained">
        Open in New Tab
      </LinkButton>,
    );
    const linkElement = container.querySelector('a');

    expect(linkElement?.getAttribute('target')).toBe('_blank');
  });

  it('applies the className to the Link element', () => {
    const { container } = render(
      <LinkButton href="/test" className="link-class" variant="contained">
        Link Button
      </LinkButton>,
    );
    const linkElement = container.querySelector('a');

    expect(linkElement?.classList.contains('link-class')).toBe(true);
  });

  it('applies the buttonClasses to the Button element', () => {
    const { container } = render(
      <LinkButton href="/test" buttonClasses="button-class" variant="contained">
        Button Classes
      </LinkButton>,
    );
    const buttonElement = container.querySelector('button');

    expect(buttonElement?.classList.contains('button-class')).toBe(true);
  });

  it('passes props to the Button component', () => {
    const { container } = render(
      <LinkButton href="/test" color="primary" variant="contained">
        Styled Button
      </LinkButton>,
    );
    const buttonElement = container.querySelector('button');

    expect(buttonElement?.classList.contains('bg-primary')).toBe(true);
  });
});
