import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders the button with children', () => {
    const { container } = render(<Button variant="contained">Click Me</Button>);
    const buttonElement = container.firstChild as HTMLElement;
    expect(buttonElement.tagName.toLowerCase()).toBe('button');
  });

  it('applies the correct variant styles', () => {
    const { container, rerender } = render(
      <Button variant="text">Text Button</Button>,
    );
    const textButton = container.firstChild as HTMLElement;
    // Text variant should not have a non-hover background color
    const hasNonHoverBg = textButton.className
      .split(' ')
      .some((cls) => cls.startsWith('bg-') && !cls.startsWith('hover:'));
    expect(hasNonHoverBg).toBe(false);

    rerender(<Button variant="outlined">Outlined Button</Button>);
    const outlinedButton = container.firstChild as HTMLElement;
    expect(outlinedButton.classList.contains('border')).toBe(true);
    expect(outlinedButton.classList.contains('bg-transparent')).toBe(true);

    rerender(<Button variant="contained">Contained Button</Button>);
    const containedButton = container.firstChild as HTMLElement;
    expect(containedButton.classList.contains('text-white')).toBe(true);
  });

  it('applies the correct color styles', () => {
    render(
      <Button variant="contained" color="primary">
        Primary Button
      </Button>,
    );
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement.classList.contains('bg-primary')).toBe(true);
    expect(buttonElement.classList.contains('text-white')).toBe(true);
  });

  it('applies the correct rounded styles', () => {
    render(
      <Button variant="contained" rounded="full">
        Rounded Button
      </Button>,
    );
    const buttonElement = screen.getByText('Rounded Button');
    expect(buttonElement.classList.contains('rounded-full')).toBe(true);
  });

  it('handles the onClick event', () => {
    const handleClick = vi.fn();
    const { container } = render(
      <Button variant="contained" onClick={handleClick}>
        Click Me
      </Button>,
    );
    const buttonElement = container.firstChild as HTMLElement;
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled is true', () => {
    const { container } = render(
      <Button variant="contained" disabled>
        Disabled Button
      </Button>,
    );
    const buttonElement = container.firstChild as HTMLButtonElement;
    expect(buttonElement.disabled).toBe(true);
    expect(buttonElement.classList.contains('cursor-not-allowed')).toBe(true);
    expect(buttonElement.classList.contains('opacity-50')).toBe(true);
  });

  it('applies custom class names', () => {
    render(
      <Button variant="contained" className="custom-class">
        Custom Button
      </Button>,
    );
    const buttonElement = screen.getByText('Custom Button');
    expect(buttonElement.classList.contains('custom-class')).toBe(true);
  });

  it('renders with all custom props', () => {
    render(
      <Button
        variant="outlined"
        color="secondary"
        rounded="lg"
        className="additional-class"
      >
        All Props
      </Button>,
    );
    const buttonElement = screen.getByText('All Props');
    expect(buttonElement.classList.contains('border')).toBe(true);
    expect(buttonElement.classList.contains('text-secondary')).toBe(true);
    expect(buttonElement.classList.contains('border-secondary')).toBe(true);
    expect(buttonElement.classList.contains('rounded-lg')).toBe(true);
    expect(buttonElement.classList.contains('additional-class')).toBe(true);
  });

  it('outlined button has correct hover class', () => {
    render(
      <Button variant="outlined" color="primary">
        Outlined Hover
      </Button>,
    );
    const buttonElement = screen.getByText('Outlined Hover');
    // Should have hover:brightness-95 or hover:backdrop-blur-2xl
    expect(buttonElement.className).toMatch(/hover:brightness-95/);
    expect(buttonElement.className).toMatch(/hover:backdrop-blur-2xl/);
  });

  it('contained button has correct hover class', () => {
    render(
      <Button variant="contained" color="primary">
        Contained Hover
      </Button>,
    );
    const buttonElement = screen.getByText('Contained Hover');
    // Should have hover:bg-primary/80 or hover:border-primary/80
    expect(buttonElement.className).toMatch(/hover:bg-primary\/80/);
    expect(buttonElement.className).toMatch(/hover:border-primary\/80/);
  });
});
