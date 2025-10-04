import { describe, it, expect } from 'vitest';
import { constantCase } from '../../src/format/constantCase';

describe('constantCase', () => {
  it('should convert to CONSTANT_CASE', () => {
    expect(constantCase('hello world')).toBe('HELLO_WORLD');
    expect(constantCase('helloWorld')).toBe('HELLO_WORLD');
    expect(constantCase('hello-world')).toBe('HELLO_WORLD');
  });

  it('should handle already uppercase strings', () => {
    expect(constantCase('HELLO_WORLD')).toBe('HELLO_WORLD');
  });

  it('should handle empty strings', () => {
    expect(constantCase('')).toBe('');
  });
});
