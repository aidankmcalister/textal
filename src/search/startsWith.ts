/**
 * Checks if a string starts with a given term.
 * @param str - The string to check
 * @param term - The term to search for
 * @param opts - Search options
 * @param opts.caseSensitive - Whether to perform case-sensitive search (default: true)
 * @returns True if string starts with term
 * @example
 * startsWith('Hello World', 'Hello') // true
 * startsWith('Hello World', 'hello') // false
 * startsWith('Hello World', 'hello', { caseSensitive: false }) // true
 */

export interface StartsWithOptions {
  caseSensitive?: boolean;
}

export function startsWith(str: string, term: string, opts: StartsWithOptions = {}): boolean {
  if (!str || !term) return false;

  const { caseSensitive = true } = opts;

  if (caseSensitive) {
    return str.startsWith(term);
  }

  return str.toLowerCase().startsWith(term.toLowerCase());
}
