import { describe, it, expect } from 'vitest';
import { titleCase } from '../../src/format/titleCase';

describe('titleCase', () => {
  it('should capitalize the first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  it('should handle all uppercase strings', () => {
    expect(titleCase('HELLO WORLD')).toBe('Hello World');
  });

  it('should handle hyphenated words', () => {
    expect(titleCase('hello-world')).toBe('Hello-World');
  });

  it('should handle empty strings', () => {
    expect(titleCase('')).toBe('');
  });

  it('should handle single word strings', () => {
    expect(titleCase('hello')).toBe('Hello');
  });

  it('should handle multiple spaces', () => {
    expect(titleCase('hello  world')).toBe('Hello World');
  });
});
