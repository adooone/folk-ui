import { describe, expect, it } from 'vitest';
import { resolveRowSurface } from './row';

describe('resolveRowSurface', () => {
  it('lets fill take precedence over shade', () => {
    const withFill = resolveRowSurface('card', { fill: 'blue', shade: true });
    expect(withFill.textureConfig?.fill).toBe('blue');
    expect(withFill.textureConfig?.shade).toBe(resolveRowSurface('card').textureConfig?.shade);
  });

  it('applies shade when no fill is given', () => {
    expect(resolveRowSurface('card', { shade: true }).textureConfig?.shade).toBe(true);
  });

  it('skips surface styles when texture is false', () => {
    const result = resolveRowSurface('card', { texture: false });
    expect(result.textureFill).toBeUndefined();
    expect(result.textureConfig?.texture).toBeUndefined();
    expect(result.textureStyle).toEqual({});
  });

  it('returns no surface for a ruled row', () => {
    const result = resolveRowSurface('none');
    expect(result.textureConfig).toBeNull();
    expect(result.textureFill).toBeUndefined();
  });
});
