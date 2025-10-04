import { describe, it, expect } from 'vitest';
import { padStart } from '../../src/format/padStart';

describe('padStart', () => {
  it('should pad start with spaces by default', () => {
    expect(padStart('hello', 10)).toBe('     hello');
  });

  it('should pad start with custom character', () => {
    expect(padStart('hello', 10, '0')).toBe('00000hello');
  });

  it('should not pad if string is longer than target length', () => {
    expect(padStart('hello', 3)).toBe('hello');
  });

  it('should handle empty strings', () => {
    expect(padStart('', 5)).toBe('     ');
  });

  it('should handle zero length', () => {
    expect(padStart('hello', 0)).toBe('hello');
  });

  it('should handle exact length match', () => {
    expect(padStart('hello', 5)).toBe('hello');
  });
});
