import { describe, it, expect } from 'vitest';
import { noCase } from '../../src/format/noCase';

describe('noCase', () => {
  it('should convert to space-delimited lowercase', () => {
    expect(noCase('helloWorld')).toBe('hello world');
    expect(noCase('hello-world')).toBe('hello world');
    expect(noCase('HELLO_WORLD')).toBe('hello world');
  });

  it('should handle already lowercase strings', () => {
    expect(noCase('hello world')).toBe('hello world');
  });

  it('should handle empty strings', () => {
    expect(noCase('')).toBe('');
  });
});
