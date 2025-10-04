/**
 * Extracts all text occurrences between two tokens.
 * @param str - The string to search in
 * @param startToken - The starting token
 * @param endToken - The ending token
 * @returns Array of all text segments between tokens
 * @example
 * betweenAll('foo (bar) (baz)', '(', ')') // ['bar', 'baz']
 * betweenAll('hello [world] and [universe]', '[', ']') // ['world', 'universe']
 * betweenAll('no match', '[', ']') // []
 */

export function betweenAll(
  str: string,
  startToken: string,
  endToken: string
): string[] {
  if (!str || !startToken || !endToken) return [];

  const results: string[] = [];
  let searchIndex = 0;

  while (searchIndex < str.length) {
    const startIndex = str.indexOf(startToken, searchIndex);
    if (startIndex === -1) break;

    const searchStart = startIndex + startToken.length;
    const endIndex = str.indexOf(endToken, searchStart);
    if (endIndex === -1) break;

    results.push(str.slice(searchStart, endIndex));
    searchIndex = endIndex + endToken.length;
  }

  return results;
}
