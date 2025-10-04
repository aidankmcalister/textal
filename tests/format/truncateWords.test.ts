import { describe, it, expect } from 'vitest';
import { truncateWords } from '../../src/format/truncateWords';

describe('truncateWords', () => {
  it('should truncate to specified word count', () => {
    expect(truncateWords('hello world foo bar', 2)).toBe('hello world…');
    expect(truncateWords('one two three four five', 3)).toBe('one two three…');
  });

  it('should not truncate if word count is within limit', () => {
    expect(truncateWords('hello world', 5)).toBe('hello world');
    expect(truncateWords('hello world', 2)).toBe('hello world');
  });

  it('should support custom ending', () => {
    expect(truncateWords('hello world foo', 2, '...')).toBe('hello world...');
  });

  it('should handle empty strings', () => {
    expect(truncateWords('', 5)).toBe('');
  });
});
