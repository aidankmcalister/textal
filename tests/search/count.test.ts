import { describe, it, expect } from 'vitest';
import { count } from '../../src/search/count';

describe('count', () => {
  it('should count multiple occurrences', () => {
    expect(count('hello hello world', 'hello')).toBe(2);
  });

  it('should be case insensitive by default', () => {
    expect(count('hello HELLO world', 'hello')).toBe(2);
  });

  it('should respect case sensitivity option', () => {
    expect(count('hello HELLO world', 'hello', { caseSensitive: true })).toBe(
      1
    );
  });

  it('should return zero when term not found', () => {
    expect(count('hello world', 'foo')).toBe(0);
  });

  it('should handle empty strings', () => {
    expect(count('', 'test')).toBe(0);
    expect(count('test', '')).toBe(0);
  });

  it('should count overlapping matches', () => {
    expect(count('aaa', 'aa')).toBe(2);
  });

  it('should handle special regex characters', () => {
    expect(count('a.b.c', '.')).toBe(2);
  });
});
