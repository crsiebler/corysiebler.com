import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { WorkspaceAtmosphere } from './WorkspaceAtmosphere';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('WorkspaceAtmosphere', () => {
  it('does not subscribe to scroll when reduced motion is requested', () => {
    const preference = {
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    vi.stubGlobal('matchMedia', () => preference);
    const listener = vi.spyOn(window, 'addEventListener');
    const { container } = render(<WorkspaceAtmosphere />);
    expect(listener.mock.calls.some(([name]) => name === 'scroll')).toBe(false);
    expect(
      (container.firstElementChild as HTMLElement).style.getPropertyValue(
        '--scene-shift',
      ),
    ).toBe('0px');
  });

  it('bounds parallax and removes motion when the preference changes', () => {
    let onChange = () => {};
    const preference = {
      matches: false,
      addEventListener: vi.fn((_name: string, callback: () => void) => {
        onChange = callback;
      }),
      removeEventListener: vi.fn(),
    };
    vi.stubGlobal('matchMedia', () => preference);
    let onFrame: FrameRequestCallback = () => {};
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      onFrame = callback;
      return 1;
    });
    const cancel = vi.spyOn(window, 'cancelAnimationFrame');
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(5000);
    const { container, unmount } = render(<WorkspaceAtmosphere />);
    fireEvent.scroll(window);
    act(() => onFrame(0));
    const scene = container.firstElementChild as HTMLElement;
    expect(scene.style.getPropertyValue('--scene-shift')).toBe('120px');
    preference.matches = true;
    act(onChange);
    expect(scene.style.getPropertyValue('--scene-shift')).toBe('0px');
    fireEvent.scroll(window);
    expect(window.requestAnimationFrame).toHaveBeenCalledTimes(1);
    unmount();
    expect(preference.removeEventListener).toHaveBeenCalledWith(
      'change',
      onChange,
    );
    expect(cancel).toHaveBeenCalled();
  });
});
