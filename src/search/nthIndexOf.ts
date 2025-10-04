/**
 * Finds the nth occurrence of a term in a string.
 * @param str - The string to search in
 * @param term - The term to search for
 * @param n - The occurrence number (1-indexed)
 * @param opts - Search options
 * @param opts.caseSensitive - Whether to perform case-sensitive search (default: true)
 * @returns Position of nth occurrence, or -1 if not found
 * @example
 * nthIndexOf('banana', 'a', 1) // 1
 * nthIndexOf('banana', 'a', 2) // 3
 * nthIndexOf('banana', 'a', 3) // 5
 * nthIndexOf('banana', 'a', 4) // -1
 */

export interface NthIndexOfOptions {
  caseSensitive?: boolean;
}

export function nthIndexOf(
  str: string,
  term: string,
  n: number,
  opts: NthIndexOfOptions = {}
): number {
  if (!str || !term || n < 1) return -1;

  const { caseSensitive = true } = opts;
  const searchStr = caseSensitive ? str : str.toLowerCase();
  const searchTerm = caseSensitive ? term : term.toLowerCase();

  let index = -1;
  let count = 0;

  while (count < n) {
    index = searchStr.indexOf(searchTerm, index + 1);
    if (index === -1) return -1;
    count++;
  }

  return index;
}
