import { describe, it, expect } from 'vitest';
import { sentenceCount } from '../../src/metrics/sentenceCount';

describe('sentenceCount', () => {
  it('should count sentences', () => {
    expect(sentenceCount('Hello world.')).toBe(1);
    expect(sentenceCount('Hello! How are you?')).toBe(2);
    expect(sentenceCount('First. Second! Third?')).toBe(3);
  });

  it('should handle strings without sentence-ending punctuation', () => {
    expect(sentenceCount('hello world')).toBe(0);
  });

  it('should handle empty strings', () => {
    expect(sentenceCount('')).toBe(0);
  });
});
