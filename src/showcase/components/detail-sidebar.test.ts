import { describe, expect, it } from 'vitest';
import { toPascal } from './detail-sidebar';

describe('toPascal', () => {
  it('capitalizes each hyphen-separated segment', () => {
    expect(toPascal('setting-row')).toBe('SettingRow');
  });

  it('leaves a single segment with no hyphens capitalized', () => {
    expect(toPascal('button')).toBe('Button');
  });

  it('is idempotent on already-capitalized segments', () => {
    expect(toPascal('Setting-Row')).toBe('SettingRow');
  });

  it('returns an empty string for an empty id', () => {
    expect(toPascal('')).toBe('');
  });

  it('collapses consecutive hyphens without crashing', () => {
    expect(toPascal('setting--row')).toBe('SettingRow');
  });
});
