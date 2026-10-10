import { describe, expect, it } from 'vitest';
import { buildTextureStyles } from './textures';

describe('buildTextureStyles', () => {
  it('returns an empty object when no texture is set', () => {
    expect(buildTextureStyles({})).toEqual({});
  });

  it('returns only the texture background for ruledType "none"', () => {
    const result = buildTextureStyles({ texture: 'paper', ruledType: 'none' });

    expect(result.backgroundImage).not.toContain('repeating-linear-gradient');
    expect(result.backgroundRepeat).toBe('repeat');
    expect(result.backgroundSize).toBe('200px 200px');
  });

  it('layers a single horizontal rule for ruledType "lines"', () => {
    const result = buildTextureStyles({ texture: 'paper', ruledType: 'lines' });

    expect(result.backgroundImage?.match(/repeating-linear-gradient/g)).toHaveLength(1);
    expect(result.backgroundRepeat).toBe('repeat, repeat');
    expect(result.backgroundSize).toBe('200px 200px, 100% 32px');
  });

  it('layers horizontal and vertical rules for ruledType "grid"', () => {
    const result = buildTextureStyles({ texture: 'paper', ruledType: 'grid' });

    expect(result.backgroundImage?.match(/repeating-linear-gradient/g)).toHaveLength(2);
    expect(result.backgroundRepeat).toBe('repeat, repeat, repeat');
    expect(result.backgroundSize).toBe('200px 200px, 100% 32px, 32px 32px');
  });

  it('uses the given ruled color in the generated gradient', () => {
    const result = buildTextureStyles({
      texture: 'paper',
      ruledType: 'lines',
      ruledColor: 'brown',
    });

    expect(result.backgroundImage).toContain('rgba(164, 144, 120, 0.35)');
  });

  it('falls back to the default line color when none is given', () => {
    const result = buildTextureStyles({ texture: 'paper', ruledType: 'lines' });

    expect(result.backgroundImage).toContain('rgba(168, 200, 216, 0.35)');
  });
});
