import { describe, it, expect } from 'vitest';
import { joinLines } from '../../src/utils/joinLines';

describe('joinLines', () => {
  it('should join lines', () => {
    expect(joinLines(['hello', 'world'])).toBe('hello\nworld');
    expect(joinLines(['line1', 'line2', 'line3'])).toBe('line1\nline2\nline3');
  });

  it('should handle single line', () => {
    expect(joinLines(['single line'])).toBe('single line');
  });

  it('should handle empty arrays', () => {
    expect(joinLines([])).toBe('');
  });
});
