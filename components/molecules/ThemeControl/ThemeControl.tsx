'use client';
import { useEffect, useRef } from 'react';
import styles from './ThemeControl.module.css';
import { ChevronDownIcon } from '@/atoms/icons/ChevronDownIcon';

export function ThemeControl() {
  const select = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const sync = () => {
      if (select.current) {
        select.current.value =
          document.documentElement.dataset.theme ?? 'system';
      }
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== 'portfolio-theme') return;
      const value = event.newValue;
      document.documentElement.dataset.theme =
        value === 'light' || value === 'dark' ? value : 'system';
      sync();
    };
    sync();
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <label className={styles.control}>
      <span className="sr-only">Color theme</span>
      <select
        ref={select}
        aria-label="Color theme"
        defaultValue="system"
        onChange={(event) => {
          const value = event.target.value;
          document.documentElement.dataset.theme = value;
          try {
            window.localStorage.setItem('portfolio-theme', value);
          } catch {
            // Appearance remains usable when the browser blocks storage.
          }
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <span className={styles.caret} aria-hidden="true">
        <ChevronDownIcon size={14} />
      </span>
    </label>
  );
}
