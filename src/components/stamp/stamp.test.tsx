// @vitest-environment jsdom
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Stamp } from './stamp';

afterEach(cleanup);

function lineHeightRatio(element: HTMLElement) {
  const { lineHeight, fontSize } = getComputedStyle(element);
  return Number.parseFloat(lineHeight) / Number.parseFloat(fontSize);
}

describe('Stamp line-height', () => {
  it('sets the static stamp line-height to 1.2', () => {
    const { container } = render(<Stamp>Label</Stamp>);
    const stamp = container.firstElementChild as HTMLElement;
    expect(lineHeightRatio(stamp)).toBeCloseTo(1.2);
  });

  it('keeps the same line-height on a pressable stamp', () => {
    const { container } = render(<Stamp onClick={() => {}}>Label</Stamp>);
    const stamp = container.firstElementChild as HTMLElement;
    expect(lineHeightRatio(stamp)).toBeCloseTo(1.2);
  });
});
