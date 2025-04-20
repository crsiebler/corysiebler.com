import { render, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { JumpToTop } from './JumpToTop';

// Mock scrollIntoView
const scrollIntoViewMock = vi.fn();

function wrapper() {
  return render(
    <div>
      <div id="anchor" />
      <JumpToTop />
    </div>,
  );
}

beforeEach(() => {
  // Mock the scrollIntoView method globally
  Object.defineProperty(global.HTMLElement.prototype, 'scrollIntoView', {
    configurable: true,
    value: scrollIntoViewMock,
  });

  // Reset scroll position
  Object.defineProperty(document.documentElement, 'scrollTop', {
    writable: true,
    value: 0,
  });

  // Clear all mocks before each test
  vi.clearAllMocks();
});

describe('JumpToTop', () => {
  it('should not be visible initially', () => {
    const { queryByTestId } = wrapper();
    expect(queryByTestId('jump-to-top')).toBeNull();
  });

  it('should become visible when scrolled down', async () => {
    const { queryByTestId } = wrapper();

    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 301,
    });

    fireEvent.scroll(window);

    const button = await waitFor(() => queryByTestId('jump-to-top'));
    expect(button).not.toBeNull(); // Ensure the button is in the document
  });

  it('should become invisible when scrolled up', async () => {
    const { queryByTestId } = wrapper();

    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 301,
    });

    fireEvent.scroll(window);

    const button = await waitFor(() => queryByTestId('jump-to-top'));
    expect(button).not.toBeNull(); // Ensure the button is in the document

    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 299,
    });

    fireEvent.scroll(window);

    await waitFor(() => {
      expect(queryByTestId('jump-to-top')).toBeNull();
    });
  });

  it('should call scrollIntoView when clicked', async () => {
    const { queryByTestId } = wrapper();

    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 301,
    });

    fireEvent.scroll(window);

    const button = await waitFor(() => queryByTestId('jump-to-top'));
    expect(button).not.toBeNull(); // Ensure the button is in the document

    fireEvent.click(button!);

    await waitFor(() => {
      expect(scrollIntoViewMock).toHaveBeenCalled();
    });
  });
});
