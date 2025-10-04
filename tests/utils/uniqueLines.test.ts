import { describe, it, expect } from 'vitest';
import { uniqueLines } from '../../src/utils/uniqueLines';

describe('uniqueLines', () => {
  it('should remove duplicate lines', () => {
    expect(uniqueLines('hello\nworld\nhello')).toBe('hello\nworld');
    expect(uniqueLines('a\nb\na\nc')).toBe('a\nb\nc');
  });

  it('should preserve order of first occurrence', () => {
    expect(uniqueLines('first\nsecond\nfirst\nthird')).toBe(
      'first\nsecond\nthird'
    );
  });

  it('should handle strings without duplicates', () => {
    expect(uniqueLines('hello\nworld')).toBe('hello\nworld');
  });

  it('should handle empty strings', () => {
    expect(uniqueLines('')).toBe('');
  });
});
