/**
 * Normalizes whitespace by collapsing spaces, tabs, and newlines into single spaces.
 * @param str - The string to normalize
 * @returns The string with normalized whitespace
 * @example
 * normalizeWhitespace('hello   world') // 'hello world'
 * normalizeWhitespace('hello\n\nworld') // 'hello world'
 * normalizeWhitespace('hello\t\tworld') // 'hello world'
 */

export function normalizeWhitespace(str: string): string {
  if (!str) return str;
  return str.replace(/\s+/g, ' ').trim();
}
