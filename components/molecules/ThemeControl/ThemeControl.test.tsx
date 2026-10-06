import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeControl } from './ThemeControl';

// Layout is verified in the browser; Vite cannot load Next's PostCSS config.
vi.mock('./ThemeControl.module.css', () => ({
  default: { control: 'control', caret: 'caret' },
}));

beforeEach(() => {
  const values = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: vi.fn((key: string, value: string) => values.set(key, value)),
  });
  document.documentElement.dataset.theme = 'system';
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete document.documentElement.dataset.theme;
});

describe('ThemeControl', () => {
  it('synchronizes another tab’s preference and falls back for invalid values', () => {
    render(<ThemeControl />);
    fireEvent(
      window,
      new StorageEvent('storage', { key: 'portfolio-theme', newValue: 'dark' }),
    );
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe(
      'dark',
    );
    expect(document.documentElement.dataset.theme).toBe('dark');
    fireEvent(
      window,
      new StorageEvent('storage', {
        key: 'portfolio-theme',
        newValue: 'invalid',
      }),
    );
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe(
      'system',
    );
    expect(document.documentElement.dataset.theme).toBe('system');
  });
  it('applies and persists an explicit preference, then returns to system mode', () => {
    render(<ThemeControl />);
    const control = screen.getByRole('combobox', { name: 'Color theme' });
    fireEvent.change(control, { target: { value: 'dark' } });
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark');
    fireEvent.change(control, { target: { value: 'system' } });
    expect(document.documentElement.dataset.theme).toBe('system');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('system');
  });

  it('reflects the preference applied before hydration', () => {
    document.documentElement.dataset.theme = 'light';
    render(<ThemeControl />);
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe(
      'light',
    );
  });

  it('still changes appearance when persistent storage is unavailable', () => {
    vi.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
      throw new Error('Storage unavailable');
    });
    render(<ThemeControl />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'light' },
    });
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});
