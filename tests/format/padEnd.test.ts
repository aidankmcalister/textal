import { describe, it, expect } from 'vitest';
import { padEnd } from '../../src/format/padEnd';

describe('padEnd', () => {
  it('should pad end with spaces by default', () => {
    expect(padEnd('hello', 10)).toBe('hello     ');
  });

  it('should pad end with custom character', () => {
    expect(padEnd('hello', 10, '0')).toBe('hello00000');
  });

  it('should not pad if string is longer than target length', () => {
    expect(padEnd('hello', 3)).toBe('hello');
  });

  it('should handle empty strings', () => {
    expect(padEnd('', 5)).toBe('     ');
  });

  it('should handle zero length', () => {
    expect(padEnd('hello', 0)).toBe('hello');
  });

  it('should handle exact length match', () => {
    expect(padEnd('hello', 5)).toBe('hello');
  });
});
