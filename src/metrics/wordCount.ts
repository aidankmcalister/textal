/**
 * Counts the number of words in a string.
 * @param str - The string to count words in
 * @returns The number of words
 * @example
 * wordCount('hello world') // 2
 * wordCount('hello  world') // 2
 * wordCount('') // 0
 */

export function wordCount(str: string): number {
  if (!str || !str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}
