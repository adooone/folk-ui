// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import buttonStyles from '../button/button.module.scss';
import { Tabs } from './tabs';

beforeAll(() => {
  global.ResizeObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

afterEach(cleanup);

const items = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'Two' },
];

describe('Tabs surface', () => {
  it('renders chalkboard tab buttons on a chalkboard surface', () => {
    render(<Tabs items={items} surface="chalkboard" />);
    for (const tab of screen.getAllByRole('tab')) {
      expect(tab.classList.contains(buttonStyles.chalkboard)).toBe(true);
    }
  });

  it('renders paper tab buttons by default', () => {
    render(<Tabs items={items} />);
    for (const tab of screen.getAllByRole('tab')) {
      expect(tab.classList.contains(buttonStyles.chalkboard)).toBe(false);
    }
  });
});
