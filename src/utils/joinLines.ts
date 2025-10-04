/**
 * Joins an array of lines into a single string.
 * @param lines - The lines to join
 * @returns The joined string
 * @example
 * joinLines(['hello', 'world']) // 'hello\nworld'
 * joinLines(['line1', 'line2', 'line3']) // 'line1\nline2\nline3'
 */

export function joinLines(lines: string[]): string {
  if (!lines) return '';
  return lines.join('\n');
}
