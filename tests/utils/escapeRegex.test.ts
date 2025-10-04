import { describe, it, expect } from 'vitest';
import { escapeRegex } from '../../src/utils/escapeRegex';

describe('escapeRegex', () => {
  it('should escape dot characters', () => {
    expect(escapeRegex('hello.world')).toBe('hello\\.world');
  });

  it('should escape dollar sign', () => {
    expect(escapeRegex('$100')).toBe('\\$100');
  });

  it('should escape brackets', () => {
    expect(escapeRegex('[test]')).toBe('\\[test\\]');
  });

  it('should escape parentheses', () => {
    expect(escapeRegex('(hello)')).toBe('\\(hello\\)');
  });

  it('should escape asterisk and plus', () => {
    expect(escapeRegex('a*b+c')).toBe('a\\*b\\+c');
  });

  it('should escape question mark', () => {
    expect(escapeRegex('what?')).toBe('what\\?');
  });

  it('should escape caret', () => {
    expect(escapeRegex('^start')).toBe('\\^start');
  });

  it('should escape curly braces', () => {
    expect(escapeRegex('{1,3}')).toBe('\\{1,3\\}');
  });

  it('should escape pipe character', () => {
    expect(escapeRegex('a|b')).toBe('a\\|b');
  });

  it('should escape backslash', () => {
    expect(escapeRegex('path\\to\\file')).toBe('path\\\\to\\\\file');
  });

  it('should handle empty strings', () => {
    expect(escapeRegex('')).toBe('');
  });

  it('should escape multiple special characters', () => {
    expect(escapeRegex('.*+?^${}()|[]\\test')).toBe('\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\test');
  });

  it('should not escape regular alphanumeric characters', () => {
    expect(escapeRegex('hello123')).toBe('hello123');
  });
});
