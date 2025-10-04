/**
 * Truncates a string to a specified length and adds an ellipsis if needed.
 * @param str - The string to truncate
 * @param length - The maximum length of the string
 * @param ending - The ending to append (default: '...')
 * @returns The truncated string
 * @example
 * truncate('hello world', 5) // 'hello...'
 * truncate('hello world', 11) // 'hello world'
 * truncate('hello world', 8, '…') // 'hello wo…'
 */

export function truncate(
  str: string,
  length: number,
  ending: string = '...'
): string {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + ending;
}
