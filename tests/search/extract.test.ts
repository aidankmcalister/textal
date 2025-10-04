import { describe, it, expect } from 'vitest';
import { extract } from '../../src/search/extract';

describe('extract', () => {
  it('should extract numbers', () => {
    expect(extract('hello 123 world 456', /\d+/g)).toEqual(['123', '456']);
  });

  it('should extract emails', () => {
    expect(extract('contact foo@bar.com or baz@qux.com', /\S+@\S+\.com/g)).toEqual(['foo@bar.com', 'baz@qux.com']);
  });

  it('should return empty array when no matches', () => {
    expect(extract('no match', /\d+/g)).toEqual([]);
  });

  it('should handle empty strings', () => {
    expect(extract('', /\d+/g)).toEqual([]);
  });

  it('should extract words', () => {
    expect(extract('hello world foo', /\w+/g)).toEqual(['hello', 'world', 'foo']);
  });

  it('should extract with capture groups', () => {
    expect(extract('hello123world456', /[a-z]+/g)).toEqual(['hello', 'world']);
  });
});
