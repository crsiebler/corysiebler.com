import { act } from '@testing-library/react';
import { hydrateRoot, type Root } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { expect, it, vi } from 'vitest';
import { CopyrightYear } from './CopyrightYear';

it('refreshes a previous build year after hydration without a mismatch', async () => {
  vi.useFakeTimers({ toFake: ['Date'] });
  const container = document.createElement('div');
  const onRecoverableError = vi.fn();
  let root: Root | undefined;

  try {
    vi.setSystemTime(new Date('2026-12-31T12:00:00Z'));
    container.innerHTML = renderToString(<CopyrightYear initialYear={2026} />);
    expect(container.textContent).toBe('2026');

    vi.setSystemTime(new Date('2027-01-01T12:00:00Z'));
    await act(async () => {
      root = hydrateRoot(container, <CopyrightYear initialYear={2026} />, {
        onRecoverableError,
      });
    });

    expect(container.textContent).toBe('2027');
    expect(onRecoverableError).not.toHaveBeenCalled();
  } finally {
    await act(async () => root?.unmount());
    vi.useRealTimers();
  }
});
