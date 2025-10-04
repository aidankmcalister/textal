/**
 * Extracts all matches of a pattern from a string.
 * @param str - The string to extract from
 * @param pattern - The regex pattern to match
 * @returns An array of all matches
 * @example
 * extract('hello 123 world 456', /\d+/g) // ['123', '456']
 * extract('foo@bar.com, baz@qux.com', /\S+@\S+/g) // ['foo@bar.com,', 'baz@qux.com']
 * extract('no match', /\d+/g) // []
 */

export function extract(str: string, pattern: RegExp): string[] {
  if (!str) return [];
  const matches = str.match(pattern);
  return matches || [];
}
