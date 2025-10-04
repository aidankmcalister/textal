import { describe, it, expect } from 'vitest';
import { snakeCase } from '../../src/format/snakeCase';

describe('snakeCase', () => {
  it('should convert space-separated words to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  it('should convert capitalized words to snake_case', () => {
    expect(snakeCase('Hello World')).toBe('hello_world');
  });

  it('should convert camelCase to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  it('should convert kebab-case to snake_case', () => {
    expect(snakeCase('hello-world')).toBe('hello_world');
  });

  it('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });

  it('should handle single word strings', () => {
    expect(snakeCase('hello')).toBe('hello');
  });

  it('should handle mixed delimiters', () => {
    expect(snakeCase('helloWorld-foo bar')).toBe('hello_world_foo_bar');
  });
});
