import { describe, it, expect } from 'vitest';
import { dedent } from '../../src/clean/dedent';

describe('dedent', () => {
  it('should remove common leading indentation', () => {
    expect(dedent('  hello\n  world')).toBe('hello\nworld');
    expect(dedent('    line1\n    line2\n    line3')).toBe('line1\nline2\nline3');
  });

  it('should preserve relative indentation', () => {
    expect(dedent('    line1\n      line2\n    line3')).toBe('line1\n  line2\nline3');
  });

  it('should ignore empty lines when calculating minimum indent', () => {
    expect(dedent('  hello\n\n  world')).toBe('hello\n\nworld');
  });

  it('should handle strings with no indentation', () => {
    expect(dedent('hello\nworld')).toBe('hello\nworld');
  });

  it('should handle empty strings', () => {
    expect(dedent('')).toBe('');
  });
});
