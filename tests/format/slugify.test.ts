import { describe, it, expect } from 'vitest';
import { slugify } from '../../src/format/slugify';

describe('slugify', () => {
  it('should create URL-friendly slugs', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Hello World!')).toBe('hello-world');
  });

  it('should convert accented characters', () => {
    expect(slugify('Café Bar')).toBe('cafe-bar');
  });

  it('should support custom separator', () => {
    expect(slugify('Hello World', { separator: '_' })).toBe('hello_world');
  });

  it('should support preserving case', () => {
    expect(slugify('Hello World', { lower: false })).toBe('Hello-World');
  });

  it('should handle empty strings', () => {
    expect(slugify('')).toBe('');
  });
});
