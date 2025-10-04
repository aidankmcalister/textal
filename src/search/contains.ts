/**
 * Checks if a string contains a search term.
 * @param str - The string to search in
 * @param term - The term to search for
 * @param opts - Options for the search
 * @returns True if the term is found, false otherwise
 * @example
 * contains('hello world', 'world') // true
 * contains('hello world', 'WORLD') // true
 * contains('hello world', 'WORLD', { caseSensitive: true }) // false
 */

export function contains(
  str: string,
  term: string,
  opts?: { caseSensitive?: boolean }
): boolean {
  if (!str || !term) return false;
  if (opts?.caseSensitive) {
    return str.includes(term);
  }
  return str.toLowerCase().includes(term.toLowerCase());
}
