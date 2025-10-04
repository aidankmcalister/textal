import { describe, it, expect } from 'vitest';
import { nl2br } from '../../src/style/nl2br';

describe('nl2br', () => {
  it('should convert newlines to br tags', () => {
    expect(nl2br('hello\nworld')).toBe('hello<br>world');
    expect(nl2br('line1\nline2\nline3')).toBe('line1<br>line2<br>line3');
  });

  it('should escape HTML in the text', () => {
    expect(nl2br('<script>\nalert()</script>')).toBe(
      '&lt;script&gt;<br>alert()&lt;/script&gt;'
    );
  });

  it('should handle strings without newlines', () => {
    expect(nl2br('hello world')).toBe('hello world');
  });

  it('should handle empty strings', () => {
    expect(nl2br('')).toBe('');
  });
});
