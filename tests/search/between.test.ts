import { describe, it, expect } from 'vitest';
import { between } from '../../src/search/between';

describe('between', () => {
  it('should extract text between tokens', () => {
    expect(between('hello [world]', '[', ']')).toBe('world');
  });

  it('should return first match only', () => {
    expect(between('foo (bar) (baz)', '(', ')')).toBe('bar');
  });

  it('should return empty string when no match', () => {
    expect(between('no match', '[', ']')).toBe('');
  });

  it('should handle empty strings', () => {
    expect(between('', '[', ']')).toBe('');
  });

  it('should handle multi-character tokens', () => {
    expect(between('start<<content>>end', '<<', '>>')).toBe('content');
  });

  it('should return empty string when end token not found', () => {
    expect(between('hello [world', '[', ']')).toBe('');
  });

  it('should return empty string when start token not found', () => {
    expect(between('hello world]', '[', ']')).toBe('');
  });

  it('should handle nested tokens', () => {
    expect(between('a [b [c] d] e', '[', ']')).toBe('b [c');
  });
});
