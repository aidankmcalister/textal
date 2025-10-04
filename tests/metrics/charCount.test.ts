import { describe, it, expect } from 'vitest';
import { charCount } from '../../src/metrics/charCount';

describe('charCount', () => {
  it('should count all characters including spaces', () => {
    expect(charCount('hello world')).toBe(11);
  });

  it('should exclude spaces when option is set', () => {
    expect(charCount('hello world', { excludeSpaces: true })).toBe(10);
  });

  it('should handle empty strings', () => {
    expect(charCount('')).toBe(0);
  });

  it('should count single characters', () => {
    expect(charCount('a')).toBe(1);
  });

  it('should exclude all whitespace types when option is set', () => {
    expect(charCount('hello\nworld\tfoo', { excludeSpaces: true })).toBe(13);
  });

  it('should handle strings with only spaces', () => {
    expect(charCount('   ')).toBe(3);
    expect(charCount('   ', { excludeSpaces: true })).toBe(0);
  });
});
