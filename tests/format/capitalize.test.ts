import { describe, it, expect } from 'vitest';
import { capitalizeText } from '../../src/format/capitalize';

describe('capitalizeText', () => {
  it('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalizeText('hello world')).toBe('Hello world');
  });

  it('should handle all uppercase strings', () => {
    expect(capitalizeText('HELLO WORLD')).toBe('Hello world');
  });

  it('should handle empty strings', () => {
    expect(capitalizeText('')).toBe('');
  });

  it('should handle single character strings', () => {
    expect(capitalizeText('h')).toBe('H');
  });

  it('should handle mixed case strings', () => {
    expect(capitalizeText('hELLo WoRLd')).toBe('Hello world');
  });
});
