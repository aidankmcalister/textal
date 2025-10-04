import { describe, it, expect } from 'vitest';
import { escapeHtml } from '../../src/clean/escapeHtml';

describe('escapeHtml', () => {
  it('should escape HTML tags', () => {
    expect(escapeHtml('<div>hello</div>')).toBe('&lt;div&gt;hello&lt;/div&gt;');
  });

  it('should escape ampersands', () => {
    expect(escapeHtml('a & b')).toBe('a &amp; b');
  });

  it('should escape quotes', () => {
    expect(escapeHtml('"hello"')).toBe('&quot;hello&quot;');
  });

  it('should escape single quotes', () => {
    expect(escapeHtml("it's")).toBe('it&#39;s');
  });

  it('should handle empty strings', () => {
    expect(escapeHtml('')).toBe('');
  });

  it('should escape multiple special characters', () => {
    expect(escapeHtml('<a href="url">text & more</a>')).toBe('&lt;a href=&quot;url&quot;&gt;text &amp; more&lt;/a&gt;');
  });
});
