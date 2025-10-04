import { describe, it, expect } from 'vitest';
import { indexOfAll } from '../../src/search/indexOfAll';

describe('indexOfAll', () => {
  it('should find all positions of term', () => {
    expect(indexOfAll('banana', 'ana')).toEqual([1, 3]);
    expect(indexOfAll('Hello World', 'o')).toEqual([4, 7]);
  });

  it('should support case insensitive search', () => {
    expect(indexOfAll('Hello World', 'O', { caseSensitive: false })).toEqual([
      4, 7
    ]);
  });

  it('should return empty array if no matches', () => {
    expect(indexOfAll('hello', 'z')).toEqual([]);
  });

  it('should handle empty strings', () => {
    expect(indexOfAll('', 'test')).toEqual([]);
    expect(indexOfAll('test', '')).toEqual([]);
  });
});
