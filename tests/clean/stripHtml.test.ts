import { describe, it, expect } from 'vitest';
import { stripHtml } from '../../src/clean/stripHtml';

describe('stripHtml', () => {
  it('should remove simple HTML tags', () => {
    expect(stripHtml('<p>hello</p>')).toBe('hello');
  });

  it('should remove nested HTML tags', () => {
    expect(stripHtml('<div>hello <b>world</b></div>')).toBe('hello world');
  });

  it('should handle plain text', () => {
    expect(stripHtml('plain text')).toBe('plain text');
  });

  it('should handle empty strings', () => {
    expect(stripHtml('')).toBe('');
  });

  it('should remove self-closing tags', () => {
    expect(stripHtml('hello<br/>world')).toBe('helloworld');
  });

  it('should remove tags with attributes', () => {
    expect(stripHtml('<a href="url">link</a>')).toBe('link');
  });
});
