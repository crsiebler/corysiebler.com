import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { ResumeTemplate } from './ResumeTemplate';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});
afterEach(cleanup);

describe('Resume accessibility', () => {
  it('shows established skills and the curated tools directly in labeled groups', () => {
    const { container } = render(<ResumeTemplate />);
    const skills = container.querySelector('#skills')!;
    const content = within(skills as HTMLElement);
    for (const group of [
      'AI Agents',
      'Frontend',
      'Data Stores',
      'IoT Automation',
    ]) {
      expect(
        content.getByRole('heading', { name: group, level: 3 }),
      ).not.toBeNull();
    }
    for (const tool of [
      'OpenCode',
      'TypeScript',
      'Oracle',
      'Raspberry Pi',
      'Pyramid',
      'Snowflake',
      'J2EE',
      'OSGi',
      'Eclipse',
      'Kanban',
      'Scrum',
    ]) {
      expect(content.getByText(tool)).not.toBeNull();
    }
    expect(skills.querySelector('details')).toBeNull();
    expect(
      content.getByRole('list', { name: 'Frontend skills' }),
    ).not.toBeNull();
    expect(skills.querySelectorAll('svg').length).toBeGreaterThanOrEqual(41);
    expect(skills.querySelectorAll('[aria-hidden="true"] svg')).toHaveLength(
      skills.querySelectorAll('svg').length,
    );
  });
  it('keeps SVG paint definitions unique and resolves every paint reference in Skills', () => {
    const { container } = render(<ResumeTemplate />);
    const toolbox = container.querySelector('#skills')!;
    const ids = Array.from(
      toolbox.querySelectorAll('svg [id]'),
      (element) => element.id,
    );
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    const missingReferences = Array.from(
      toolbox.querySelectorAll('svg *'),
    ).flatMap((element) =>
      ['fill', 'mask', 'clip-path'].flatMap((attribute) => {
        const reference = element
          .getAttribute(attribute)
          ?.match(/^url\(#(.+)\)$/)?.[1];
        return reference && !ids.includes(reference) ? [reference] : [];
      }),
    );
    expect({ duplicates, missingReferences }).toEqual({
      duplicates: [],
      missingReferences: [],
    });
  });

  it('preserves visible contact values in accessible link names', () => {
    render(<ResumeTemplate />);
    for (const [name, href] of [
      ['(480) 319-2922', 'tel:14803192922'],
      ['cory.siebler@gmail.com', 'mailto:cory.siebler@gmail.com'],
      ['corysiebler.com', '/'],
    ]) {
      expect(screen.getByRole('link', { name }).getAttribute('href')).toBe(
        href,
      );
    }
  });

  it('identifies the X profile by its handle', () => {
    render(<ResumeTemplate />);
    expect(
      screen
        .getByRole('link', { name: '@CorySiebler on X' })
        .getAttribute('href'),
    ).toBe('https://x.com/CorySiebler');
    expect(screen.getByText('X', { exact: true })).not.toBeNull();
    expect(
      screen
        .getByRole('link', { name: '@CorySiebler on X' })
        .querySelector('[aria-hidden="true"] svg'),
    ).not.toBeNull();
  });

  it('provides accurate image alternatives and a coherent experience heading hierarchy', () => {
    render(<ResumeTemplate />);
    expect(screen.getByRole('img', { name: 'Nextiva Logo' })).not.toBeNull();
    expect(
      screen.getByRole('img', {
        name: 'Arizona State University engineering logo',
      }),
    ).not.toBeNull();
    expect(
      screen.getByRole('heading', { name: 'Work Experience', level: 2 }),
    ).not.toBeNull();
    expect(
      screen.getByRole('heading', {
        name: /Nextiva \| Software Engineer II/,
        level: 3,
      }),
    ).not.toBeNull();
  });
});
