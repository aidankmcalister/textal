/**
 * Counts the number of lines in a string.
 * @param str - The string to count lines in
 * @returns The number of lines
 * @example
 * lineCount('hello\nworld') // 2
 * lineCount('single line') // 1
 * lineCount('line1\nline2\nline3') // 3
 */

export function lineCount(str: string): number {
  if (!str) return 0;
  return str.split('\n').length;
}
