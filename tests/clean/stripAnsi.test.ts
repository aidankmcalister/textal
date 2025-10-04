import { describe, it, expect } from 'vitest';
import { stripAnsi } from '../../src/clean/stripAnsi';

describe('stripAnsi', () => {
  it('should remove ANSI color codes', () => {
    expect(stripAnsi('\u001b[31mRed text\u001b[0m')).toBe('Red text');
    expect(stripAnsi('\u001b[32mGreen\u001b[0m text')).toBe('Green text');
  });

  it('should remove ANSI style codes', () => {
    expect(stripAnsi('\u001b[1mBold\u001b[0m text')).toBe('Bold text');
    expect(stripAnsi('\u001b[4mUnderline\u001b[0m')).toBe('Underline');
  });

  it('should handle strings without ANSI codes', () => {
    expect(stripAnsi('plain text')).toBe('plain text');
  });

  it('should handle empty strings', () => {
    expect(stripAnsi('')).toBe('');
  });
});
