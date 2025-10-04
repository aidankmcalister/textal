/**
 * Splits a string into an array of lines.
 * @param str - The string to split
 * @returns Array of lines
 * @example
 * splitLines('hello\nworld') // ['hello', 'world']
 * splitLines('line1\nline2\nline3') // ['line1', 'line2', 'line3']
 */

export function splitLines(str: string): string[] {
  if (!str) return [];
  return str.split('\n');
}
