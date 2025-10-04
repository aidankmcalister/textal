import { describe, it, expect } from 'vitest';
import { unescapeHtml } from '../../src/clean/unescapeHtml';

describe('unescapeHtml', () => {
  it('should unescape HTML entities', () => {
    expect(unescapeHtml('&lt;div&gt;hello&lt;/div&gt;')).toBe('<div>hello</div>');
  });

  it('should unescape ampersands', () => {
    expect(unescapeHtml('a &amp; b')).toBe('a & b');
  });

  it('should unescape quotes', () => {
    expect(unescapeHtml('&quot;hello&quot;')).toBe('"hello"');
  });

  it('should unescape single quotes', () => {
    expect(unescapeHtml('it&#39;s')).toBe("it's");
  });

  it('should handle empty strings', () => {
    expect(unescapeHtml('')).toBe('');
  });

  it('should unescape multiple entities', () => {
    expect(unescapeHtml('&lt;a href=&quot;url&quot;&gt;text &amp; more&lt;/a&gt;')).toBe('<a href="url">text & more</a>');
  });
});
