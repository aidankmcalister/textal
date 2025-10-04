import { describe, it, expect } from 'vitest';
import { onlyNumeric } from '../../src/clean/onlyNumeric';

describe('onlyNumeric', () => {
  it('should keep only numeric characters', () => {
    expect(onlyNumeric('abc123')).toBe('123');
  });

  it('should remove currency symbols and decimals', () => {
    expect(onlyNumeric('price: $45.99')).toBe('4599');
  });

  it('should handle strings with no numbers', () => {
    expect(onlyNumeric('hello world')).toBe('');
  });

  it('should handle empty strings', () => {
    expect(onlyNumeric('')).toBe('');
  });

  it('should remove spaces and hyphens', () => {
    expect(onlyNumeric('123-456-7890')).toBe('1234567890');
  });

  it('should handle only numbers', () => {
    expect(onlyNumeric('123456')).toBe('123456');
  });
});
