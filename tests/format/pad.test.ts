import { describe, it, expect } from 'vitest';
import { pad } from '../../src/format/pad';

describe('pad', () => {
  // Test backward compatibility with padEnd
  describe('padEnd compatibility', () => {
    it('should pad end with spaces by default', () => {
      expect(pad('hello', 10)).toBe('hello     ');
    });

    it('should pad end with custom character', () => {
      expect(pad('hello', 10, { fillChar: '0' })).toBe('hello00000');
    });
  });

  // Test backward compatibility with padStart
  describe('padStart compatibility', () => {
    it('should pad start with spaces when side is start', () => {
      expect(pad('hello', 10, { side: 'start' })).toBe('     hello');
    });

    it('should pad start with custom character', () => {
      expect(pad('hello', 10, { side: 'start', fillChar: '0' })).toBe('00000hello');
    });
  });

  // Test new functionality
  describe('new functionality', () => {
    it('should pad both sides with spaces', () => {
      expect(pad('hello', 10, { side: 'both' })).toBe('  hello   ');
    });

    it('should pad both sides with custom character', () => {
      expect(pad('hello', 11, { side: 'both', fillChar: '-' })).toBe('---hello---');
    });

    it('should handle odd padding length by adding extra to the end', () => {
      expect(pad('hi', 7, { side: 'both' })).toBe('  hi   ');
    });
  });

  // Common test cases
  describe('common functionality', () => {
    it('should not pad if string is longer than target length', () => {
      expect(pad('hello', 3)).toBe('hello');
      expect(pad('hello', 3, { side: 'start' })).toBe('hello');
      expect(pad('hello', 3, { side: 'both' })).toBe('hello');
    });

    it('should handle empty strings', () => {
      expect(pad('', 5)).toBe('     ');
      expect(pad('', 5, { side: 'start' })).toBe('     ');
      expect(pad('', 5, { side: 'both' })).toBe('     ');
    });

    it('should handle zero length', () => {
      expect(pad('hello', 0)).toBe('hello');
      expect(pad('hello', 0, { side: 'start' })).toBe('hello');
      expect(pad('hello', 0, { side: 'both' })).toBe('hello');
    });

    it('should handle exact length match', () => {
      expect(pad('hello', 5)).toBe('hello');
      expect(pad('hello', 5, { side: 'start' })).toBe('hello');
      expect(pad('hello', 5, { side: 'both' })).toBe('hello');
    });

    it('should handle null/undefined input', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(pad(undefined as any, 5)).toBe('     ');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(pad(null as any, 5)).toBe('     ');
    });
  });
});
