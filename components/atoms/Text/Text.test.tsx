import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders with default props', () => {
    const { container } = render(<Text>Default Text</Text>);
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.tagName.toLowerCase()).toBe('p');
    expect(textElement.classList.contains('text-base')).toBe(true);
    expect(textElement.classList.contains('italic')).toBe(false);
    expect(textElement.classList.contains('uppercase')).toBe(false);
  });

  it('renders with custom component', () => {
    const { container } = render(<Text component="h1">Heading</Text>);
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.tagName.toLowerCase()).toBe('h1');
    expect(textElement.classList.contains('text-base')).toBe(true); // default variant
  });

  it('renders with custom variant', () => {
    const { container } = render(<Text variant="h2">Heading 2</Text>);
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.classList.contains('text-4xl')).toBe(true);
    expect(textElement.classList.contains('md:text-5xl')).toBe(true);
  });

  it('renders with custom color', () => {
    const { container } = render(<Text color="red">Colored Text</Text>);
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.classList.contains('text-red')).toBe(true);
  });

  it('renders with custom weight', () => {
    const { container } = render(<Text weight="bold">Bold Text</Text>);
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.classList.contains('font-bold')).toBe(true);
  });

  it('renders with uppercase text', () => {
    const { container } = render(<Text uppercase>Uppercase Text</Text>);
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.classList.contains('uppercase')).toBe(true);
  });

  it('renders with additional className', () => {
    const { container } = render(
      <Text className="custom-class">Custom Class</Text>,
    );
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.classList.contains('custom-class')).toBe(true);
  });

  it('renders with all custom props', () => {
    const { container } = render(
      <Text
        component="h3"
        variant="h3"
        color="blue"
        weight="semibold"
        uppercase
        className="additional-class"
      >
        All Props
      </Text>,
    );
    const textElement = container.firstChild as HTMLElement;

    expect(textElement.tagName.toLowerCase()).toBe('h3');
    expect(textElement.classList.contains('text-3xl')).toBe(true);
    expect(textElement.classList.contains('md:text-4xl')).toBe(true);
    expect(textElement.classList.contains('text-blue')).toBe(true);
    expect(textElement.classList.contains('font-semibold')).toBe(true);
    expect(textElement.classList.contains('uppercase')).toBe(true);
    expect(textElement.classList.contains('additional-class')).toBe(true);
  });
});
