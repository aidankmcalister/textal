import { describe, it, expect } from 'vitest';
import { truncate } from '../../src/format/truncate';

describe('truncate', () => {
  it('should truncate string longer than specified length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  it('should not truncate string shorter than specified length', () => {
    expect(truncate('hello world', 11)).toBe('hello world');
  });

  it('should handle custom ending', () => {
    expect(truncate('hello world', 8, '…')).toBe('hello wo…');
  });

  it('should handle empty strings', () => {
    expect(truncate('', 5)).toBe('');
  });

  it('should handle zero length', () => {
    expect(truncate('hello', 0)).toBe('...');
  });

  it('should use default ending', () => {
    expect(truncate('hello world', 7)).toBe('hello w...');
  });
});
