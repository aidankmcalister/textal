/**
 * Counts the number of characters in a string.
 * @param str - The string to count characters in
 * @param opts - Options for counting
 * @returns The number of characters
 * @example
 * charCount('hello world') // 11
 * charCount('hello world', { excludeSpaces: true }) // 10
 * charCount('') // 0
 */

export function charCount(
  str: string,
  opts?: { excludeSpaces?: boolean }
): number {
  if (!str) return 0;
  if (opts?.excludeSpaces) {
    return str.replace(/\s/g, '').length;
  }
  return str.length;
}
