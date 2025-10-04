import { describe, it, expect } from 'vitest';
import { contains } from '../../src/search/contains';

describe('contains', () => {
  it('should find term in string', () => {
    expect(contains('hello world', 'world')).toBe(true);
  });

  it('should be case insensitive by default', () => {
    expect(contains('hello world', 'WORLD')).toBe(true);
  });

  it('should respect case sensitivity option', () => {
    expect(contains('hello world', 'WORLD', { caseSensitive: true })).toBe(false);
    expect(contains('hello world', 'world', { caseSensitive: true })).toBe(true);
  });

  it('should return false when term not found', () => {
    expect(contains('hello world', 'foo')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(contains('', 'test')).toBe(false);
    expect(contains('test', '')).toBe(false);
  });

  it('should find partial matches', () => {
    expect(contains('hello', 'ell')).toBe(true);
  });
});
