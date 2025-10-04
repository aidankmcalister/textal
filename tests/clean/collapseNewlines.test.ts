import { describe, it, expect } from 'vitest';
import { collapseNewlines } from '../../src/clean/collapseNewlines';

describe('collapseNewlines', () => {
  it('should collapse multiple newlines to one by default', () => {
    expect(collapseNewlines('hello\n\n\nworld')).toBe('hello\nworld');
    expect(collapseNewlines('a\n\nb\n\n\nc')).toBe('a\nb\nc');
  });

  it('should collapse to specified maximum', () => {
    expect(collapseNewlines('a\n\n\n\nb', 2)).toBe('a\n\nb');
    expect(collapseNewlines('hello\n\n\n\n\nworld', 3)).toBe('hello\n\n\nworld');
  });

  it('should handle strings with no consecutive newlines', () => {
    expect(collapseNewlines('hello\nworld')).toBe('hello\nworld');
  });

  it('should handle empty strings', () => {
    expect(collapseNewlines('')).toBe('');
  });
});
