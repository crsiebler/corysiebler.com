import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NavigationBar } from '@/molecules/NavigationBar';

describe('NavigationBar', () => {
  const mockChildren = <div>Mock Children</div>;
  const mockTitle = 'Test Title';
  const mockTitleWithPipe = `${mockTitle} | Extra Info`;

  it('should render without crashing', () => {
    const { container } = render(
      <NavigationBar title={mockTitle}>{mockChildren}</NavigationBar>,
    );
    expect(container).toBeTruthy();
  });

  it('should display the title', () => {
    const { getByText } = render(
      <NavigationBar title={mockTitle}>{mockChildren}</NavigationBar>,
    );
    const titleElement = getByText(mockTitle);
    expect(titleElement).not.toBeNull();
  });

  it('should display the title without the pipe and extra info', () => {
    const { getByText } = render(
      <NavigationBar title={mockTitleWithPipe}>{mockChildren}</NavigationBar>,
    );
    const titleElement = getByText(mockTitle);
    expect(titleElement).not.toBeNull();
    expect(titleElement.textContent).toBe(mockTitle);
  });

  it('should render children when menu is clicked', () => {
    const { getByLabelText, getByText } = render(
      <NavigationBar title={mockTitle}>{mockChildren}</NavigationBar>,
    );
    const menuButton = getByLabelText('menu');
    fireEvent.click(menuButton);
    const childrenElement = getByText('Mock Children');
    expect(childrenElement).not.toBeNull();
  });
});
