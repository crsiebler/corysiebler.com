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
    const buttonElement = container.firstChild as HTMLElement;

    expect(buttonElement.classList.contains('bg-transparent')).toBe(true);

    rerender(<Button variant="outlined">Outlined Button</Button>);
    const outlinedButton = container.firstChild as HTMLElement;
    expect(outlinedButton.classList.contains('border')).toBe(true);

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
});
