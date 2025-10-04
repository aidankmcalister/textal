import { describe, it, expect } from 'vitest';
import { betweenAll } from '../../src/search/betweenAll';

describe('betweenAll', () => {
  it('should extract all text between tokens', () => {
    expect(betweenAll('foo (bar) (baz)', '(', ')')).toEqual(['bar', 'baz']);
    expect(betweenAll('hello [world] and [universe]', '[', ']')).toEqual(['world', 'universe']);
  });

  it('should return empty array if no matches', () => {
    expect(betweenAll('no match', '[', ']')).toEqual([]);
  });

  it('should extract first level only (non-nested)', () => {
    // This extracts the first match which contains the nested part
    expect(betweenAll('a (b (c) d) e', '(', ')')).toEqual(['b (c']);
  });

  it('should handle empty strings', () => {
    expect(betweenAll('', '[', ']')).toEqual([]);
  });
});
