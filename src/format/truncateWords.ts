/**
 * Truncates a string to a specified number of words.
 * @param str - The string to truncate
 * @param count - Maximum number of words
 * @param end - Suffix to append when truncated (default: '…')
 * @returns The truncated string
 * @example
 * truncateWords('hello world foo bar', 2) // 'hello world…'
 * truncateWords('hello world', 5) // 'hello world'
 * truncateWords('hello world foo', 2, '...') // 'hello world...'
 */

export function truncateWords(
  str: string,
  count: number,
  end: string = '…'
): string {
  if (!str) return str;

  const words = str.split(/\s+/);

  if (words.length <= count) {
    return str;
  }

  return words.slice(0, count).join(' ') + end;
}
