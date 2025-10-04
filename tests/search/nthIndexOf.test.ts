import { describe, it, expect } from 'vitest';
import { nthIndexOf } from '../../src/search/nthIndexOf';

describe('nthIndexOf', () => {
  it('should find nth occurrence', () => {
    expect(nthIndexOf('banana', 'a', 1)).toBe(1);
    expect(nthIndexOf('banana', 'a', 2)).toBe(3);
    expect(nthIndexOf('banana', 'a', 3)).toBe(5);
  });

  it('should return -1 if nth occurrence not found', () => {
    expect(nthIndexOf('banana', 'a', 4)).toBe(-1);
  });

  it('should support case insensitive search', () => {
    expect(nthIndexOf('Hello World', 'O', 1, { caseSensitive: false })).toBe(4);
  });

  it('should handle invalid n', () => {
    expect(nthIndexOf('hello', 'l', 0)).toBe(-1);
    expect(nthIndexOf('hello', 'l', -1)).toBe(-1);
  });

  it('should handle empty strings', () => {
    expect(nthIndexOf('', 'test', 1)).toBe(-1);
  });
});
