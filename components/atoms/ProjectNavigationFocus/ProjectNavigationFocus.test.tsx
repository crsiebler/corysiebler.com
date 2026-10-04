import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProjectNavigationFocus } from './ProjectNavigationFocus';

let onFrame: FrameRequestCallback;

beforeEach(() => {
  onFrame = () => {};
  window.history.replaceState(null, '', '/portfolio/sgss#top');
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    onFrame = callback;
    return 1;
  });
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
  vi.spyOn(window, 'scrollY', 'get').mockReturnValue(4);
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  window.history.replaceState(null, '', '/');
  vi.restoreAllMocks();
});

function renderHeading() {
  return render(
    <>
      <h1 id="project-title" tabIndex={-1}>
        Connecting space to Earth.
      </h1>
      <ProjectNavigationFocus />
    </>,
  );
}

describe('ProjectNavigationFocus', () => {
  it('focuses the destination heading without moving the viewport after next-project navigation', () => {
    renderHeading();
    const heading = screen.getByRole('heading', { level: 1 });
    const focus = vi.spyOn(heading, 'focus');
    act(() => onFrame(0));
    expect(document.activeElement).toBe(heading);
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'instant',
    });
  });

  it('leaves focus alone on ordinary page loads', () => {
    window.history.replaceState(null, '', '/portfolio/sgss');
    renderHeading();
    expect(document.activeElement).toBe(document.body);
    expect(window.requestAnimationFrame).not.toHaveBeenCalled();
  });

  it('cancels pending focus when leaving the project before the frame runs', () => {
    const { unmount } = renderHeading();
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
  });
});
