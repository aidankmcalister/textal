import { describe, it, expect } from 'vitest';
import { graphemeCount } from '../../src/metrics/graphemeCount';

describe('graphemeCount', () => {
  it('should count graphemes in simple strings', () => {
    expect(graphemeCount('hello')).toBe(5);
  });

  it('should count graphemes with accents', () => {
    expect(graphemeCount('café')).toBe(4);
  });

  it('should count emoji as single grapheme', () => {
    expect(graphemeCount('👋')).toBe(1);
  });

  it('should handle empty strings', () => {
    expect(graphemeCount('')).toBe(0);
  });
});
