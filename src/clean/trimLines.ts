/**
 * Trims whitespace from each line in a string.
 * @param str - The string to trim lines in
 * @returns The string with trimmed lines
 * @example
 * trimLines('  hello  \n  world  ') // 'hello\nworld'
 * trimLines('  line1  \n\n  line2  ') // 'line1\n\nline2'
 */

export function trimLines(str: string): string {
  if (!str) return str;
  return str.split('\n').map(line => line.trim()).join('\n');
}
