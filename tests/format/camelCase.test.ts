import { describe, it, expect } from 'vitest';
import { camelCase } from '../../src/format/camelCase';

describe('camelCase', () => {
  it('should convert space-separated words to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('should convert capitalized words to camelCase', () => {
    expect(camelCase('Hello World')).toBe('helloWorld');
  });

  it('should convert hyphenated words to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  it('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle single word strings', () => {
    expect(camelCase('hello')).toBe('hello');
  });

  it('should handle mixed delimiters', () => {
    expect(camelCase('hello-world_foo bar')).toBe('helloWorldFooBar');
  });
});
