import { describe, it, expect } from 'vitest';
import { startsWith } from '../../src/search/startsWith';

describe('startsWith', () => {
  it('should check if string starts with term (case sensitive)', () => {
    expect(startsWith('Hello World', 'Hello')).toBe(true);
    expect(startsWith('Hello World', 'hello')).toBe(false);
  });

  it('should support case insensitive search', () => {
    expect(startsWith('Hello World', 'hello', { caseSensitive: false })).toBe(true);
    expect(startsWith('Hello World', 'HELLO', { caseSensitive: false })).toBe(true);
  });

  it('should return false for non-matching prefix', () => {
    expect(startsWith('Hello World', 'World')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(startsWith('', 'test')).toBe(false);
    expect(startsWith('test', '')).toBe(false);
  });
});
