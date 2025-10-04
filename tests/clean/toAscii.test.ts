import { describe, it, expect } from 'vitest';
import { toAscii } from '../../src/clean/toAscii';

describe('toAscii', () => {
  it('should remove diacritics from accented characters', () => {
    expect(toAscii('café')).toBe('cafe');
  });

  it('should handle characters with umlauts', () => {
    expect(toAscii('naïve')).toBe('naive');
  });

  it('should handle German characters', () => {
    expect(toAscii('Zürich')).toBe('Zurich');
  });

  it('should handle empty strings', () => {
    expect(toAscii('')).toBe('');
  });

  it('should not modify plain ASCII', () => {
    expect(toAscii('hello world')).toBe('hello world');
  });

  it('should handle multiple accented characters', () => {
    expect(toAscii('Crème brûlée')).toBe('Creme brulee');
  });
});
