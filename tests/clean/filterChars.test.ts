import { describe, it, expect } from 'vitest';
import { filterChars } from '../../src/clean/filterChars';

describe('filterChars', () => {
  it('should keep only alphabetic characters', () => {
    expect(filterChars('hello123', { alpha: true })).toBe('hello');
    expect(filterChars('abc-def', { alpha: true })).toBe('abcdef');
  });

  it('should keep only numeric characters', () => {
    expect(filterChars('hello123', { numeric: true })).toBe('123');
    expect(filterChars('price: $45.99', { numeric: true })).toBe('4599');
  });

  it('should keep alphabetic and spaces', () => {
    expect(filterChars('hello world!', { alpha: true, spaces: true })).toBe(
      'hello world'
    );
  });

  it('should keep alpha, numeric, and spaces', () => {
    expect(
      filterChars('hello, world 123!', {
        alpha: true,
        numeric: true,
        spaces: true
      })
    ).toBe('hello world 123');
  });

  it('should return original string if no options specified', () => {
    expect(filterChars('hello123!', {})).toBe('hello123!');
  });

  it('should handle empty strings', () => {
    expect(filterChars('', { alpha: true })).toBe('');
  });
});
