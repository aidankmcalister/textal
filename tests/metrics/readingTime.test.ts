import { describe, it, expect } from 'vitest';
import { readingTime } from '../../src/metrics/readingTime';

describe('readingTime', () => {
  it('should calculate reading time for short text', () => {
    const result = readingTime('hello world');
    expect(result.words).toBe(2);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(1);
  });

  it('should calculate reading time for 100 words', () => {
    const text = 'hello '.repeat(100).trim();
    const result = readingTime(text);
    expect(result.words).toBe(100);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(30);
  });

  it('should calculate reading time for 200 words', () => {
    const text = 'hello '.repeat(200).trim();
    const result = readingTime(text);
    expect(result.words).toBe(200);
    expect(result.minutes).toBe(1);
    expect(result.seconds).toBe(0);
  });

  it('should handle empty strings', () => {
    const result = readingTime('');
    expect(result).toEqual({ minutes: 0, seconds: 0, words: 0 });
  });

  it('should handle custom WPM', () => {
    const text = 'hello '.repeat(100).trim();
    const result = readingTime(text, 100);
    expect(result.words).toBe(100);
    expect(result.minutes).toBe(1);
    expect(result.seconds).toBe(0);
  });

  it('should handle whitespace-only strings', () => {
    const result = readingTime('   ');
    expect(result).toEqual({ minutes: 0, seconds: 0, words: 0 });
  });

  it('should round seconds properly', () => {
    const text = 'hello '.repeat(150).trim();
    const result = readingTime(text);
    expect(result.words).toBe(150);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(45);
  });
});
