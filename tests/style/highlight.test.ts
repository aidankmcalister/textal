import { describe, it, expect } from 'vitest';
import { highlight } from '../../src/style/highlight';

describe('highlight', () => {
  it('should highlight matching term', () => {
    expect(highlight('hello world', 'world')).toBe('hello <span class="bg-yellow-200 text-black">world</span>');
  });

  it('should be case insensitive by default', () => {
    expect(highlight('hello HELLO', 'hello')).toBe('<span class="bg-yellow-200 text-black">hello</span> <span class="bg-yellow-200 text-black">HELLO</span>');
  });

  it('should respect case sensitivity option', () => {
    expect(highlight('hello HELLO', 'hello', 'highlight', { caseSensitive: true })).toBe('<span class="highlight">hello</span> HELLO');
  });

  it('should use custom class name', () => {
    expect(highlight('hello world', 'world', 'custom-highlight')).toBe('hello <span class="custom-highlight">world</span>');
  });

  it('should handle whole word option', () => {
    expect(highlight('hello hell', 'hell', 'hl', { wholeWord: true })).toBe('hello <span class="hl">hell</span>');
  });

  it('should escape HTML in original text', () => {
    expect(highlight('<div>test</div>', 'test')).toBe('&lt;div&gt;<span class="bg-yellow-200 text-black">test</span>&lt;/div&gt;');
  });

  it('should handle empty strings', () => {
    expect(highlight('', 'test')).toBe('');
    expect(highlight('test', '')).toBe('test');
  });
});
