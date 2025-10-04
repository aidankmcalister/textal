import { describe, it, expect } from 'vitest';
import { removePunctuation } from '../../src/clean/removePunctuation';

describe('removePunctuation', () => {
  it('should remove commas and exclamation marks', () => {
    expect(removePunctuation('hello, world!')).toBe('hello world');
  });

  it('should remove question marks', () => {
    expect(removePunctuation('what?')).toBe('what');
  });

  it('should remove hyphens', () => {
    expect(removePunctuation('a-b-c')).toBe('abc');
  });

  it('should handle empty strings', () => {
    expect(removePunctuation('')).toBe('');
  });

  it('should preserve alphanumeric and spaces', () => {
    expect(removePunctuation('hello123 world456')).toBe('hello123 world456');
  });

  it('should remove periods and parentheses', () => {
    expect(removePunctuation('hello (world).')).toBe('hello world');
  });
});
