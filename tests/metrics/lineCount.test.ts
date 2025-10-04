import { describe, it, expect } from 'vitest';
import { lineCount } from '../../src/metrics/lineCount';

describe('lineCount', () => {
  it('should count lines', () => {
    expect(lineCount('hello\nworld')).toBe(2);
    expect(lineCount('line1\nline2\nline3')).toBe(3);
  });

  it('should count single line', () => {
    expect(lineCount('single line')).toBe(1);
  });

  it('should handle empty strings', () => {
    expect(lineCount('')).toBe(0);
  });

  it('should count empty lines', () => {
    expect(lineCount('hello\n\nworld')).toBe(3);
  });
});
