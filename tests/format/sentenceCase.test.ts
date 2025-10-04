import { describe, it, expect } from 'vitest';
import { sentenceCase } from '../../src/format/sentenceCase';

describe('sentenceCase', () => {
  it('should capitalize first letter', () => {
    expect(sentenceCase('hello world')).toBe('Hello world');
    expect(sentenceCase('HELLO WORLD')).toBe('Hello world');
  });

  it('should capitalize after sentence-ending punctuation', () => {
    expect(sentenceCase('hello. world')).toBe('Hello. World');
    expect(sentenceCase('hello! world? yes')).toBe('Hello! World? Yes');
  });

  it('should handle empty strings', () => {
    expect(sentenceCase('')).toBe('');
  });
});
