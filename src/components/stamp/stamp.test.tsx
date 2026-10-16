// @vitest-environment jsdom
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Stamp } from './stamp';

afterEach(cleanup);

describe('Stamp line-height', () => {
  it('sets the static stamp line-height to 1.2', () => {
    const { container } = render(<Stamp>Label</Stamp>);
    const stamp = container.firstElementChild as HTMLElement;
    expect(getComputedStyle(stamp).lineHeight).toBe('1.2');
  });

  it('keeps the same line-height on a pressable stamp', () => {
    const { container } = render(<Stamp onClick={() => {}}>Label</Stamp>);
    const stamp = container.firstElementChild as HTMLElement;
    expect(getComputedStyle(stamp).lineHeight).toBe('1.2');
  });
});
