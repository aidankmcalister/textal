import { describe, it, expect } from 'vitest';
import { trimLines } from '../../src/clean/trimLines';

describe('trimLines', () => {
  it('should trim whitespace from each line', () => {
    expect(trimLines('  hello  \n  world  ')).toBe('hello\nworld');
    expect(trimLines('  line1  \n\n  line2  ')).toBe('line1\n\nline2');
  });

  it('should preserve empty lines', () => {
    expect(trimLines('hello\n\nworld')).toBe('hello\n\nworld');
  });

  it('should handle single line', () => {
    expect(trimLines('  hello  ')).toBe('hello');
  });

  it('should handle empty strings', () => {
    expect(trimLines('')).toBe('');
  });
});
