import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SectionNavigation } from './SectionNavigation';

let scrollPosition = 0;
let onFrame: FrameRequestCallback = () => {};
const sectionTops = { about: 100, work: 900, expertise: 1750, contact: 2380 };

beforeEach(() => {
  scrollPosition = 0;
  Object.assign(sectionTops, {
    about: 100,
    work: 900,
    expertise: 1750,
    contact: 2380,
  });
  vi.stubGlobal('innerHeight', 1000);
  vi.spyOn(window, 'scrollY', 'get').mockImplementation(() => scrollPosition);
  vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(
    2800,
  );
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
    function (this: HTMLElement) {
      const top = sectionTops[this.id as keyof typeof sectionTops] ?? 0;
      return new DOMRect(0, top - scrollPosition, 1000, 200);
    },
  );
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    onFrame = callback;
    return 1;
  });
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function renderNavigation() {
  return render(
    <>
      <SectionNavigation />
      {Object.keys(sectionTops).map((id) => (
        <section id={id} key={id}>
          <h2>{id}</h2>
        </section>
      ))}
    </>,
  );
}

function scrollTo(position: number) {
  scrollPosition = position;
  fireEvent.scroll(window);
  act(() => onFrame(0));
}

function expectActive(name: string) {
  expect(screen.getByRole('link', { name }).getAttribute('aria-current')).toBe(
    'location',
  );
  expect(document.querySelectorAll('[aria-current="location"]')).toHaveLength(
    1,
  );
}

describe('SectionNavigation', () => {
  it('highlights a short Contact section at the page bottom and restores Expertise when scrolling up', () => {
    renderNavigation();
    expectActive('About');
    scrollTo(1700);
    expectActive('Expertise');
    scrollTo(1800);
    expectActive('Contact');
    scrollTo(1700);
    expectActive('Expertise');
  });

  it('recognizes an initial bottom position with fractional scroll rounding', () => {
    scrollPosition = 1799.5;
    renderNavigation();
    expectActive('Contact');
  });

  it('recomputes the active section when a resize exposes the page bottom', () => {
    scrollPosition = 1700;
    renderNavigation();
    expectActive('Expertise');
    vi.stubGlobal('innerHeight', 1100);
    fireEvent.resize(window);
    act(() => onFrame(0));
    expectActive('Contact');
  });

  it('preserves the normal section threshold on a page that fits the viewport', () => {
    Object.assign(sectionTops, {
      about: 100,
      work: 300,
      expertise: 600,
      contact: 800,
    });
    vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(
      1000,
    );
    renderNavigation();
    expectActive('Selected work');
  });
});
