import { describe, it, expect } from 'vitest';
import { onlyAlpha } from '../../src/clean/onlyAlpha';

describe('onlyAlpha', () => {
  it('should keep only alphabetic characters', () => {
    expect(onlyAlpha('hello123')).toBe('hello');
  });

  it('should remove hyphens', () => {
    expect(onlyAlpha('abc-def')).toBe('abcdef');
  });

  it('should remove spaces and punctuation', () => {
    expect(onlyAlpha('hello world!')).toBe('helloworld');
  });

  it('should handle empty strings', () => {
    expect(onlyAlpha('')).toBe('');
  });

  it('should handle strings with no alphabetic characters', () => {
    expect(onlyAlpha('123!@#')).toBe('');
  });

  it('should preserve case', () => {
    expect(onlyAlpha('HeLLo WoRLd123')).toBe('HeLLoWoRLd');
  });
});
