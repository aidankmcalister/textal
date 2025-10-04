/**
 * Checks if a string ends with a given term.
 * @param str - The string to check
 * @param term - The term to search for
 * @param opts - Search options
 * @param opts.caseSensitive - Whether to perform case-sensitive search (default: true)
 * @returns True if string ends with term
 * @example
 * endsWith('Hello World', 'World') // true
 * endsWith('Hello World', 'world') // false
 * endsWith('Hello World', 'world', { caseSensitive: false }) // true
 */

export interface EndsWithOptions {
  caseSensitive?: boolean;
}

export function endsWith(
  str: string,
  term: string,
  opts: EndsWithOptions = {}
): boolean {
  if (!str || !term) return false;

  const { caseSensitive = true } = opts;

  if (caseSensitive) {
    return str.endsWith(term);
  }

  return str.toLowerCase().endsWith(term.toLowerCase());
}
