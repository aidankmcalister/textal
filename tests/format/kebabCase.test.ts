import { describe, it, expect } from 'vitest';
import { kebabCase } from '../../src/format/kebabCase';

describe('kebabCase', () => {
  it('should convert space-separated words to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  it('should convert capitalized words to kebab-case', () => {
    expect(kebabCase('Hello World')).toBe('hello-world');
  });

  it('should convert camelCase to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  it('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });

  it('should handle single word strings', () => {
    expect(kebabCase('hello')).toBe('hello');
  });

  it('should handle mixed delimiters', () => {
    expect(kebabCase('helloWorld_foo bar')).toBe('hello-world-foo-bar');
  });
});
