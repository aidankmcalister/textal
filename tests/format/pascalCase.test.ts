import { describe, it, expect } from 'vitest';
import { pascalCase } from '../../src/format/pascalCase';

describe('pascalCase', () => {
  it('should convert to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('hello-world')).toBe('HelloWorld');
    expect(pascalCase('hello_world')).toBe('HelloWorld');
  });

  it('should handle already PascalCase strings', () => {
    expect(pascalCase('HelloWorld')).toBe('HelloWorld');
  });

  it('should handle empty strings', () => {
    expect(pascalCase('')).toBe('');
  });
});
