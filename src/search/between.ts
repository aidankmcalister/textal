/**
 * Extracts text between two tokens (first match only).
 * @param str - The string to search in
 * @param startToken - The starting token
 * @param endToken - The ending token
 * @returns The text between tokens, or empty string if not found
 * @example
 * between('hello [world]', '[', ']') // 'world'
 * between('foo (bar) (baz)', '(', ')') // 'bar'
 * between('no match', '[', ']') // ''
 */

export function between(
  str: string,
  startToken: string,
  endToken: string
): string {
  if (!str || !startToken || !endToken) return '';
  const startIndex = str.indexOf(startToken);
  if (startIndex === -1) return '';
  const searchStart = startIndex + startToken.length;
  const endIndex = str.indexOf(endToken, searchStart);
  if (endIndex === -1) return '';
  return str.slice(searchStart, endIndex);
}
