/**
 * Finds all positions of a term in a string.
 * @param str - The string to search in
 * @param term - The term to search for
 * @param opts - Search options
 * @param opts.caseSensitive - Whether to perform case-sensitive search (default: true)
 * @returns Array of all positions where term appears
 * @example
 * indexOfAll('banana', 'ana') // [1, 3]
 * indexOfAll('Hello World', 'o') // [4, 7]
 * indexOfAll('Hello World', 'O', { caseSensitive: false }) // [4, 7]
 */

export interface IndexOfAllOptions {
  caseSensitive?: boolean;
}

export function indexOfAll(
  str: string,
  term: string,
  opts: IndexOfAllOptions = {}
): number[] {
  if (!str || !term) return [];

  const { caseSensitive = true } = opts;
  const positions: number[] = [];
  const searchStr = caseSensitive ? str : str.toLowerCase();
  const searchTerm = caseSensitive ? term : term.toLowerCase();

  let index = searchStr.indexOf(searchTerm);

  while (index !== -1) {
    positions.push(index);
    index = searchStr.indexOf(searchTerm, index + 1);
  }

  return positions;
}
