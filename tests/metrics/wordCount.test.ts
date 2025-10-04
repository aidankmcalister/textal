import { describe, it, expect } from 'vitest';
import { wordCount } from '../../src/metrics/wordCount';

describe('wordCount', () => {
  it('should count words', () => {
    expect(wordCount('hello world')).toBe(2);
  });

  it('should handle multiple spaces', () => {
    expect(wordCount('hello  world')).toBe(2);
  });

  it('should handle empty strings', () => {
    expect(wordCount('')).toBe(0);
  });

  it('should handle whitespace-only strings', () => {
    expect(wordCount('   ')).toBe(0);
  });

  it('should count single words', () => {
    expect(wordCount('hello')).toBe(1);
  });

  it('should handle newlines and tabs', () => {
    expect(wordCount('hello\nworld\tfoo')).toBe(3);
  });

  it('should trim leading and trailing spaces', () => {
    expect(wordCount('  hello world  ')).toBe(2);
  });
});
