// @vitest-environment jsdom
import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Checkbox } from './checkbox';
import styles from './checkbox.module.scss';

beforeAll(() => {
  global.ResizeObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

afterEach(cleanup);

describe('Checkbox size', () => {
  it('applies the small class when size="small"', () => {
    const { container } = render(<Checkbox size="small" label="Small" />);
    expect(container.querySelector(`.${styles.wrapper}`)?.classList.contains(styles.small)).toBe(
      true,
    );
  });

  it('omits the small class for the default medium size', () => {
    const { container } = render(<Checkbox label="Medium" />);
    expect(container.querySelector(`.${styles.wrapper}`)?.classList.contains(styles.small)).toBe(
      false,
    );
  });
});
