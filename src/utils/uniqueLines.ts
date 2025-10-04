/**
 * Removes duplicate lines from a string.
 * @param str - The string to deduplicate
 * @returns The string with unique lines
 * @example
 * uniqueLines('hello\nworld\nhello') // 'hello\nworld'
 * uniqueLines('a\nb\na\nc') // 'a\nb\nc'
 */

export function uniqueLines(str: string): string {
  if (!str) return str;
  const lines = str.split('\n');
  const unique = Array.from(new Set(lines));
  return unique.join('\n');
}
