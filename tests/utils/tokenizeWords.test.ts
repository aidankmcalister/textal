import { describe, it, expect } from 'vitest';
import { tokenizeWords } from '../../src/utils/tokenizeWords';

describe('tokenizeWords', () => {
  it('should tokenize words', () => {
    expect(tokenizeWords('hello world')).toEqual(['hello', 'world']);
    expect(tokenizeWords('hello-world foo_bar')).toEqual([
      'hello',
      'world',
      'foo',
      'bar'
    ]);
  });

  it('should handle punctuation', () => {
    expect(tokenizeWords('hello, world!')).toEqual(['hello', 'world']);
  });

  it('should handle empty strings', () => {
    expect(tokenizeWords('')).toEqual([]);
  });
});
