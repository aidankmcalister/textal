import { describe, it, expect } from 'vitest';
import { normalizeWhitespace } from '../../src/clean/normalizeWhitespace';

describe('normalizeWhitespace', () => {
  it('should collapse multiple spaces', () => {
    expect(normalizeWhitespace('hello   world')).toBe('hello world');
  });

  it('should collapse newlines', () => {
    expect(normalizeWhitespace('hello\n\nworld')).toBe('hello world');
  });

  it('should collapse tabs', () => {
    expect(normalizeWhitespace('hello\t\tworld')).toBe('hello world');
  });

  it('should trim leading and trailing whitespace', () => {
    expect(normalizeWhitespace('  hello world  ')).toBe('hello world');
  });

  it('should handle empty strings', () => {
    expect(normalizeWhitespace('')).toBe('');
  });

  it('should handle mixed whitespace characters', () => {
    expect(normalizeWhitespace('hello \n\t world')).toBe('hello world');
  });
});
