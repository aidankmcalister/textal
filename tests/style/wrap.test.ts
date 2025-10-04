import { describe, it, expect } from 'vitest';
import { wrap } from '../../src/style/wrap';

describe('wrap', () => {
  it('should wrap text in default span tag', () => {
    expect(wrap('hello')).toBe('<span>hello</span>');
  });

  it('should wrap text in custom tag', () => {
    expect(wrap('hello', 'div')).toBe('<div>hello</div>');
  });

  it('should add class name', () => {
    expect(wrap('hello', 'span', 'text-bold')).toBe(
      '<span class="text-bold">hello</span>'
    );
  });

  it('should escape HTML entities', () => {
    expect(wrap('<script>alert()</script>', 'p')).toBe(
      '<p>&lt;script&gt;alert()&lt;/script&gt;</p>'
    );
  });

  it('should handle empty strings', () => {
    expect(wrap('')).toBe('');
  });

  it('should escape ampersands', () => {
    expect(wrap('a & b', 'span')).toBe('<span>a &amp; b</span>');
  });

  it('should escape quotes', () => {
    expect(wrap('"hello"', 'span')).toBe('<span>&quot;hello&quot;</span>');
  });
});
