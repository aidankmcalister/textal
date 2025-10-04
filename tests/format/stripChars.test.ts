import { describe, it, expect } from 'vitest';
import { stripChars } from '../../src/format/stripChars';

describe('stripChars', () => {
  it('should strip whitespace by default', () => {
    expect(stripChars('  hello world  ')).toBe('helloworld');
  });

  it('should strip custom characters', () => {
    expect(stripChars('hello-world-', '-')).toBe('helloworld');
  });

  it('should strip multiple custom characters', () => {
    expect(stripChars('a1b2c3', '123')).toBe('abc');
  });

  it('should handle empty strings', () => {
    expect(stripChars('')).toBe('');
  });

  it('should handle tabs and newlines', () => {
    expect(stripChars('hello\tworld\n')).toBe('helloworld');
  });

  it('should handle no matching characters', () => {
    expect(stripChars('hello', '123')).toBe('hello');
  });

  it('should handle special regex characters', () => {
    expect(stripChars('a.b*c+d', '.*+')).toBe('abcd');
  });
});
