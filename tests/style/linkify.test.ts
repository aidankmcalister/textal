import { describe, it, expect } from 'vitest';
import { linkify } from '../../src/style/linkify';

describe('linkify', () => {
  it('should linkify https URLs', () => {
    expect(linkify('Visit https://example.com')).toBe(
      'Visit <a href="https://example.com">https://example.com</a>'
    );
  });

  it('should linkify http URLs', () => {
    expect(linkify('Visit http://example.com')).toBe(
      'Visit <a href="http://example.com">http://example.com</a>'
    );
  });

  it('should linkify www URLs with https prefix', () => {
    expect(linkify('Check www.example.com')).toBe(
      'Check <a href="https://www.example.com">www.example.com</a>'
    );
  });

  it('should add target attribute', () => {
    expect(linkify('Visit https://example.com', { target: '_blank' })).toBe(
      'Visit <a href="https://example.com" target="_blank">https://example.com</a>'
    );
  });

  it('should add rel attribute', () => {
    expect(linkify('Visit https://example.com', { rel: 'noopener' })).toBe(
      'Visit <a href="https://example.com" rel="noopener">https://example.com</a>'
    );
  });

  it('should add class attribute', () => {
    expect(linkify('Visit https://example.com', { className: 'link' })).toBe(
      'Visit <a href="https://example.com" class="link">https://example.com</a>'
    );
  });

  it('should combine all attributes', () => {
    expect(
      linkify('Visit https://example.com', {
        target: '_blank',
        rel: 'noopener',
        className: 'link'
      })
    ).toBe(
      'Visit <a href="https://example.com" target="_blank" rel="noopener" class="link">https://example.com</a>'
    );
  });

  it('should linkify multiple URLs', () => {
    expect(linkify('Visit https://example.com and www.test.com')).toBe(
      'Visit <a href="https://example.com">https://example.com</a> and <a href="https://www.test.com">www.test.com</a>'
    );
  });

  it('should escape HTML in non-URL text', () => {
    expect(linkify('<div>https://example.com</div>')).toBe(
      '&lt;div&gt;<a href="https://example.com">https://example.com</a>&lt;/div&gt;'
    );
  });

  it('should handle empty strings', () => {
    expect(linkify('')).toBe('');
  });

  it('should handle text without URLs', () => {
    expect(linkify('hello world')).toBe('hello world');
  });
});
