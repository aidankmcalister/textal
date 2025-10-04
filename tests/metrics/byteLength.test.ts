import { describe, it, expect } from 'vitest';
import { byteLength } from '../../src/metrics/byteLength';

describe('byteLength', () => {
  it('should count bytes in ASCII strings', () => {
    expect(byteLength('hello')).toBe(5);
  });

  it('should count bytes in UTF-8 strings with accents', () => {
    expect(byteLength('café')).toBe(5); // é is 2 bytes
  });

  it('should count bytes in emoji', () => {
    expect(byteLength('👋')).toBe(4);
  });

  it('should handle empty strings', () => {
    expect(byteLength('')).toBe(0);
  });
});
