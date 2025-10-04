import { describe, it, expect } from 'vitest';
import { splitLines } from '../../src/utils/splitLines';

describe('splitLines', () => {
  it('should split lines', () => {
    expect(splitLines('hello\nworld')).toEqual(['hello', 'world']);
    expect(splitLines('line1\nline2\nline3')).toEqual(['line1', 'line2', 'line3']);
  });

  it('should handle single line', () => {
    expect(splitLines('single line')).toEqual(['single line']);
  });

  it('should handle empty strings', () => {
    expect(splitLines('')).toEqual([]);
  });
});
