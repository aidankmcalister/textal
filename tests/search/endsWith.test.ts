import { describe, it, expect } from 'vitest';
import { endsWith } from '../../src/search/endsWith';

describe('endsWith', () => {
  it('should check if string ends with term (case sensitive)', () => {
    expect(endsWith('Hello World', 'World')).toBe(true);
    expect(endsWith('Hello World', 'world')).toBe(false);
  });

  it('should support case insensitive search', () => {
    expect(endsWith('Hello World', 'world', { caseSensitive: false })).toBe(
      true
    );
    expect(endsWith('Hello World', 'WORLD', { caseSensitive: false })).toBe(
      true
    );
  });

  it('should return false for non-matching suffix', () => {
    expect(endsWith('Hello World', 'Hello')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(endsWith('', 'test')).toBe(false);
    expect(endsWith('test', '')).toBe(false);
  });
});
