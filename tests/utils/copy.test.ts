import { describe, it, expect, vi, beforeEach } from 'vitest';
import { copy } from '../../src/utils/copy';

describe('copy', () => {
  beforeEach(() => {
    // Mock the clipboard API
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(() => Promise.resolve()),
        readText: vi.fn(() => Promise.resolve('hello world'))
      },
      writable: true,
    });
  });

  it('should copy text to clipboard', async () => {
    const text = 'hello world';
    const result = await copy(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    expect(result).toBe(text);
  });

  it('should handle empty string', async () => {
    const text = '';
    const result = await copy(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    expect(result).toBe(text);
  });

  it('should throw error when clipboard API is not available', async () => {
    // Remove the clipboard API for this test
    Object.defineProperty(navigator, 'clipboard', { value: undefined });
    
    await expect(copy('test')).rejects.toThrow('Clipboard API not available');
  });
});